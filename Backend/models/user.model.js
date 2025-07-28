import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true, maxLength: 30 },
  lastName: { type: String, required: true, trim: true, maxLength: 30 },
  email: {
    type: String, required: true, unique: true, trim: true, lowercase: true,
    minLength: 6, maxLength: 50
  },
  phoneNumber: { type: String, required: true, trim: true },
  countryCode: String,
  gstin: String,
  streetAddress: String,
  city: String,
  state: String,
  postalCode: String,
  country: String,
  password: { type: String, required: true, select: false },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isValidPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

export default mongoose.model("User", userSchema);
