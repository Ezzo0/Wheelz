import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import {
  createCar,
  getCars,
  getOwnerCars,
  toggleCarAvailability,
} from "../controllers/carController.js";
import { protect } from "../middleware/authMiddleware.js";

const carRouter = express.Router();

carRouter.post("/", upload.array("images", 4), protect, createCar);
carRouter.get("/", getCars);
carRouter.get("/owner", protect, getOwnerCars);
carRouter.post("/toggle-availability", protect, toggleCarAvailability);

export default carRouter;
