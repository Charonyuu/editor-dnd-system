"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import useSignUp from "./useSignUp";
import { AiOutlineGoogle, AiOutlineUser } from "react-icons/ai";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [name, setName] = useState("");
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { login, loading, error } = useSignUp();

  if (loading) return <div>loading...</div>;
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="bg-black text-white border-white border border-solid rounded-xl p-10 flex flex-col items-center">
        <h1 className="text-2xl">Draggie SignUp</h1>
        <p>Get started by registering an account</p>
        <Input
          className="w-full my-2 text-black"
          type="text"
          placeholder="輸入網站名稱或公司名稱"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          className="w-full my-2 text-black"
          type="text"
          placeholder="Account or ProjectId"
          value={account}
          onChange={(e) => setAccount(e.target.value)}
        />
        <Input
          className="w-full my-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="text-red-500">{error}</p>
        <Button
          size="sm"
          className="my-4 w-full"
          onClick={() => login(name, account, password)}
        >
          Sign Up
        </Button>
        <div className="text-sm">
          已經有帳號了？
          <span
            className="text-red-200 cursor-pointer"
            onClick={() => router.push("/SignIn")}
          >
            SignIn Here
          </span>
        </div>
      </div>
    </div>
  );
}
