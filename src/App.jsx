import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header, Loader } from "./components"; // Assuming Loader component is available
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch current user data
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.error("Error fetching current user: ", error);
        dispatch(logout()); // Optional: log out on error, or handle accordingly
      })
      .finally(() => setLoading(false)); // Stop loading once the request is complete
  }, [dispatch]);

  // If loading, show a spinner or loading message
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loader /> {/* Replace with your actual Loader component */}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-wrap content-between">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
