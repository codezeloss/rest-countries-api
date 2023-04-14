import Navbar from "./Navbar";
import { Nunito_Sans } from "next/font/google";
import { useContext, useState } from "react";
import { ThemeContext } from "@/pages/_app";

// font
const nunito_sans = Nunito_Sans({
  weight: ["300", "600", "800"],
  subsets: ["latin"],
  variable: "--font-nunito_sans",
});

//
const Layout = ({ children, btnClicked }: any) => {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={`min-h-[100vh] h-max bottom-0 ${nunito_sans.className} ${
        theme ? "bg-vdark-blue-dam text-white" : "bg-white text-vdark-blue-lgm"
      }`}
    >
      <Navbar btnClicked={btnClicked} />

      <div
        className={`h-max w-full max-w-[1300px] mx-auto px-5 py-12 4bp:py-8`}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
