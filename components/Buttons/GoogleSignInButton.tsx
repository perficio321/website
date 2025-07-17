"use client";
import { login } from "@/actions/auth";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleSignInButton = () => {
  return (
    <div onClick={() => login("google")}>
      <div className="flex items-center justify-center gap-2 bg-black hover:bg-black text-white text-sm px-4 py-2 rounded-sm">
        <FcGoogle className="text-white text-2xl" />
        SignIn With Google
      </div>
    </div>
  );
};

export default GoogleSignInButton;
