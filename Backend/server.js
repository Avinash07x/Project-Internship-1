import express from "express";
import Stripe from "stripe";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/user.routes.js";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/dckeeper")
  .then(() => {
    console.log("Successfully Connect DB..");
  })
  .catch((error) => {
    console.log(error);
  });

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
