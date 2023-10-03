"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmitRegister = async () => {
    setLoading(true);
    toast.loading("Registering...");
    const res = await fetch("/api/v1/auth/register", {
      method: "POST",
      body: JSON.stringify(registerData),
    });
    const { data, message, error } = await res.json();

    if (error) {
      toast.remove();
      toast.error(error);
      setLoading(false);
      return;
    }

    setLoading(false);
    toast.remove();
    toast.success(message);
  };
  return { loading, registerData, handleChange, handleSubmitRegister };
};
