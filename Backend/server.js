import express from "express";
import Stripe from "stripe";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/user.routes.js";
import User from "./models/user.model.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("✅ MongoDB connected");

    try {
      const indexes = await User.collection.indexes();
      const hasUsernameIndex = indexes.find((idx) => idx.name === "username_1");
      if (hasUsernameIndex) {
        await User.collection.dropIndex("username_1");
        console.log("🗑️ Dropped index 'username_1'");
      }
    } catch (error) {
      console.error("⚠️ Index drop error:", error.message);
    }
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err.message));

// Stripe setup
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

// Routes
app.use("/api/user", userRoutes);

app.post("/create-checkout-session", async (req, res) => {
  const { email, planName, price } = req.body;

  if (!email || !planName || typeof price !== "number") {
    return res.status(400).json({ error: "Missing or invalid fields" });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      billing_address_collection: "required",
      customer_email: email,
      line_items: [{
        price_data: {
          currency: "inr",
          product_data: { name: planName },
          unit_amount: price * 100,
        },
        quantity: 1,
      }],
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error("❌ Stripe error:", error.message);
    res.status(500).json({ error: "Payment session creation failed" });
  }
});

// Root
app.get("/", (req, res) => res.send("Stripe backend running 🚀"));

app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
