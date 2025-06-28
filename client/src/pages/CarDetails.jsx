import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { facilityIcons, carCommonData } from "../assets/assets";
import StarRating from "../components/StarRating";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
const CarDetails = () => {
  const { id } = useParams();
  const { cars, getToken, axios, navigate } = useAppContext();
  const [car, setCar] = useState(null);
  const [mainImg, setMainImg] = useState(null);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const [isAvailable, setIsAvailable] = useState(false);

  // Check if car is available
  const checkAvailability = async () => {
    try {
      // Check if check-In Date is greater than check-Out Date
      if (checkInDate >= checkOutDate) {
        toast.error("Check-In Date must be before Check-Out Date");
        return;
      }

      const { data } = await axios.post("/api/bookings/check-availability", {
        car: id,
        checkInDate,
        checkOutDate,
      });

      if (data.success) {
        if (data.isAvailable) {
          setIsAvailable(true);
          toast.success("Car is available");
        } else {
          setIsAvailable(false);
          toast.error("Car is not available");
        }
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // onSubmitHandler function to check availability & book the car
  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      if (!isAvailable) {
        return checkAvailability();
      } else {
        const { data } = await axios.post(
          "/api/bookings/book",
          {
            car: id,
            checkInDate,
            checkOutDate,
            paymentMethod: "stripe",
          },
          {
            headers: {
              Authorization: `Bearer ${await getToken()}`,
            },
          }
        );

        if (data.success) {
          toast.success(data.message);
          navigate("/my-bookings");
          scrollTo(0, 0);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const car = cars.find((car) => car._id === id);
    car && setCar(car);
    car && setMainImg(car.images[0]);
  }, [cars]);

  return (
    car && (
      <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
        {/* Car Details */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <h1 className="text-3xl md:text-4xl font-playfair">
            {car.carModel}
            <span className="font-inter text-sm"> ({car.carType})</span>
          </h1>
          <p className="text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full">
            20% OFF
          </p>
        </div>
        {/* Car Rating */}
        <div className="flex items-center gap-1 mt-2">
          <StarRating />
          <p className="ml-2">200+ reviews</p>
        </div>

        {/* Car Address */}
        <div className="flex items-center gap-1 text-gray-500 mt-2">
          <img src={assets.locationIcon} alt="location-icon" />
          <span>{car.carAddress}</span>
        </div>

        {/* Car Images */}
        <div className="flex flex-col lg:flex-row mt-6 gap-6">
          <div className="lg:w-1/2 w-full">
            <img
              src={mainImg}
              alt="car-image"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
            {car?.images.length > 1 &&
              car.images.map((image, index) => (
                <img
                  onClick={() => setMainImg(image)}
                  src={image}
                  key={index}
                  alt="car-image"
                  className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${
                    mainImg === image && "outline-3 outline-orange-500"
                  }`}
                />
              ))}
          </div>
        </div>

        {/* Car Highlights */}
        <div className="flex flex-col md:flex-row md:justify-between mt-10">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-playfair">
              Experience Luxury Like NEVER Before
            </h1>
            <div className="flex flex-wrap items-center mb-6 mt-3 gap-4">
              {car.amenities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100"
                >
                  <img
                    src={facilityIcons[item]}
                    alt="item"
                    className="w-5 h-5"
                  />
                  <p className="text-xs">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Car Price */}
          <p className="text-2xl font-medium">${car.pricePerNight} /Day</p>
        </div>

        {/* Booking Form */}
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white border border-gray-200 shadow-lg p-6 rounded-xl mx-auto mt-16 max-w-6xl"
        >
          <div className="flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500">
            <div className="flex flex-col">
              <label htmlFor="checkInDate" className="font-medium">
                Check-In
              </label>
              <input
                type="date"
                onChange={(e) => setCheckInDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                id="checkInDate"
                placeholder="Check-In"
                className="w-full rounded border border-gray-300 px-20 py-2 mt-1.5 outline-none"
                required
              />
            </div>
            <div className="w-px h-15 bg-gray-300/70 max-md:hidden"></div>
            <div className="flex flex-col">
              <label htmlFor="checkOutDate" className="font-medium">
                Check-Out
              </label>
              <input
                onChange={(e) => setCheckOutDate(e.target.value)}
                min={checkInDate}
                disabled={!checkInDate}
                type="date"
                id="checkOutDate"
                placeholder="Check-Out"
                className="w-full rounded border border-gray-300 px-20 py-2 mt-1.5 outline-none"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer md:mt-6"
          >
            {isAvailable ? "Book Now" : "Check Availability"}
          </button>
        </form>

        {/* Common Specifications */}
        <div className="mt-25 space-y-4">
          {carCommonData.map((spec, index) => (
            <div key={index} className="flex items-start gap-2">
              <img
                src={spec.icon}
                alt={`${spec.title}-icon`}
                className="w-6.5"
              />
              <div>
                <p className="text-base">{spec.title}</p>
                <p className="text-gray-500">{spec.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500">
          <p>
            Drivers will be assigned vehicles based on availability at the time
            of pickup. You’ll enjoy a well-maintained, comfortable car ideal for
            city driving. The price listed covers two drivers — during the
            booking process, please indicate the total number of drivers or
            passengers to get the most accurate pricing for your group. Vehicle
            models and features are subject to availability, but we ensure every
            car offers a smooth and reliable driving experience for your urban
            adventures.
          </p>
        </div>

        {/* Hosted By */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex gap-4">
            <img
              src={car.carCompany.image}
              alt="Host"
              className="h-14 w-14 md:h-18 md:w-18 rounded-full"
            />
            <div>
              <p className="text-lg md:text-xl">
                Hosted By {car.carCompany.name}
              </p>
              <div className="flex items-center mt-1">
                <StarRating />
                <p className="ml-2">200+ reviews</p>
              </div>
            </div>
          </div>
          <button className="px-6 py-2.5 mt-4 rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer">
            Contact Now
          </button>
        </div>
      </div>
    )
  );
};

export default CarDetails;
