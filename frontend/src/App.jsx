// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLayout from './User/Userlayout';
import Landing from './User/Pages/Landingpage/Landing';
import Home from './User/Pages/Home/Home';
import SignUp from './User/Pages/SignUp/SignUp';
import Login from './User/Pages/Login/Login';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<UserLayout />}>
          <Route index element={<Landing />} />
          <Route path='home' element={<Home />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='login' element={<Login />} />
        </Route>
        <Route path='/admin' element={<Landing/>} >
        
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
