import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import { useAppContext } from "../../context/AppContext";
import { toast } from "react-hot-toast";

const ListCar = () => {
  const [cars, setCars] = useState([]);
  const { axios, getToken, user, currency } = useAppContext();

  // Fetch car for the car company owner
  const fetchCars = async () => {
    try {
      const { data } = await axios.get("api/cars/owner", {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      });
      console.log(data);
      if (data.success) {
        setCars(data.cars);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  // Toggle Availability of the Car
  const toggleAvailability = async (carId) => {
    try {
      const { data } = await axios.post(
        "/api/cars/toggle-availability",
        { carId },
        {
          headers: {
            Authorization: `Bearer ${await getToken()}`,
          },
        }
      );
      if (data.success) {
        toast.success(data.message);
        fetchCars();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      fetchCars();
    }
  }, [user]);

  return (
    <div>
      <Title
        align="left"
        font="outfit"
        title="Car Listings"
        subTitle="View, edit, or manage all listed cars. Keep the information up-to-date to provide the best experience for users."
      />
      <p className="text-gray-500 mt-8">All Cars</p>

      <div className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll mt-3">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-gray-800 font-medium">Model</th>
              <th className="py-3 px-4 text-gray-800 font-medium max-sm:hidden">
                Facility
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium max-sm:hidden">
                Address
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium text-center">
                Price / Day
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {cars.map((item, index) => (
              <tr key={index}>
                <td className="py-3 px-4 text-gray-700 border-t border-gray-300">
                  {item.carModel}
                </td>
                <td className="py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden">
                  {item.amenities.join(", ")}
                </td>
                <td className="py-3 px-4 text-gray-700 border-t border-gray-300">
                  {item.carAddress}
                </td>
                <td className="py-3 px-4 text-gray-700 border-t border-gray-300">
                  {currency} {item.pricePerNight}
                </td>
                <td className="py-3 px-4 border-t border-gray-300 text-sm text-red-500 text-center">
                  <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
                    <input
                      type="checkbox"
                      onChange={() => toggleAvailability(item._id)}
                      className="sr-only peer"
                      checked={item.isAvailable}
                    />
                    <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200"></div>
                    <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListCar;
