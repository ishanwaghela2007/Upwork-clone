import React from "react";
import { Outlet } from "react-router-dom";
import Footer from './Components/footer';


const UserLayout = () => {
 
  return (
    <>
      <Outlet />
      <Footer/>
      
    
    </>
  );
};

export default UserLayout;