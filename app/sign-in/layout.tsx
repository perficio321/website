import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | Perficio",
  description: "Securely sign in to your Perficio account using email or Google login. Access your personalized financial dashboard.",
  openGraph: {
    title: "Sign In | Perficio",
    description: "Login securely with email or Google and explore your Perficio dashboard.",
    url: "https://your-domain.com/signin", // Replace with actual domain
    siteName: "Perficio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sign In | Perficio",
    description: "Access your Perficio account with secure sign-in options.",
    site: "@perficio_advisory", // Replace with actual Twitter handle
  },
};

export default function SignInLayout({ children }: { children: React.ReactNode }) {
  return (
    <div >
      {children}
    </div>
  );
}
