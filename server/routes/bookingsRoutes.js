import express from "express";
import {
  checkAvailabilityAPI,
  createBoking,
  getUserBookings,
  getCarCompanyBookings,
  stripePayment,
} from "../controllers/bookingController.js";
import { protect } from "../middleware/authMiddleware.js";

const bookingRouter = express.Router();

bookingRouter.post("/check-availability", checkAvailabilityAPI);
bookingRouter.post("/book", protect, createBoking);
bookingRouter.get("/user", protect, getUserBookings);
bookingRouter.get("/car-company", protect, getCarCompanyBookings);
bookingRouter.post("/stripe-payment", protect, stripePayment);

export default bookingRouter;
