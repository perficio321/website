"use client";

import React, { useState } from "react";
import { loginWithCreds } from "@/actions/auth";
import { useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";
import { HiEye, HiEyeOff, HiMail, HiLockClosed } from "react-icons/hi";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      id="signin-submit-btn"
      style={{
        width: "100%",
        padding: "13px",
        borderRadius: "12px",
        border: "none",
        cursor: pending ? "not-allowed" : "pointer",
        fontSize: "0.95rem",
        fontWeight: 700,
        letterSpacing: "0.04em",
        color: "#fff",
        background: pending
          ? "linear-gradient(135deg, #94a3b8, #cbd5e1)"
          : "linear-gradient(135deg, #1e40af 0%, #2563eb 100%)",
        boxShadow: pending ? "none" : "0 6px 20px rgba(37,99,235,0.45)",
        transition: "all 0.3s ease",
        marginTop: "8px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {pending ? (
        <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
          <span style={{
            display: "inline-block", width: "16px", height: "16px",
            border: "2px solid rgba(255,255,255,0.4)",
            borderTopColor: "#fff",
            borderRadius: "50%",
            animation: "spin 0.8s linear infinite",
          }} />
          Signing in...
        </span>
      ) : (
        "Sign In →"
      )}
    </button>
  );
};

const LoginForm = () => {
  const searchParams = useSearchParams();
  const error = searchParams?.get("error");
  const [showPassword, setShowPassword] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passFocused, setPassFocused] = useState(false);

  const inputStyle = (focused: boolean): React.CSSProperties => ({
    width: "100%",
    padding: "12px 14px 12px 42px",
    borderRadius: "10px",
    border: focused ? "2px solid #2563eb" : "2px solid #e2e8f0",
    outline: "none",
    fontSize: "0.9rem",
    background: focused ? "#f0f7ff" : "#f8fafc",
    color: "#1e293b",
    transition: "all 0.25s ease",
    boxSizing: "border-box",
    boxShadow: focused ? "0 0 0 4px rgba(37,99,235,0.1)" : "none",
  });

  return (
    <form action={loginWithCreds} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
      {/* Error */}
      {error && (
        <div style={{
          background: "linear-gradient(135deg, #fef2f2, #fee2e2)",
          border: "1px solid #fca5a5",
          borderRadius: "10px",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}>
          <span style={{ fontSize: "1.1rem" }}>⚠️</span>
          <p style={{ color: "#dc2626", fontSize: "0.85rem", fontWeight: 500, margin: 0 }}>
            {error}
          </p>
        </div>
      )}

      {/* Email */}
      <div>
        <label htmlFor="email" style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "#475569", marginBottom: "6px", letterSpacing: "0.04em" }}>
          EMAIL ADDRESS
        </label>
        <div style={{ position: "relative" }}>
          <HiMail style={{
            position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)",
            color: emailFocused ? "#2563eb" : "#94a3b8", fontSize: "1.15rem", transition: "color 0.25s",
          }} />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            required
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
            style={inputStyle(emailFocused)}
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
          <label htmlFor="password" style={{ fontSize: "0.82rem", fontWeight: 600, color: "#475569", letterSpacing: "0.04em" }}>
            PASSWORD
          </label>
          <a href="#" style={{ fontSize: "0.78rem", color: "#2563eb", textDecoration: "none", fontWeight: 500 }}>
            Forgot password?
          </a>
        </div>
        <div style={{ position: "relative" }}>
          <HiLockClosed style={{
            position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)",
            color: passFocused ? "#2563eb" : "#94a3b8", fontSize: "1.15rem", transition: "color 0.25s",
          }} />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            name="password"
            id="password"
            required
            onFocus={() => setPassFocused(true)}
            onBlur={() => setPassFocused(false)}
            style={{ ...inputStyle(passFocused), paddingRight: "44px" }}
          />
          <button
            type="button"
            id="toggle-password-btn"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)",
              background: "none", border: "none", cursor: "pointer",
              color: "#94a3b8", display: "flex", alignItems: "center", padding: 0,
              transition: "color 0.2s",
            }}
          >
            {showPassword ? <HiEyeOff size={19} /> : <HiEye size={19} />}
          </button>
        </div>
      </div>

      {/* Submit */}
      <SubmitButton />

      {/* Divider */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{ flex: 1, height: "1px", background: "#e2e8f0" }} />
        <span style={{ color: "#94a3b8", fontSize: "0.78rem", fontWeight: 500 }}>OR SIGN IN WITH</span>
        <div style={{ flex: 1, height: "1px", background: "#e2e8f0" }} />
      </div>

      {/* Security Note */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
        background: "#f0fdf4", borderRadius: "8px", padding: "10px",
        border: "1px solid #bbf7d0",
      }}>
        <span style={{ fontSize: "0.9rem" }}>🔒</span>
        <span style={{ color: "#16a34a", fontSize: "0.78rem", fontWeight: 500 }}>
          256-bit SSL secured connection
        </span>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </form>
  );
};

export default LoginForm;