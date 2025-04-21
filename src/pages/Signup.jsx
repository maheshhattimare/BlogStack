import React, { useState } from "react";
import { Signup as SignupComponent } from "../components";
import { useNavigate } from "react-router-dom"; // For navigation

function Signup() {
  const [loading, setLoading] = useState(false); // Loading state for signup
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate();

  const handleSignup = async (userData) => {
    setLoading(true);
    try {
      // Your signup logic here (e.g., await authService.signup(userData);)
      navigate("/"); // Redirect to home page after successful signup
    } catch (err) {
      setError("Failed to sign up. Please try again."); // Set error message on failed signup
    } finally {
      setLoading(false); // Set loading to false after signup attempt
    }
  };

  return (
    <div className="py-8">
      <SignupComponent onSignup={handleSignup} loading={loading} />
      {error && <p className="text-red-500 mt-4">{error}</p>}{" "}
      {/* Show error message */}
    </div>
  );
}

export default Signup;
