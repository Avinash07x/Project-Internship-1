import React, { useState } from 'react';
import { User, KeyRound, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    setLoading(true);

    try {
      const res = await fetch('http://localhost:5000/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert('✅ Login successful!');
        localStorage.setItem('token', data.token); // Save token
        navigate('/homepage'); // ✅ Redirect after login
      } else {
        setErrors([data.errors?.[0]?.msg || '❌ Login failed']);
      }
    } catch (err) {
      console.error('Login error:', err);
      setErrors(['❌ Something went wrong.']);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        {errors.length > 0 && (
          <div className="mb-4 text-red-600 text-sm">
            {errors.map((err, idx) => <div key={idx}>• {err}</div>)}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1" htmlFor="email">Email</label>
            <div className="flex items-center border border-gray-300 rounded">
              <span className="px-3 text-gray-600"><User /></span>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter email"
                className="w-full px-3 py-2 focus:outline-none"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1" htmlFor="password">Password</label>
            <div className="flex items-center border border-gray-300 rounded">
              <span className="px-3 text-gray-600"><KeyRound /></span>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter password"
                className="w-full px-3 py-2 focus:outline-none"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span
                className="px-3 cursor-pointer text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </span>
            </div>
            <div className="text-right mt-1 text-sm">
              <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded text-white ${loading ? 'bg-blue-300' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          Not registered?{' '}
          <a href="/signup" className="font-semibold text-blue-600 hover:underline">
            Create account
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;