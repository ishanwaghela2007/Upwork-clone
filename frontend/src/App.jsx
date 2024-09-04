// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLayout from './User/Userlayout';
import Home from './User/Pages/Home/Home';
import Auth from './User/Pages/Auth';


const App = () => {
  return (
    <Router>

      <Routes>
        <Route path='/' element={<UserLayout />} >
        <Route index element={<Home />} />
        <Route path='Auth' element={<Auth/>} />
        </Route>
      </Routes>


    </Router>
  );
};

export default App;
