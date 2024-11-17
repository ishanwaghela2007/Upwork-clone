import React from "react";
import { Outlet } from "react-router-dom";



const UserLayout = () => {
 
  return (
    <>
      <Outlet />
      <Footer/>
    </>
  );
};

export default UserLayout;