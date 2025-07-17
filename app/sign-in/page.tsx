"use client";

import React, { useState } from "react";
import GoogleSignInButton from "../../components/Buttons/GoogleSignInButton";
import LoginForm from "../../components/LoginForm/LoginForm";

const tabs = ["Sign In", "Google"];

const SignIn = () => {
  const [activeTab, setActiveTab] = useState("Sign In");

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-10 bg-white">
      {/* Tab Navigation */}
      <div className="flex space-x-6 border-b border-gray-200 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 px-2 text-lg font-medium relative transition-all ${
              activeTab === tab ? "text-blue-600" : "text-gray-700"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute left-0 right-0 -bottom-[1px] h-[3px] bg-blue-600 rounded-t-full" />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="w-full max-w-md flex flex-col items-center">
        {activeTab === "Sign In" && (
          <>
            <LoginForm />
          </>
        )}
        {activeTab === "Google" && (
          <>
            <GoogleSignInButton />
          </>
        )}
      </div>
    </div>
  );
};

export default SignIn;
