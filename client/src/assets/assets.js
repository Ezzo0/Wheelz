import logo from "./logo.svg";
import hotLogo from "./logo.png";
import searchIcon from "./searchIcon.svg";
import userIcon from "./userIcon.svg";
import calenderIcon from "./calenderIcon.svg";
import locationIcon from "./locationIcon.svg";
import starIconFilled from "./starIconFilled.svg";
import arrowIcon from "./arrowIcon.svg";
import starIconOutlined from "./starIconOutlined.svg";
import instagramIcon from "./instagramIcon.svg";
import facebookIcon from "./facebookIcon.svg";
import twitterIcon from "./twitterIcon.svg";
import linkendinIcon from "./linkendinIcon.svg";
import freeWifiIcon from "./freeWifiIcon.svg";
import airConditioningIcon from "./airconditioning.svg";
import ventilatedSeats from "./carSeat.svg";
import rearviewMirror from "./rearviewMirror.svg";
import navigationSystem from "./navigation.svg";
import blindSpot from "./blindSpot.svg";
import adaptiveCruiseControl from "./speedoMeter.svg";
import usbCharging from "./usbCircle.svg";
import emergencySpareTire from "./tire.svg";
import mobileDeviceHolder from "./mobile.svg";
import carIcon from "./car.svg";
import shieldIcon from "./shield.svg";
import starIcon from "./star.svg";
import freeBreakfastIcon from "./freeBreakfastIcon.svg";
import roomServiceIcon from "./roomServiceIcon.svg";
import mountainIcon from "./mountainIcon.svg";
import poolIcon from "./poolIcon.svg";
import homeIcon from "./homeIcon.svg";
import closeIcon from "./closeIcon.svg";
import locationFilledIcon from "./locationFilledIcon.svg";
import heartIcon from "./heartIcon.svg";
import badgeIcon from "./badgeIcon.svg";
import menuIcon from "./menuIcon.svg";
import closeMenu from "./closeMenu.svg";
import guestsIcon from "./guestsIcon.svg";
import carImg1 from "./car1.jpg";
import carImg2 from "./car2.jpg";
import carImg3 from "./car3.jpg";
import carImg4 from "./car4.jpg";
import regImage from "./regImage.png";
import carRegImage from "./carRegImage.jpeg";
import exclusiveOfferCarImg1 from "./exclusiveOfferCarImg1.jpg";
import exclusiveOfferCarImg2 from "./exclusiveOfferCarImg2.jpg";
import exclusiveOfferCarImg3 from "./exclusiveOfferCarImg3.jpg";
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";

export const assets = {
  hotLogo,
  logo,
  carRegImage,
  searchIcon,
  userIcon,
  calenderIcon,
  locationIcon,
  starIconFilled,
  arrowIcon,
  airConditioningIcon,
  ventilatedSeats,
  rearviewMirror,
  navigationSystem,
  blindSpot,
  adaptiveCruiseControl,
  usbCharging,
  mobileDeviceHolder,
  emergencySpareTire,
  carIcon,
  shieldIcon,
  starIcon,
  starIconOutlined,
  instagramIcon,
  facebookIcon,
  twitterIcon,
  linkendinIcon,
  freeWifiIcon,
  freeBreakfastIcon,
  roomServiceIcon,
  mountainIcon,
  poolIcon,
  closeIcon,
  homeIcon,
  locationFilledIcon,
  heartIcon,
  badgeIcon,
  menuIcon,
  closeMenu,
  guestsIcon,
  regImage,
  addIcon,
  dashboardIcon,
  listIcon,
  uploadArea,
  totalBookingIcon,
  totalRevenueIcon,
};

export const cities = ["Dubai", "Singapore", "New York", "London"];

