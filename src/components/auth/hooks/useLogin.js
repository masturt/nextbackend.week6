"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmitLogin = async () => {
    setLoading(true);
    toast.loading("Logging in...");
    const res = await fetch("/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify(loginData),
    });
    const { data, error } = await res.json();

    if (error) {
      toast.remove();
      toast.error(error);
      setLoading(false);
      return;
    }

    setLoading(false);
    toast.remove();
    toast.success("Login succes");
    console.log(data);
  };
  return { loading, loginData, handleChange, handleSubmitLogin };
};
