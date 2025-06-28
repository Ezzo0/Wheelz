import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./controllers/clerkWebhooks.js";
import userRouter from "./routes/userRoutes.js";
import carCompanyRouter from "./routes/carCompanyRoutes.js";
import connectCloudinary from "./configs/cloudinary.js";
import carRouter from "./routes/carRoutes.js";
import bookingRouter from "./routes/bookingsRoutes.js";
import { stripeWebhook } from "./controllers/stripeWebhooks.js";

connectDB();
connectCloudinary();

const app = express();

app.use(cors()); // Enable cross-origin resource sharing

// API to listen to Stripe Webhooks
app.post(
  "/api/stripe",
  express.raw({ type: "application/json" }),
  stripeWebhook
);

// Middleware
app.use(express.json());
app.use(clerkMiddleware());

// API to listen to Clerk Webhooks
app.use("/api/clerk", clerkWebhooks);

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api/user", userRouter);
app.use("/api/car-companies", carCompanyRouter);
app.use("/api/cars", carRouter);
app.use("/api/bookings", bookingRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
