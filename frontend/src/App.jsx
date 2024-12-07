// src/App.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import UserLayout from "./User/Userlayout";
import Landing from "./User/Pages/Landingpage/Landing";
import Home from "./User/Pages/Home/Home";
import Signup from "./User/Pages/SignUp/SignUp";
import Login from "./User/Pages/Login/Login";
import ContactUs from "./User/Pages/Contact/contact";
import Error from "./User/Pages/Error/404";
import Dashboard from "./Admin/Pages/Dashboard/Dashboard";
import Adminlayout from "./Admin/Adminlayout";
import ProtectedRoute from "./User/Components/protectedroute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Landing />} />
        <Route path="home" element={
          <ProtectedRoute>
          <Home />
          </ProtectedRoute>
          } />
        <Route path="login" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Contact" element={<ContactUs />} />
        <Route path="*" element={<Error />} />
      </Route>
      <Route path="/admin" element={<Adminlayout />}>
        <Route index element={<Login />} />
        <Route path="Dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default App;
