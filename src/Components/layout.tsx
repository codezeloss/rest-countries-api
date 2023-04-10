import Navbar from "./Navbar";
import { Nunito_Sans } from "next/font/google";

// font
const nunito_sans = Nunito_Sans({
  weight: ["300", "600", "800"],
  subsets: ["latin"],
  variable: "--font-nunito_sans",
});

export default function Layout({ children }: any) {
  return (
    <div
      className={`h-full relative ${nunito_sans.className} bg-very-light-gray`}
    >
      <Navbar />

      <div className="w-full bg-very-light-gray">
        <div className="w-full h-full max-w-[1300px] mx-auto px-5 py-12 4bp:py-8">
          {children}
        </div>
      </div>
    </div>
  );
}
