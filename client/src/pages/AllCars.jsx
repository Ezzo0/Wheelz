import React, { useMemo, useState } from "react";
import { assets, facilityIcons } from "../assets/assets";
import { useSearchParams } from "react-router-dom";
import StarRating from "../components/StarRating";
import { useAppContext } from "../context/AppContext";

const CheckBox = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input
        type="checkbox"
        checked={selected}
        onChange={(e) => onChange(e.target.checked, label)}
      />
      <span className="font-light select-none">{label}</span>
    </label>
  );
};

const RadioButton = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input
        type="radio"
        name="sortOptions"
        checked={selected}
        onChange={(e) => onChange(label)}
      />
      <span className="font-light select-none">{label}</span>
    </label>
  );
};

const AllCars = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { cars, navigate, currency } = useAppContext();
  const [openFilters, setOpenFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    carType: [],
    priceRange: [],
  });
  const [selectedSort, setSelectedSort] = useState("");

  const carTypes = [
    "Sedans",
    "SUVs",
    "Sports Cars",
    "Hatchbacks",
    "Vans",
    "Electric",
  ];

  const priceRanges = [
    "0 to 100",
    "100 to 200",
    "200 to 300",
    "300 to 400",
    "400 to 500",
  ];

  const sortOptions = [
    "Price: Low to High",
    "Price: High to Low",
    "Newest First",
  ];

  // Handle changes for filters and sorting
  const handleFilterChange = (checked, value, type) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (checked) {
        updatedFilters[type].push(value);
      } else {
        updatedFilters[type] = updatedFilters[type].filter(
          (item) => item !== value
        );
      }
      return updatedFilters;
    });
  };

  const handleSortChange = (sortOption) => {
    setSelectedSort(sortOption);
  };

  // Function to check if a car matches the selected car types
  const matchesCarType = (car) => {
    return (
      selectedFilters.carType.length === 0 ||
      selectedFilters.carType.includes(car.carType)
    );
  };

  // Function to check if a car matches the selected price range
  const matchesPriceRange = (car) => {
    return (
      selectedFilters.priceRange.length === 0 ||
      selectedFilters.priceRange.some((range) => {
        const [min, max] = range.split(" to ").map(Number);
        return car.pricePerNight >= min && car.pricePerNight <= max;
      })
    );
  };

  // Function to sort cars based on the selected sort option
  const sortCars = (a, b) => {
    if (selectedSort === "Price: Low to High") {
      return a.pricePerNight - b.pricePerNight;
    } else if (selectedSort === "Price: High to Low") {
      return b.pricePerNight - a.pricePerNight;
    }
    if (selectedSort === "Newest First") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
    return 0;
  };

  // Filter City
  const filterCity = (car) => {
    const city = searchParams.get("city");
    if (!city) return true;
    return car.carAddress.toLowerCase().includes(city.toLowerCase());
  };

  // Filter and sort rooms based on the selected filters and sort options
  const filteredCars = useMemo(() => {
    return cars
      .filter(
        (car) =>
          matchesCarType(car) && matchesPriceRange(car) && filterCity(car)
      )
      .sort(sortCars);
  }, [cars, selectedFilters, selectedSort, searchParams]);

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedFilters({
      carType: [],
      priceRange: [],
    });
    setSelectedSort("");
    setSearchParams({});
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24">
      <div>
        <div className="flex flex-col items-start text-left">
          <h1 className="font-playfair text-4xl md:text-[40px]">All Cars</h1>
          <p className="text-sm md:text-base text-gray-500/90 mt-2">
            Take advantage of our wide range of cars and find the perfect one
            for your next adventure.
          </p>
        </div>

        {filteredCars.map((car) => (
          <div
            key={car._id}
            className="flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0"
          >
            <img
              src={car.images[0]}
              alt="car-img"
              title="View Car Details"
              className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"
              onClick={() => {
                {
                  navigate(`/cars/${car._id}`);
                  scrollTo(0, 0);
                }
              }}
            />
            <div className="md:w-1/2 flex flex-col gap-2">
              <p className="text-gray-500">{car.city}</p>
              <p
                onClick={() => {
                  {
                    navigate(`/cars/${car._id}`);
                    scrollTo(0, 0);
                  }
                }}
                className="text-gray-800 text-3xl font-playfair cursor-pointer"
              >
                {car.carModel}
              </p>
              <div className="flex items-center">
                <StarRating />
                <p className="ml-2">200+ reviews</p>
              </div>
              <div className="flex items-center gap-1 text-gray-500 mt-2 text-sm">
                <img src={assets.locationIcon} alt="location-icon" />
                <span>{car.carAddress}</span>
              </div>
              {/* car Amenities */}
              <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
                {car.amenities.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70"
                  >
                    <img
                      src={facilityIcons[item]}
                      alt={item}
                      className="w-5 h-5"
                    />
                    <p className="text-xs">{item}</p>
                  </div>
                ))}
              </div>

              {/* Car Price per day */}
              <p className="text-xl font-medium text-gray-700">
                ${car.pricePerNight} /Day
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Filters */}
      <div className="bg-white w-80 border border-grey-300 text-gray-600 max-lg:mb-8 min-lg:mt-16">
        <div
          className={`flex items-center justify-between px-5 py-2.5 min-lg:border-b border-gray-300 ${
            openFilters && "border-b"
          }`}
        >
          <p className="text-base font-medium text-gray-800">FILTERS</p>
          <div className="text-xs cursor-pointer">
            <span
              onClick={() => setOpenFilters(!openFilters)}
              className="lg:hidden"
            >
              {openFilters ? "HIDE" : "SHOW"}
            </span>
            <button
              onClick={clearAllFilters}
              className="hidden lg:block text-xs cursor-pointer hover:text-gray-800"
            >
              CLEAR
            </button>
          </div>
        </div>

        <div
          className={`${
            openFilters ? "h-auto" : "h-0 lg:h-auto"
          } overflow-hidden transition-all duration-700`}
        >
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Popular filters</p>
            {carTypes.map((car, index) => (
              <CheckBox
                key={index}
                label={car}
                selected={selectedFilters.carType.includes(car)}
                onChange={(checked) =>
                  handleFilterChange(checked, car, "carType")
                }
              />
            ))}
          </div>
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Price Range</p>
            {priceRanges.map((range, index) => (
              <CheckBox
                key={index}
                label={`${currency} ${range}`}
                selected={selectedFilters.priceRange.includes(range)}
                onChange={(checked) =>
                  handleFilterChange(checked, range, "priceRange")
                }
              />
            ))}
          </div>
          <div className="px-5 pt-5 pb-7">
            <p className="font-medium text-gray-800 pb-2">Sort By</p>
            {sortOptions.map((option, index) => (
              <RadioButton
                key={index}
                label={option}
                selected={selectedSort === option}
                onChange={() => handleSortChange(option)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCars;
