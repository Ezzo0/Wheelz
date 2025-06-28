import React, { useState } from "react";
import Title from "../../components/Title";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const AddCar = () => {
  const { axios, getToken } = useAppContext();

  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [inputs, setInputs] = useState({
    carType: "",
    carModel: "",
    pricePerNight: 0,
    amenities: {
      "Air Conditioning": false,
      "Ventilated Seats": false,
      "Rearview Camera": false,
      "Navigation System": false,
      "Blind Spot Monitoring": false,
      "Adaptive Cruise Control": false,
      "USB Charging Ports": false,
      "Mobile Device Holders": false,
      "Emergency Spare Tire & Tools": false,
    },
    carAddress: "",
  });

  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Check if all fields are filled
    if (
      !inputs.carType ||
      !inputs.carModel ||
      !inputs.pricePerNight ||
      !inputs.carAddress ||
      !inputs.amenities ||
      !Object.values(images).some((image) => image)
    ) {
      toast.error("Please fill in all fields");
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("carType", inputs.carType);
      formData.append("carModel", inputs.carModel);
      formData.append("pricePerNight", inputs.pricePerNight);
      formData.append("carAddress", inputs.carAddress);
      // Converting Amenities to Array & keeping only enabled Amenities
      const amenities = Object.keys(inputs.amenities).filter(
        (key) => inputs.amenities[key]
      );
      formData.append("amenities", JSON.stringify(amenities));
      // Adding Images to FormData
      Object.keys(images).forEach((key) => {
        images[key] && formData.append("images", images[key]);
      });

      const { data } = await axios.post("/api/cars/", formData, {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      });

      if (data.success) {
        toast.success(data.message);
        setInputs({
          carType: "",
          carModel: "",
          pricePerNight: 0,
          amenities: {
            "Air Conditioning": false,
            "Ventilated Seats": false,
            "Rearview Camera": false,
            "Navigation System": false,
            "Blind Spot Monitoring": false,
            "Adaptive Cruise Control": false,
            "USB Charging Ports": false,
            "Mobile Device Holders": false,
            "Emergency Spare Tire & Tools": false,
          },
          carAddress: "",
        });
        setImages({
          1: null,
          2: null,
          3: null,
          4: null,
        });
      } else {
        console.log(data);
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <Title
        align="left"
        font="outfit"
        title="Add Car"
        subTitle="Fill in the details carefully and accurate car details, pricing, and amenities, to enhance the user booking experience"
      />
      {/* Upload Area For Images */}
      <p className="text-gray-800 mt-10">Images</p>
      <div className="grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap">
        {Object.keys(images).map((key) => (
          <label htmlFor={`carImage${key}`} key={key}>
            <img
              className="max-h-13 cursor-pointer opacity-80"
              src={
                images[key]
                  ? URL.createObjectURL(images[key])
                  : assets.uploadArea
              }
              alt=""
            />
            <input
              type="file"
              accept="image/*"
              id={`carImage${key}`}
              hidden
              onChange={(e) =>
                setImages({ ...images, [key]: e.target.files[0] })
              }
            />
          </label>
        ))}
      </div>

      <div className="w-full flex max-sm:flex-col sm:gap-4 mt-4">
        <div className="flex-1 max-w-48">
          <p className="text-gray-800 mt-4">Car Type</p>
          <select
            value={inputs.carType}
            onChange={(e) => setInputs({ ...inputs, carType: e.target.value })}
            className="border opacity-70 border-gray-300 mt-1 rounded p-2 w-full"
          >
            <option value="">Select Car Type</option>
            <option value="Sedans">Sedans</option>
            <option value="SUVs">SUVs</option>
            <option value="Sports Cars">Sports Cars</option>
            <option value="Hatchbacks">Hatchbacks</option>
            <option value="Vans">Vans</option>
            <option value="Electric">Electric</option>
          </select>
        </div>
        <div>
          <p className="mt-4 text-gray-800">
            Price <span className="text-xs">/Day</span>
          </p>
          <input
            type="number"
            placeholder="0"
            className="border border-gray-300 mt-1 rounded p-2 w-24"
            value={inputs.pricePerNight}
            onChange={(e) =>
              setInputs({ ...inputs, pricePerNight: e.target.value })
            }
          />
        </div>
        <div className="flex-1 max-w-48">
          <p className="text-gray-800 mt-4">Car Model</p>
          <input
            type="text"
            placeholder="Model"
            className="border border-gray-300 mt-1 rounded p-2 w-full"
            value={inputs.carModel}
            onChange={(e) => setInputs({ ...inputs, carModel: e.target.value })}
          />
        </div>
        <div className="flex-1 max-w-48">
          <p className="text-gray-800 mt-4">Car Address</p>
          <input
            type="text"
            placeholder="Address"
            className="border border-gray-300 mt-1 rounded p-2 w-full"
            value={inputs.carAddress}
            onChange={(e) =>
              setInputs({ ...inputs, carAddress: e.target.value })
            }
          />
        </div>
      </div>
      <p className="text-gray-800 mt-4">Amenities</p>
      <div className="flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm">
        {Object.keys(inputs.amenities).map((amenity, index) => (
          <div key={index}>
            <input
              type="checkbox"
              id={`amenities${index + 1}`}
              checked={inputs.amenities[amenity]}
              onChange={() =>
                setInputs({
                  ...inputs,
                  amenities: {
                    ...inputs.amenities,
                    [amenity]: !inputs.amenities[amenity],
                  },
                })
              }
            />
            <label htmlFor={`amenities${index + 1}`}> {amenity}</label>
          </div>
        ))}
      </div>
      <button
        className="bg-primary text-white px-8 py-2 rounded mt-8 cursor-pointer"
        disabled={loading}
      >
        {loading ? "Adding Car..." : "Add Car"}
      </button>
    </form>
  );
};

export default AddCar;

// user_2yxCDyVQBbt5My4euZAc3gbNlGo
// user_2yxCDyVQBbt5My4euZAc3gbNlGo
