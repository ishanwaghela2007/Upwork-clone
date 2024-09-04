// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import UserLayout from './UserLayout';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <Router>
      
        <Routes>
          <Route path='/' element={<UserLayout/>} />
         <Route index element={<Home/>} />
         {/* <Route path="*" element={<Error />} />
         <Route path="login" element={<Auth />} />
         <Route path="community" element={<CommunityPage />} />
         <Route path="profile" element={<Profile />} />
         <Route path="help" element={<FAQ/>} />
         <Route path="tutor" element={<Tutorial/>} />
         <Route path="chatbot" element={<Chatbot />} /> */}
         <Route/>
     

         {/* <Route path='/' element={<UserLayout/>} />
        
        
          <Route/>
          */}
         </Routes>
      
    
    </Router>
  );
};

export default App;
