import transporter from "../configs/nodemailer.js";
import Booking from "../models/Booking.js";
import Car from "../models/Car.js";
import CarCompany from "../models/CarCompany.js";

// Function to check Availability of Car
const checkAvailability = async (checkInDate, checkOutDate, car) => {
  try {
    const bookings = await Booking.find({
      car,
      checkInDate: { $lte: checkOutDate },
      checkOutDate: { $gte: checkInDate },
    });

    const isAvailable = bookings.length === 0;
    return isAvailable;
  } catch (error) {
    console.error(error.message);
  }
};

// API to check Availability of Car
// POST /api/bookings/check-availability
export const checkAvailabilityAPI = async (req, res) => {
  try {
    const { checkInDate, checkOutDate, car } = req.body;
    const isAvailable = await checkAvailability(checkInDate, checkOutDate, car);
    res.json({ success: true, isAvailable });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// API to create a new Booking
// POST /api/bookings/book
export const createBoking = async (req, res) => {
  try {
    const { checkInDate, checkOutDate, car } = req.body;
    const user = req.user._id;
    // Before Booking Check Availability
    const isAvailable = await checkAvailability(checkInDate, checkOutDate, car);
    if (!isAvailable) {
      return res.json({ success: false, message: "Car is not available" });
    }

    // Get totalPrice for car
    const carData = await Car.findById(car).populate("carCompany");
    let totalPrice = carData.pricePerNight;

    // Calculate totalPrice based on the number of days
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const timeDiff = checkOut.getTime() - checkIn.getTime();
    const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    totalPrice = totalPrice * days;

    const booking = await Booking.create({
      user,
      car,
      carCompany: carData.carCompany._id,
      checkInDate,
      checkOutDate,
      totalPrice,
    });

    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: req.user.email,
      subject: "Car Booking Details",
      html: `
        <h2>Your Booking Details</h2>
        <p>Dear: ${req.user.username}, </p>
        <p>Thank you for booking with us. Your booking details are as follows:</p>
        <ul>
          <li><strong>Booking ID:</strong> ${booking._id}</li>
          <li><strong>Car:</strong> ${carData.carModel}</li>
          <li><strong>Address:</strong> ${carData.carAddress}</li>
          <li><strong>Car Company:</strong> ${carData.carCompany.name}</li>
          <li><strong>Check-In Date:</strong> ${booking.checkInDate.toDateString()}</li>
          <li><strong>Check-Out Date:</strong> ${booking.checkOutDate.toDateString()}</li>
          <li><strong>Total Price:</strong> $ ${booking.totalPrice}</li>
        </ul>
        <p>Please keep this booking ID for your reference.</p>
        <p>Thank you for choosing us.</p>
        <p>Best regards,</p>
      `,
    };

    // Send confirmation Email
    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Booking created successfully" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: "Failed to create booking" });
  }
};

// API to get all bookings for a user
// GET /api/bookings/user
export const getUserBookings = async (req, res) => {
  try {
    const user = req.user._id;
    const bookings = await Booking.find({ user })
      .populate("car carCompany")
      .sort({ createdAt: -1 });
    res.json({ success: true, bookings });
  } catch (error) {
    res.json({ success: false, message: "Failed to get bookings" });
  }
};

export const getCarCompanyBookings = async (req, res) => {
  try {
    const carCompany = await CarCompany.findOne({ owner: req.auth.userId });
    if (!carCompany) {
      return res.json({ success: false, message: "No Car company found" });
    }

    const bookings = await Booking.find({ carCompany: carCompany._id })
      .populate("car carCompany user")
      .sort({ createdAt: -1 });

    // Total Bookings
    const totalBookings = bookings.length;
    //   Total Revenue
    const totalRevenue = bookings.reduce(
      (acc, booking) => acc + booking.totalPrice,
      0
    );

    res.json({
      success: true,
      dashboardData: {
        totalBookings,
        totalRevenue,
        bookings,
      },
    });
  } catch (error) {
    res.json({ success: false, message: "Failed to fetch bookings" });
  }
};
