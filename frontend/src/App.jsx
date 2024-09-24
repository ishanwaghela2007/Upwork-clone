// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLayout from './User/Userlayout';
import Landing from './User/Landingpage/Landing';
import Home from './User/Pages/Home/Home';
import Auth from './User/Pages/Auth/Auth';

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<UserLayout />}>
          <Route index element={<Landing />} />
          <Route path='Auth' element={<Auth />} />
          <Route path='home' element={<Home />} />
        </Route>
        <Route path='/admin' element={<Landing/>} >
        
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