// Exclusive Offers Dummy Data
export const exclusiveOffers = [
  {
    _id: 1,
    title: "Summer Escape Package",
    description:
      "Enjoy a free rental day and complimentary daily insurance coverage",
    priceOff: 25,
    expiryDate: "Aug 31",
    image: exclusiveOfferCarImg1,
  },
  {
    _id: 2,
    title: "Weekend Escape",
    description:
      "Special offer with free GPS, unlimited mileage, and a fuel discount",
    priceOff: 20,
    expiryDate: "Sep 20",
    image: exclusiveOfferCarImg2,
  },
  {
    _id: 3,
    title: "Luxury Retreat",
    description:
      "Book 60 days in advance and save on your stay at any of our luxury properties worldwide.",
    priceOff: 30,
    expiryDate: "Sep 25",
    image: exclusiveOfferCarImg3,
  },
];

// Testimonials Dummy Data
export const testimonials = [
  {
    id: 1,
    name: "Emma Rodriguez",
    address: "Barcelona, Spain",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    rating: 5,
    review:
      "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that HotWheelz provides.",
  },
  {
    id: 2,
    name: "Liam Johnson",
    address: "New York, USA",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    rating: 4,
    review:
      "HotWheelz exceeded my expectations. The booking process was seamless, and the Cars were absolutely top-notch. Highly recommended!",
  },
  {
    id: 3,
    name: "Sophia Lee",
    address: "Seoul, South Korea",
    image:
      "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200",
    rating: 5,
    review:
      "Amazing service! I always find the best luxury accommodations through HotWheelz. Their recommendations never disappoint!",
  },
];

// Facility Icon
export const facilityIcons = {
  "Air Conditioning": assets.airConditioningIcon,
  "Ventilated Seats": assets.ventilatedSeats,
  "Rearview Camera": assets.rearviewMirror,
  "Navigation System": assets.navigationSystem,
  "Blind Spot Monitoring": assets.blindSpot,
  "Adaptive Cruise Control": assets.adaptiveCruiseControl,
  "USB Charging Ports": assets.usbCharging,
  "Mobile Device Holders": assets.mobileDeviceHolder,
  "Emergency Spare Tire & Tools": assets.emergencySpareTire,
};

// For Car Details Page
export const carCommonData = [
  {
    icon: assets.carIcon,
    title: "Clean & Well-Maintained",
    description: "Thoroughly inspected and sanitized before every rental.",
  },
  {
    icon: assets.shieldIcon,
    title: "Safety First",
    description:
      "Regular maintenance and safety checks for a worry-free drive.",
  },
  {
    icon: assets.locationFilledIcon,
    title: "Convenient Pickup",
    description: "Easily accessible pickup locations across the city.",
  },
  {
    icon: assets.starIcon,
    title: "Top-Rated Experience",
    description:
      "Over 95% of customers gave 5-star ratings for comfort and reliability.",
  },
];

// User Dummy Data
export const userDummyData = {
  _id: "user_2unqyL4diJFP1E3pIBnasc7w8hP",
  username: "Great Car",
  email: "user.greatcar@gmail.com",
  image:
    "https://yt3.googleusercontent.com/SxtxAT2eoNsERZyC-2Q9t3YhFC0IPhlaYOFA8rciY3BkhfoR9VPAx5n8A8L6QNG3vjFXSsB7rQ=s160-c-k-c0x00ffffff-no-rj",
  role: "hotelOwner",
  createdAt: "2025-03-25T09:29:16.367Z",
  updatedAt: "2025-04-10T06:34:48.719Z",
  __v: 1,
  recentSearchedCities: ["New York"],
};

// Hotel Dummy Data
export const ownerDummyData = {
  _id: "67f76393197ac559e4089b72",
  name: "Urbanza Suites",
  address: "Main Road  123 Street , 23 Colony",
  contact: "+0123456789",
  owner: userDummyData,
  city: "New York",
  createdAt: "2025-04-10T06:22:11.663Z",
  updatedAt: "2025-04-10T06:22:11.663Z",
  __v: 0,
};

