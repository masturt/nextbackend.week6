"use client";

import { Input, Button } from "@nextui-org/react";
import { useLogin } from "../hooks/useLogin";

export const Authlogin = () => {
  const { loading, handleChange, handleSubmitLogin } = useLogin();

  return (
    <main className="h-screen w-full flex justify-center items-center">
      <div className="w-[320px] flex justify-center items-center">
        <div className="w-full flex flex-col space-y-2">
          <Input name="email" placeholder="email" onChange={handleChange} />
          <Input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
          <Button isLoading={loading} onClick={handleSubmitLogin}>
            Login
          </Button>
        </div>
      </div>
    </main>
  );
};
