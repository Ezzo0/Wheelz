import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    user: { type: String, ref: "User", required: true },
    car: { type: String, ref: "Car", required: true },
    carCompany: { type: String, ref: "CarCompany", required: true },
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
    totalPrice: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
    paymentMethod: {
      type: String,
      required: true,
      default: "stripe",
    },
    isPaid: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
