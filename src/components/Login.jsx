import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import Logo from "./Logo";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <div className="w-full max-w-md rounded-2xl border p-8 shadow-sm bg-white">
        <div className="mb-6 flex justify-center">
          <Logo width="100px" />
        </div>

        <h2 className="text-center text-2xl font-semibold">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            to="/signup"
            className="font-medium text-primary hover:underline"
          >
            Sign Up
          </Link>
        </p>

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}

        <form onSubmit={handleSubmit(login)} className="mt-6 space-y-4">
          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            {...register("email", {
              required: true,
              validate: {
                matchPatern: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email address must be valid",
              },
            })}
          />

          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
            {...register("password", {
              required: true,
            })}
          />

          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
