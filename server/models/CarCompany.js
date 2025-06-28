import mongoose from "mongoose";

const carCompanySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    contact: { type: String, required: true },
    owner: { type: String, ref: "User", required: true },
    city: { type: String, required: true },
  },
  { timestamps: true }
);

const CarCompany = mongoose.model("CarCompany", carCompanySchema);

export default CarCompany;
