# Frontend Documentation

## Overview
This documentation provides a comprehensive overview of the frontend structure, including the main entry point (`main.jsx`), the application routes (`App.jsx`), the user context provider (`UserContext.jsx`), and the various components and pages used throughout the application. It also lists the environment variables required for the application.

## Main Entry Point
The main entry point of the application is `main.jsx`, which sets up the React application, wraps it with the `UserDataProvider` and `BrowserRouter`, and renders it to the DOM.

- **main.jsx**:
  ```jsx
  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import App from './App.jsx'
  import './index.css'
  import { BrowserRouter } from 'react-router-dom'
  import UserDataProvider from './User/context/UserContext.jsx'

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <UserDataProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserDataProvider>
    </StrictMode>,
  )
  ```

## Application Routes
The application routes are defined in `App.jsx`, which uses `react-router-dom` to set up the different pages and layouts for the user and admin sections.

- **App.jsx**:
  ```jsx
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
  ```

## User Context
The `UserContext` provides a way to manage user state across the application. It is used to store and update the current user's information.

- **UserContext.jsx**:
  ```jsx
  import React, { createContext, useState } from 'react';

  export const UserContext = createContext();

  const UserDataProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    );
  };

  export default UserDataProvider;
  ```

## Components and Pages
The application is structured with various components and pages to facilitate user interaction and navigation. Key components include `UserLayout`, `Adminlayout`, and `ProtectedRoute`. Important pages include `Landing`, `Home`, `Signup`, `Login`, `ContactUs`, `Error`, and `Dashboard`.

## Environment Variables
The environment variables required for the application are defined in the `.env.sample` file. These variables include the Appwrite URL, API key, project ID, and database ID.

- **.env.sample**:
  ```
  VITE_APPWRITE_URL=
  VITE_APPWRITE_APIKEY_SECRET=
  VITE_APPWRITE_PROJECT_ID=
  VITE_APPWRITE_DATABASE_ID=
  ```

## Summary
- **Main Entry Point**: `main.jsx`
- **Application Routes**: `App.jsx`
- **User Context**: `UserContext.jsx`
- **Components and Pages**: Various components and pages for user and admin sections
- **Environment Variables**: `.env.sample`

This documentation provides an overview of the frontend structure and the key components required to set up and run the application.
