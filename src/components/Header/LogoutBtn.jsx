import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom"; // import navigate

function LogoutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // initialize navigate

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout()); // dispatch logout action to update redux state
      navigate("/login"); // navigate to login page immediately after logout
    });
  };

  return (
    <button
      onClick={logoutHandler}
      className="px-6 py-2 rounded-full border-2 border-blue-500 text-blue-500 font-semibold transition-all duration-300 hover:bg-blue-500 hover:text-white shadow-md hover:shadow-lg"
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
