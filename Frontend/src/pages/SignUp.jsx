import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import Select from "react-select";
import { useNavigate } from 'react-router-dom';

const COUNTRIES = [
  { code: "US", name: "United States", dialCode: "+1" },
  { code: "IN", name: "India", dialCode: "+91" },
  { code: "GB", name: "United Kingdom", dialCode: "+44" },
  { code: "FR", name: "France", dialCode: "+33" },
  { code: "DE", name: "Germany", dialCode: "+49" },
  { code: "CN", name: "China", dialCode: "+86" },
  { code: "JP", name: "Japan", dialCode: "+81" },
  { code: "KR", name: "South Korea", dialCode: "+82" },
  { code: "AU", name: "Australia", dialCode: "+61" },
  { code: "BR", name: "Brazil", dialCode: "+55" },
  { code: "CA", name: "Canada", dialCode: "+1" },
  { code: "MX", name: "Mexico", dialCode: "+52" },
  { code: "ES", name: "Spain", dialCode: "+34" },
  { code: "IT", name: "Italy", dialCode: "+39" },
  { code: "RU", name: "Russia", dialCode: "+7" },
];

const COUNTRY_OPTIONS = COUNTRIES.map((country) => ({
  value: country.code,
  label: country.name,
  dialCode: country.dialCode,
}));

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    countryCode: "+1",
    gstin: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    country: "US",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // When country changes, update countryCode as well
  const handleCountryChange = (selectedOption) => {
    setFormData((prev) => ({
      ...prev,
      country: selectedOption.value,
      countryCode: selectedOption.dialCode,
    }));
  };

  const getPasswordStrength = (password) => {
    if (!password) return { text: "", color: "" };
    if (password.length < 7) return { text: "Weak", color: "text-red-500" };
    if (password.length < 9) return { text: "Fair", color: "text-orange-500" };
    if (
      password.length >= 9 &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!@#$%^&*]/.test(password)
    ) {
      return { text: "Strong", color: "text-green-500" };
    }
    if (password.length >= 8) return { text: "Good", color: "text-blue-500" };
    return { text: "Fair", color: "text-orange-500" };
  };

  const passwordStrength = getPasswordStrength(formData.password);

  const validateForm = () => {
    const errors = [];

    if (!formData.firstName.trim()) errors.push("First name is required");
    if (!formData.lastName.trim()) errors.push("Last name is required");
    if (!formData.email.trim()) errors.push("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.push("Email is invalid");
    if (!formData.phoneNumber.trim()) errors.push("Phone number is required");
    if (!formData.streetAddress.trim()) errors.push("Street address is required");
    if (!formData.city.trim()) errors.push("City is required");
    if (!formData.state.trim()) errors.push("State/Province is required");
    if (!formData.postalCode.trim()) errors.push("Postal code is required");
    if (!formData.country.trim()) errors.push("Country is required");
    if (!formData.password) errors.push("Password is required");
    if (formData.password !== formData.confirmPassword) errors.push("Passwords don't match");

    // Optional GSTIN validation
    if (
      formData.gstin.trim() &&
      !/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(
        formData.gstin.trim()
      )
    ) {
      errors.push("Invalid GSTIN format");
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (validationErrors.length) {
      setErrors(validationErrors);
      return;
    }
    setErrors([]);
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("✅ Account created successfully!");
        console.log("Registered user:", result);
        navigate('/login');
        // Clear form or redirect as needed
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          countryCode: "+1",
          gstin: "",
          streetAddress: "",
          city: "",
          state: "",
          postalCode: "",
          country: "US",
          password: "",
          confirmPassword: "",
        });
      } else {
        const errorMessage =
          result.errors?.[0]?.msg || result.errors || "Something went wrong.";
        setErrors([errorMessage]);
      }
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      setErrors(["Something went wrong while submitting the form."]);
    } finally {
      setLoading(false);
    }
  };

  const passwordsMatch =
    formData.password &&
    formData.confirmPassword &&
    formData.password === formData.confirmPassword;
  const passwordsDontMatch =
    formData.password &&
    formData.confirmPassword &&
    formData.password !== formData.confirmPassword;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white">
      <form onSubmit={handleSubmit} className="space-y-8">
        <h2 className="text-2xl font-bold mb-2">Create account</h2>

        {/* Show Errors */}
        {errors.length > 0 && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
            <ul className="list-disc list-inside">
              {errors.map((err, i) => (
                <li key={i}>{err}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Personal Information */}
        <section className="border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-6 text-gray-800">
            Personal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="sr-only">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="sr-only">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            {/* Phone Number with Country Code */}
            <div className="relative">
              <label htmlFor="phoneNumber" className="sr-only">
                Phone Number
              </label>
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center z-10 pointer-events-none">
                <ReactCountryFlag
                  countryCode={formData.country}
                  svg
                  style={{
                    width: "1.2em",
                    height: "1.2em",
                    marginRight: "8px",
                  }}
                />
                <span className="text-gray-700">{formData.countryCode}</span>
              </div>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
                className="w-full p-3 pl-20 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
          </div>
        </section>

        {/* Address Information */}
        <section className="border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-6 text-gray-800">
            Address Information
          </h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="streetAddress" className="sr-only">
                Street Address
              </label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                placeholder="Street Address"
                value={formData.streetAddress}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="city" className="sr-only">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label htmlFor="state" className="sr-only">
                  State/Province
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  placeholder="State/Province"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div>
                <label htmlFor="postalCode" className="sr-only">
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  placeholder="Postal Code"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              {/* Country Select */}
              <div>
                <Select
                  options={COUNTRY_OPTIONS}
                  value={COUNTRY_OPTIONS.find(
                    (opt) => opt.value === formData.country
                  )}
                  onChange={handleCountryChange}
                  formatOptionLabel={(country) => (
                    <div className="flex items-center gap-2">
                      <ReactCountryFlag
                        countryCode={country.value}
                        svg
                        style={{ width: "1em", height: "1em" }}
                      />
                      <span>{country.label}</span>
                    </div>
                  )}
                  classNames={{
                    control: (state) =>
                      `!bg-white !border !border-gray-300 !rounded-md !min-h-[48px] !pl-[0.5em] !shadow-none
         ${
           state.isFocused
             ? "!border-blue-500 !ring-2 !ring-blue-500 !ring-opacity-50"
             : ""
         }
         hover:!border-gray-400`,
                    input: () => "!m-0 !p-0",
                    valueContainer: () => "!py-0 !px-2",
                    singleValue: () => "!flex !items-center !gap-2 !ml-0",
                    menu: () =>
                      "!mt-1 !border !border-gray-200 !shadow-lg !rounded-md !z-20",
                    option: (state) =>
                      `!flex !items-center !gap-2
         ${state.isSelected ? "!bg-blue-500" : ""}
         ${state.isFocused && !state.isSelected ? "!bg-gray-500" : ""}`,
                    placeholder: () => "!text-gray-400",
                    dropdownIndicator: () =>
                      "!text-gray-400 hover:!text-gray-600",
                    clearIndicator: () => "!text-gray-400 hover:!text-gray-600",
                  }}
                  components={{
                    DropdownIndicator: () => (
                      <div className="pr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    ),
                    IndicatorSeparator: () => null,
                  }}
                  placeholder="Select Country"
                  unstyled
                />
              </div>
            </div>

            {/* GSTIN Field */}
            <div>
              <label htmlFor="gstin" className="sr-only">
                GSTIN
              </label>
              <input
                type="text"
                id="gstin"
                name="gstin"
                placeholder="Enter your GSTIN (if any)"
                value={formData.gstin}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              <p className="text-sm text-gray-500 mt-1">
                GSTIN is optional. Format: 15 characters (e.g., 22AAAAA0000A1Z5)
              </p>
            </div>
          </div>
        </section>

        {/* Account Security */}
        <section className="border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-6 text-gray-800">
            Account Security
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {formData.password && (
                <div className="mt-2 text-sm">
                  Password Strength:
                  <span className={`ml-1 font-medium ${passwordStrength.color}`}>
                    {passwordStrength.text}
                  </span>
                </div>
              )}
            </div>
            <div>
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  className={`w-full p-3 pr-10 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
                    passwordsDontMatch
                      ? "border-red-300 bg-red-50"
                      : passwordsMatch
                      ? "border-green-300 bg-green-50"
                      : "border-gray-300"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                  aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {formData.confirmPassword && (
                <div className="mt-2 text-sm">
                  {passwordsMatch && (
                    <span className="text-green-600">✓ Passwords match</span>
                  )}
                  {passwordsDontMatch && (
                    <span className="text-red-600">✗ Passwords don't match</span>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </div>
      </form>
    </div>
  );
}