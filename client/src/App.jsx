import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AllCars from "./pages/AllCars";
import CarDetails from "./pages/CarDetails";
import MyBookings from "./pages/MyBookings";
import CarReg from "./components/CarReg";
import Layout from "./pages/CarOwner/Layout";
import Dashboard from "./pages/CarOwner/Dashboard";
import AddCar from "./pages/CarOwner/AddCar";
import ListCar from "./pages/CarOwner/ListCar";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar />}
      {false && <CarReg />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<AllCars />} />
          <Route path="/cars/:id" element={<CarDetails />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/owner" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="add-car" element={<AddCar />} />
            <Route path="list-car" element={<ListCar />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
