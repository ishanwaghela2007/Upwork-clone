import React from 'react';
import { Link } from 'react-router-dom';

const CreateAccountButton = () => {
  const handleClick = () => {
    console.log('Create Account button clicked');
    // Add your account creation logic here
  };

  return (
    <Link to='/signup'
      className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded text-base m-1 cursor-pointer transition-colors duration-300"
      onClick={handleClick}
    >
      Create Account
   </Link>
  );
};

export default CreateAccountButton;