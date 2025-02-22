import React from "react";
// import { Profile } from "./profile/Profile";
import { Route, Routes } from "react-router-dom";
import Login from "./login/Login";
import Signup from "./signup/signup";
import Navbar from "../components/navbar/Navbar";
import AllNotes from "./allNotes/AllNotes";
import EditNote from "./allNotes/EditNotes/EditNote";
import AddNotes from "./addNotes/AddNotes";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/addNotes" element={<AddNotes />}></Route>
        {/* <Route path="/profile" element={}></Route> */}
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/allnotes" element={<AllNotes />}></Route>
        <Route path="/edit/:id" element={<EditNote />} />
      </Routes>
    </>
  );
};
