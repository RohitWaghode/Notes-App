import React from "react";
import { Profile } from "./profile/Profile";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Login from "./login/Login";
import Signup from "./signup/signup";
import Navbar from "../components/navbar/Navbar";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </>
  );
};
