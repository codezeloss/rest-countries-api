import { useState } from "react";

// next imports
import Image from "next/image";
import Link from "next/link";

// import icons
import DarkModeIcon from "/public/assets/dark-mode-icon.svg";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  const handleThemeSwitch = () => {};

  return (
    <div className="bg-white drop-shadow-md">
      <div className="max-w-[1290px] mx-auto flex items-center justify-between py-6 px-5">
        <Link href="/">
          <h1 className="text-2xl	font-extrabold cursor-pointer 4bp:text-sm">
            Where in the world?
          </h1>
        </Link>

        <div
          className="flex items-center gap-1.5 cursor-pointer"
          onClick={handleThemeSwitch}
        >
          <Image
            className="w-5 h-5 4bp:w-4 4bp:h-4"
            src={DarkModeIcon}
            alt="Dark/Light Mode"
            width={20}
            height={20}
          />
          <p className="text-base font-semibold 4bp:text-xs">Dark Mode</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
