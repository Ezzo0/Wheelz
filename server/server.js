import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./controllers/clerkWebhooks.js";

connectDB();

const app = express();

app.use(cors()); // Enable cross-origin resource sharing

app.use("/api/clerk/webhooks", express.raw({ type: "application/json" }));

// Middleware
app.use(express.json());
app.use(clerkMiddleware());

// API to listen to Clerk Webhooks
app.post("/api/clerk/webhooks", clerkWebhooks);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
