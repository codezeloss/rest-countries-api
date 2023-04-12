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

export default function Layout({ children, btnClicked }: any) {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={`h-full relative ${nunito_sans.className} ${
        theme ? "bg-vdark-blue-dam" : "bg-white"
      } ${!theme ? "text-vdark-blue-lgm" : "text-white"}`}
    >
      <Navbar btnClicked={btnClicked} />

      <div
        className={`h-full w-full ${theme ? "bg-vdark-blue-dam" : "bg-white"} ${
          !theme ? "text-vdark-blue-lgm" : "text-white"
        } max-w-[1300px] mx-auto px-5 py-12 4bp:py-8`}
      >
        {children}
      </div>
    </div>
  );
}
