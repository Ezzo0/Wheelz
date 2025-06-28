import CarCompany from "../models/CarCompany.js";
import User from "../models/User.js";

// Create a new car
export const registerCarCompany = async (req, res) => {
  try {
    const { name, address, contact, city } = req.body;
    const owner = req.user._id;

    // Check if the User Already Registered
    const carCompany = await CarCompany.findOne({ owner });
    if (carCompany) {
      return res.json({
        success: false,
        message: "Car Company Already Registered",
      });
    }

    await CarCompany.create({
      name,
      address,
      contact,
      city,
      owner,
    });
    await User.findByIdAndUpdate(owner, { role: "carCompanyOwner" });
    res.json({ success: true, message: "Car Company Registered Successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
