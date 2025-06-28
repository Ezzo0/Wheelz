import axios from "axios";
import { createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser, useAuth } from "@clerk/clerk-react";
import { useState } from "react";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY || "$";
  const navigate = useNavigate();
  const { user } = useUser();
  const { getToken } = useAuth();

  const [isOwner, setIsOwner] = useState(false);
  const [showCarCompanyReg, setShowCarCompanyReg] = useState(false);
  const [searchCities, setSearchCities] = useState([]);
  const [cars, setCars] = useState([]);
  const [carCompanies, setCarCompanies] = useState([]);

  const fetchCars = async () => {
    try {
      const { data } = await axios.get("/api/cars");
      if (data.success) {
        setCars(data.cars);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const fetchUser = async () => {
    try {
      const { data } = await axios.get("/api/user", {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });
      if (data.success) {
        setIsOwner(data.role === "carCompanyOwner");
        setSearchCities(data.recentSearchCities);
      } else {
        // Retry Fetching User Details after 5 seconds
        setTimeout(() => {
          fetchUser();
        }, 5000);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      fetchUser();
    }
  }, [user]);

  useEffect(() => {
    fetchCars();
  }, []);

  const value = {
    currency,
    navigate,
    user,
    getToken,
    isOwner,
    setIsOwner,
    showCarCompanyReg,
    setShowCarCompanyReg,
    searchCities,
    setSearchCities,
    cars,
    setCars,
    axios,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
