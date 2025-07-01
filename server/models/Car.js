import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
  {
    carCompany: { type: String, ref: "CarCompany", required: true },
    carType: { type: String, required: true },
    carModel: { type: String, required: true },
    licenceNumber: { type: String, required: true },
    pricePerNight: { type: Number, required: true },
    amenities: { type: Array, required: true },
    images: [{ type: String }],
    isAvailable: { type: Boolean, default: true },
    carAddress: { type: String, required: true },
  },
  { timestamps: true }
);

const Car = mongoose.model("Car", carSchema);

export default Car;
