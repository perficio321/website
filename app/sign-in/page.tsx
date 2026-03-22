"use client";

import React, { useState } from "react";
import GoogleSignInButton from "../../components/Buttons/GoogleSignInButton";
import LoginForm from "../../components/LoginForm/LoginForm";
import Image from "next/image";

const SignIn = () => {
  const [activeTab, setActiveTab] = useState<"credentials" | "google">("credentials");

  return (
    <div className="min-h-screen flex relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f2d4a 100%)" }}>

      {/* Animated background orbs */}
      <div style={{
        position: "absolute", top: "-10%", left: "-5%",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
        animation: "pulse 6s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", bottom: "-10%", right: "-5%",
        width: "600px", height: "600px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(239,68,68,0.1) 0%, transparent 70%)",
        animation: "pulse 8s ease-in-out infinite 2s",
      }} />
      <div style={{
        position: "absolute", top: "40%", right: "30%",
        width: "300px", height: "300px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
        animation: "pulse 7s ease-in-out infinite 1s",
      }} />

      {/* Left Panel — Branding */}
      <div className="hidden lg:flex flex-col justify-between w-1/2 px-16 py-12 relative z-10">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image src="/perficio-logo.png" alt="Perficio Logo" width={48} height={48} className="rounded-lg" />
          <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#fff", letterSpacing: "0.05em" }}>
            PERFICIO
          </span>
        </div>

        {/* Hero Content */}
        <div>
          <div style={{
            display: "inline-block", background: "rgba(59,130,246,0.2)",
            borderRadius: "999px", padding: "6px 16px", marginBottom: "24px",
            border: "1px solid rgba(59,130,246,0.4)",
          }}>
            <span style={{ color: "#93c5fd", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.1em" }}>
              TRUSTED ADVISORY PARTNER
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Poppins', sans-serif", fontWeight: 800,
            fontSize: "3.2rem", lineHeight: 1.15, color: "#fff", marginBottom: "20px",
          }}>
            Your Financial<br />
            <span style={{ background: "linear-gradient(90deg, #60a5fa, #f87171)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Success Starts Here
            </span>
          </h1>

          <p style={{ color: "#94a3b8", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: "420px", marginBottom: "32px" }}>
            Expert guidance in Tax Planning, Wealth Management, and Compliance Advisory — tailored for individuals and businesses.
          </p>

          {/* Trust Stats Row */}
          <div style={{
            display: "flex", gap: "12px", marginBottom: "36px", flexWrap: "wrap",
          }}>
            {[
              { value: "20+", label: "Years of Experience", icon: "🏆", glow: "rgba(251,191,36,0.25)" },
              { value: "1000+", label: "Happy Clients", icon: "😊", glow: "rgba(52,211,153,0.25)" },
              { value: "100%", label: "Trusted & Secure", icon: "🔒", glow: "rgba(96,165,250,0.25)" },
            ].map((stat) => (
              <div key={stat.label} style={{
                flex: "1 1 100px",
                background: "rgba(255,255,255,0.06)",
                borderRadius: "14px",
                padding: "14px 12px",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(12px)",
                textAlign: "center",
                boxShadow: `0 0 20px ${stat.glow}`,
                transition: "transform 0.3s ease",
              }}>
                <div style={{ fontSize: "1.4rem", marginBottom: "4px" }}>{stat.icon}</div>
                <div style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.55rem",
                  color: "#fff",
                  lineHeight: 1.1,
                  marginBottom: "4px",
                  background: "linear-gradient(135deg, #fff 0%, #93c5fd 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>{stat.value}</div>
                <div style={{ color: "#94a3b8", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.04em", lineHeight: 1.3 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Feature Pills */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              { icon: "⚡", text: "GST Advisory & Compliance", color: "#60a5fa" },
              { icon: "📊", text: "Wealth & Investment Planning", color: "#34d399" },
              { icon: "🛡️", text: "Litigation Support & Risk Advisory", color: "#f87171" },
            ].map((feat) => (
              <div key={feat.text} style={{
                display: "flex", alignItems: "center", gap: "12px",
                background: "rgba(255,255,255,0.05)", borderRadius: "12px",
                padding: "12px 18px", border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)", transition: "all 0.3s ease",
              }}>
                <span style={{ fontSize: "1.3rem" }}>{feat.icon}</span>
                <span style={{ color: "#e2e8f0", fontSize: "0.95rem", fontWeight: 500 }}>{feat.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer quote */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "20px" }}>
          <p style={{ color: "#64748b", fontSize: "0.85rem", fontStyle: "italic" }}>
            "Perficio — To Accomplish, To Complete, To Bring to Perfection."
          </p>
        </div>
      </div>

      {/* Right Panel — Login Card */}
      <div className="flex-1 flex items-center justify-center p-6 relative z-10">
        <div style={{
          width: "100%", maxWidth: "460px",
          background: "rgba(255,255,255,0.95)",
          borderRadius: "24px",
          boxShadow: "0 32px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)",
          overflow: "hidden",
          backdropFilter: "blur(20px)",
        }}>
          {/* Card Top Bar */}
          <div style={{
            background: "linear-gradient(135deg, #1e40af 0%, #1e3a5f 100%)",
            padding: "28px 32px 24px",
            textAlign: "center",
          }}>
            {/* Mobile Logo */}
            <div className="flex lg:hidden items-center justify-center gap-2 mb-4">
              <Image src="/perficio-logo.png" alt="Logo" width={36} height={36} className="rounded-md" />
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "1.2rem", letterSpacing: "0.06em" }}>PERFICIO</span>
            </div>
            <h2 style={{ color: "#fff", fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1.6rem", margin: 0 }}>
              Welcome Back
            </h2>
            <p style={{ color: "#93c5fd", fontSize: "0.9rem", marginTop: "6px" }}>
              Sign in to your account to continue
            </p>
          </div>

          {/* Tab Switcher */}
          <div style={{ display: "flex", background: "#f1f5f9", margin: "20px 28px 0", borderRadius: "12px", padding: "4px" }}>
            {[
              { key: "credentials", label: "📧 Email & Password" },
              { key: "google", label: "🔑 Google" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as "credentials" | "google")}
                style={{
                  flex: 1, padding: "10px 8px", borderRadius: "8px", border: "none",
                  cursor: "pointer", fontSize: "0.82rem", fontWeight: 600,
                  transition: "all 0.25s ease",
                  background: activeTab === tab.key ? "#1e40af" : "transparent",
                  color: activeTab === tab.key ? "#fff" : "#64748b",
                  boxShadow: activeTab === tab.key ? "0 4px 12px rgba(30,64,175,0.35)" : "none",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Form Area */}
          <div style={{ padding: "20px 28px 32px" }}>
            {activeTab === "credentials" && <LoginForm />}
            {activeTab === "google" && (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", padding: "16px 0" }}>
                <div style={{
                  width: "72px", height: "72px", borderRadius: "50%",
                  background: "linear-gradient(135deg, #f1f5f9, #e2e8f0)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "2rem", marginBottom: "4px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}>
                  🔐
                </div>
                <p style={{ color: "#475569", fontSize: "0.9rem", textAlign: "center", margin: 0 }}>
                  Securely sign in using your Google account.
                </p>
                <GoogleSignInButton />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Keyframe animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700;800&display=swap');
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.08); }
        }
      `}</style>
    </div>
  );
};

export default SignIn;
