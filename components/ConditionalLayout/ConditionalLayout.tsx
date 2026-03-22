"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

// Pages on which Navbar & Footer should be hidden
const HIDDEN_ROUTES = ["/sign-in"];

const ConditionalLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const hide = HIDDEN_ROUTES.some((route) => pathname?.startsWith(route));

  return (
    <>
      {!hide && <Navbar />}
      {children}
      {!hide && <Footer />}
    </>
  );
};

export default ConditionalLayout;
