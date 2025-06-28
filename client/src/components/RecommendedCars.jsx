import React, { useState, useEffect } from "react";
import CarCard from "./CarCard";
import Title from "./Title";
import { useAppContext } from "../context/AppContext";

const RecommendedCars = () => {
  const { cars, searchCities } = useAppContext();
  const [recommendedCars, setRecommendedCars] = useState([]);

  const filterCars = () => {
    const filteredCars = cars
      .slice()
      .filter((car) =>
        searchCities.some((city) =>
          car.carAddress.toLowerCase().includes(city.toLowerCase())
        )
      );
    setRecommendedCars(filteredCars);
  };

  useEffect(() => {
    filterCars();
  }, [cars, searchCities]);

  return (
    recommendedCars.length > 0 && (
      <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20">
        <Title
          title="Recommended Cars"
          subTitle="Discover cars tailored to your recent searches. Based on your preferred destinations, we've curated a selection of vehicles that match your travel style and location preferences."
        />
        <div className="flex flex-wrap items-center justify-center gap-6 mt-20">
          {recommendedCars.slice(0, 4).map((car, index) => (
            <CarCard key={car._id} car={car} index={index} />
          ))}
        </div>
      </div>
    )
  );
};

export default RecommendedCars;
