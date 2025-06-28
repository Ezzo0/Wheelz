import React from "react";
import Hero from "../components/Hero";
import FeaturedDestination from "../components/FeaturedDestination";
import ExclusiveOffers from "../components/ExclusiveOffers";
import Testimonial from "../components/Testimonial";
import NewsLetter from "../components/NewsLetter";
import RecommendedCars from "../components/RecommendedCars";
const Home = () => {
  return (
    <>
      <Hero />
      <RecommendedCars />
      <FeaturedDestination />
      <ExclusiveOffers />
      <Testimonial />
      <NewsLetter />
    </>
  );
};

export default Home;
