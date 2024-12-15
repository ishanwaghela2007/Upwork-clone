import React, { createContext, useState } from 'react';

// Create the context
export const UserContext = createContext();

// Create the provider component
const UserDataProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: '',
    email: '',
    name: '',
    password:'',
    role: ''
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserDataProvider;
