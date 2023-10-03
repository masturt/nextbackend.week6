"use client";

import { Input, Button } from "@nextui-org/react";
import { useRegister } from "../hooks/useRegister";

export const Authregister = () => {
  const { loading, handleChange, handleSubmitRegister } = useRegister();

  return (
    <main className="h-screen w-full flex justify-center items-center">
      <div className="w-[320px] flex justify-center items-center">
        <div className="w-full flex flex-col space-y-2">
          <Input name="name" placeholder="name" onChange={handleChange} />
          <Input name="email" placeholder="email" onChange={handleChange} />
          <Input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
          <Button isLoading={loading} onClick={handleSubmitRegister}>
            Register
          </Button>
        </div>
      </div>
    </main>
  );
};
