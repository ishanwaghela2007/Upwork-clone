import React, { createContext, useContext, useState, useEffect } from "react";
import authServices from "../../appwrite/auth/auth";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Get current user on app load
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await authServices.getCurrentUser();
        setUser(currentUser);
        setIsAuthenticated(true);
      } catch {
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  // Signup
  const signup = async (signupData) => {
    try {
      const userAccount = await authServices.signup(signupData);
      setUser(userAccount);
      setIsAuthenticated(true);
      return true;
    } catch (error) {
      console.error(error.message);
      return false;
    }
  };

  // Login
  const login = async (loginData) => {
    try {
      const session = await authServices.login(loginData);
      const currentUser = await authServices.getCurrentUser();
      setUser(currentUser);
      setIsAuthenticated(true);
      return true;
    } catch (error) {
      console.error(error.message);
      return false;
    }
  };

  // Logout
  const logout = async () => {
    try {
      await authServices.logout();
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  // Send email verification
  const sendVerification = async () => {
    try {
      await authServices.verification();
      alert("Verification email sent! Check your inbox.");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        signup,
        login,
        logout,
        sendVerification,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
