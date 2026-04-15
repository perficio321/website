"use client";
import { login } from "@/actions/auth";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleSignInButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={() => login("google")}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      id="google-signin-btn"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        width: "100%",
        padding: "13px 24px",
        borderRadius: "12px",
        border: hovered ? "2px solid #2563eb" : "2px solid #e2e8f0",
        background: hovered ? "#f0f7ff" : "#fff",
        cursor: "pointer",
        fontSize: "0.95rem",
        fontWeight: 600,
        color: "#1e293b",
        boxShadow: hovered
          ? "0 8px 24px rgba(37,99,235,0.2)"
          : "0 4px 12px rgba(0,0,0,0.08)",
        transition: "all 0.25s ease",
        letterSpacing: "0.02em",
      }}
    >
      <FcGoogle style={{ fontSize: "1.4rem", flexShrink: 0 }} />
      <span style={{ transition: "color 0.2s" }}>Continue with Google</span>
    </button>
  );
};

export default GoogleSignInButton;
