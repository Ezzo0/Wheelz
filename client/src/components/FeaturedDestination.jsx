import React from "react";
import CarCard from "./CarCard";
import Title from "./Title";
import { useAppContext } from "../context/AppContext";

const FeaturedDestination = () => {
  const { cars, navigate } = useAppContext();
  return (
    cars.length > 0 && (
      <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20">
        <Title
          title="Featured Cars"
          subTitle="Find the perfect car for any journey with our top-rated rentals. From sleek sedans to roomy SUVs and luxury models, our most popular cars offer comfort, style, and reliability—ready whenever you are."
        />
        <div className="flex flex-wrap items-center justify-center gap-6 mt-20">
          {cars.slice(0, 4).map((car, index) => (
            <CarCard key={car._id} car={car} index={index} />
          ))}
        </div>

        <button
          onClick={() => {
            navigate("/cars");
            scrollTo(0, 0);
          }}
          className="my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer"
        >
          View All cars
        </button>
      </div>
    )
  );
};

export default FeaturedDestination;
