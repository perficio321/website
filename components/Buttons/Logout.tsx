"use client";

import { logout } from "@/actions/auth";
import React from "react";

const Logout = () => {
  return (
    <button
      onClick={() => logout()} // redirects to home after logout
      className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-md transition duration-200"
    >
      Logout
    </button>
  );
};

export default Logout;
