import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const authStatus = useSelector((state) => state.auth.status); // Assuming 'status' holds the auth status (true/false)

  useEffect(() => {
    if (authentication && !authStatus) {
      // Redirect to login if authentication is required and user is not authenticated
      navigate("/login");
    } else if (!authentication && authStatus) {
      // If the user is already authenticated and the route doesn't require authentication, navigate to home page
      navigate("/");
    } else {
      // If authentication status matches, proceed to show children
      setLoading(false);
    }
  }, [authStatus, authentication, navigate]);

  // Display a loading spinner while checking authentication status
  if (loading) {
    return <Loader />;
  }

  // If authentication status matches, render children
  return <>{children}</>;
}
