import express from "express";
import { registerCarCompany } from "../controllers/carCompanyController.js";
import { protect } from "../middleware/authMiddleware.js";

const carCompanyRouter = express.Router();

carCompanyRouter.post("/", protect, registerCarCompany);

export default carCompanyRouter;
