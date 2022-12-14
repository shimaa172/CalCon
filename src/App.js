import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Breakfast from "./Pages/Breakfast/Breakfast";
import Lunch from "./Pages/Lunch/Lunch";
import Dinner from "./Pages/Dinner/Dinner";
import Snacks from "./Pages/Snacks/Snacks";
import AboutUs from "./Pages/AboutUs/AboutUs";
import WorkOut from "./Pages/WorkOut/WorkOut";
import Goal from "./Pages/SignupSteps/Goal/Goal";
import Calories from "./Pages/SignupSteps/Calories/Calories";
import Activity from "./Pages/SignupSteps/Activity/Activity";
import Foods from "./Pages/SignupSteps/Foods/Foods";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Details from "./Pages/Details/Details";
import Profile from "./Pages/Profile/Profile";
import ShoppingCard from "./Pages/ShoppingCard/ShoppingCard";
import Payment from "./Pages/Payment/Payment";

function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/dinner" element={<Dinner />} />
        <Route path="/snacks" element={<Snacks />} />
        <Route path="/workout" element={<WorkOut />} />
        <Route path="/goal" element={<Goal />} />
        <Route path="/calories" element={<Calories />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/details" element={<Details />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/shoppingcart" element={<ShoppingCard />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </>
  );
}

export default App;