// Cars Dummy Data
export const carsDummyData = [
  {
    _id: "67f7647c197ac559e4089b96",
    name: "Toyota Corolla",
    host: userDummyData,
    address: "Main Road  123 Street , 23 Colony",
    city: "New York",
    carType: "Sedans",
    pricePerNight: 399,
    amenities: ["Air Conditioning", "Rearview Camera", "Ventilated Seats"],
    images: [carImg1, carImg2, carImg3, carImg4],
    isAvailable: true,
    createdAt: "2025-04-10T06:26:04.013Z",
    updatedAt: "2025-04-10T06:26:04.013Z",
    __v: 0,
  },
  {
    _id: "67f76452197ac559e4089b8e",
    name: "Toyota Corolla",
    host: userDummyData,
    address: "Main Road  123 Street , 23 Colony",
    city: "New York",
    carType: "SUVs",
    pricePerNight: 299,
    amenities: [
      "Rearview Camera",
      "Blind Spot Monitoring",
      "Adaptive Cruise Control",
    ],
    images: [carImg2, carImg3, carImg4, carImg1],
    isAvailable: true,
    createdAt: "2025-04-10T06:25:22.593Z",
    updatedAt: "2025-04-10T06:25:22.593Z",
    __v: 0,
  },
  {
    _id: "67f76406197ac559e4089b82",
    name: "Toyota Corolla",
    host: userDummyData,
    address: "Main Road  123 Street , 23 Colony",
    city: "New York",
    carType: "Hatchbacks",
    pricePerNight: 249,
    amenities: ["USB Charging Ports", "Navigation System", "Ventilated Seats"],
    images: [carImg3, carImg4, carImg1, carImg2],
    isAvailable: true,
    createdAt: "2025-04-10T06:24:06.285Z",
    updatedAt: "2025-04-10T06:24:06.285Z",
    __v: 0,
  },
  {
    _id: "67f763d8197ac559e4089b7a",
    name: "Toyota Corolla",
    host: userDummyData,
    address: "Main Road  123 Street , 23 Colony",
    city: "New York",
    carType: "Electric",
    pricePerNight: 199,
    amenities: [
      "Mobile Device Holders",
      "Ventilated Seats",
      "Emergency Spare Tire & Tools",
    ],
    images: [carImg4, carImg1, carImg2, carImg3],
    isAvailable: true,
    createdAt: "2025-04-10T06:23:20.252Z",
    updatedAt: "2025-04-10T06:23:20.252Z",
    __v: 0,
  },
];

// User Bookings Dummy Data
export const userBookingsDummyData = [
  {
    _id: "67f76839994a731e97d3b8ce",
    user: userDummyData,
    car: carsDummyData[1],
    checkInDate: "2025-04-30T00:00:00.000Z",
    checkOutDate: "2025-05-01T00:00:00.000Z",
    totalPrice: 299,
    guests: 1,
    status: "pending",
    paymentMethod: "Stripe",
    isPaid: true,
    createdAt: "2025-04-10T06:42:01.529Z",
    updatedAt: "2025-04-10T06:43:54.520Z",
    __v: 0,
  },
  {
    _id: "67f76829994a731e97d3b8c3",
    user: userDummyData,
    car: carsDummyData[0],
    checkInDate: "2025-04-27T00:00:00.000Z",
    checkOutDate: "2025-04-28T00:00:00.000Z",
    totalPrice: 399,
    guests: 1,
    status: "pending",
    paymentMethod: "Pay Cash",
    isPaid: false,
    createdAt: "2025-04-10T06:41:45.873Z",
    updatedAt: "2025-04-10T06:41:45.873Z",
    __v: 0,
  },
  {
    _id: "67f76810994a731e97d3b8b4",
    user: userDummyData,
    car: carsDummyData[3],
    checkInDate: "2025-04-11T00:00:00.000Z",
    checkOutDate: "2025-04-12T00:00:00.000Z",
    totalPrice: 199,
    guests: 1,
    status: "pending",
    paymentMethod: "Pay Cash",
    isPaid: false,
    createdAt: "2025-04-10T06:41:20.501Z",
    updatedAt: "2025-04-10T06:41:20.501Z",
    __v: 0,
  },
];

// Dashboard Dummy Data
export const dashboardDummyData = {
  totalBookings: 3,
  totalRevenue: 897,
  bookings: userBookingsDummyData,
};

// --------- SVG code for Book Icon------
/* 
const BookIcon = ()=>(
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
)

*/
