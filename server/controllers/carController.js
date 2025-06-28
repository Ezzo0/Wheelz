import CarCompany from "../models/CarCompany.js";
import { v2 as cloudinary } from "cloudinary";
import Car from "../models/Car.js";

// API to create a new car for a car company
export const createCar = async (req, res) => {
  try {
    const { carType, pricePerNight, amenities, carAddress, carModel } =
      req.body;
    const carCompany = await CarCompany.findOne({ owner: req.auth.userId });

    if (!carCompany) {
      return res.json({ success: false, message: "No Car Company Found" });
    }

    // Upload images to Cloudinary
    const uploadImages = req.files.map(async (file) => {
      // console.log(file);
      const response = await cloudinary.uploader.upload(file.path);
      // console.log(response);
      return response.secure_url;
    });

    // Wait for all images to be uploaded
    const images = await Promise.all(uploadImages);

    await Car.create({
      carCompany: carCompany._id,
      carType,
      carModel,
      pricePerNight: +pricePerNight,
      amenities: JSON.parse(amenities),
      images,
      carAddress,
    });
    res.json({ success: true, message: "Car Created Successfully" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// API to get all cars
export const getCars = async (req, res) => {
  try {
    const cars = await Car.find({ isAvailable: true })
      .populate({
        path: "carCompany",
        populate: {
          path: "owner",
          select: "image",
        },
      })
      .sort({ createdAt: -1 });
    res.json({ success: true, cars });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// API to get all cars for specific car company
export const getOwnerCars = async (req, res) => {
  try {
    const carCompanyData = await CarCompany.findOne({ owner: req.auth.userId });
    const cars = await Car.find({
      carCompany: carCompanyData._id.toString(),
    }).populate("carCompany");
    res.json({ success: true, cars });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// API to toggle car availability
export const toggleCarAvailability = async (req, res) => {
  try {
    const { carId } = req.body;
    const carData = await Car.findById(carId);
    carData.isAvailable = !carData.isAvailable;
    await carData.save();
    res.json({
      success: true,
      message: "Car Availability Updated",
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
