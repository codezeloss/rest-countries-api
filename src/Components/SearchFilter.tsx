import Image from "next/image";
import searchIcon from "/public/assets/search-icon.svg";
import arrowBottom from "/public/assets/arrow-bottom.svg";
import { SetStateAction, useContext, useState } from "react";
import { ThemeContext } from "@/pages/_app";

const SearchFilter = ({ country, setCountry, region, setRegion }: any) => {
  const theme = useContext(ThemeContext);

  const [showDropdown, setShowDropdown] = useState(false);
  // const [selectedRegion, setSelectedRegion] = useState("Africa");

  //
  const dropdownHandler = () => {
    setShowDropdown((prevState) => !prevState);
  };

  //
  const countryValueChangeHandler = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setCountry(e.target.value);
  };

  return (
    <div className="w-full mb-12 flex justify-between 4bp:flex-col 4bp:gap-4 4bp:mb-9">
      <div
        className={`flex items-center gap-6 drop-shadow-md py-5 px-8 w-[480px] h-fit rounded-md 3bp:w-[380px] 5bp:w-full ${
          theme ? "bg-dark-blue" : "bg-white"
        } ${!theme ? "text-vdark-blue-lgm" : "text-white"}`}
      >
        <Image src={searchIcon} alt="Search country" width={18} height={18} />
        <input
          className="w-full outline-none text-sm rounded-md 4bp:text-xs bg-transparent"
          type="text"
          name="search_country"
          id="search_country"
          placeholder="Search for a country…"
          value={country}
          onChange={countryValueChangeHandler}
        />
      </div>

      <div>
        <div
          className={`w-[200px] 4bp:w-[180px] relative flex items-center justify-between mb-1 drop-shadow-md py-5 px-6 cursor-pointer rounded-md ${
            theme ? "bg-dark-blue" : "bg-white"
          } ${!theme ? "text-vdark-blue-lgm" : "text-white"}`}
          onClick={dropdownHandler}
        >
          <p className="text-sm 4bp:text-xs">{`${
            region ? region : "Filter by Region"
          }`}</p>
          <Image
            className="w-3 h-3"
            src={arrowBottom}
            alt="Filter By Region"
            width={12}
            height={12}
          />
        </div>
        {/* Drop down */}
        {showDropdown && (
          <div className="w-[200px] 4bp:w-[180px] absolute z-20">
            <ul
              className={`w-full drop-shadow-md rounded-md flex flex-col gap-2 text-sm px-6 py-5 4bp:text-xs ${
                theme ? "bg-dark-blue" : "bg-white"
              } ${!theme ? "text-vdark-blue-lgm" : "text-white"}`}
              onClick={dropdownHandler}
            >
              <li
                className="cursor-pointer hover:font-semibold"
                onClick={() => setRegion("Africa")}
              >
                Africa
              </li>
              <li
                className="cursor-pointer hover:font-semibold"
                onClick={() => setRegion("America")}
              >
                America
              </li>
              <li
                className="cursor-pointer hover:font-semibold"
                onClick={() => setRegion("Asia")}
              >
                Asia
              </li>
              <li
                className="cursor-pointer hover:font-semibold"
                onClick={() => setRegion("Europe")}
              >
                Europe
              </li>
              <li
                className="cursor-pointer hover:font-semibold"
                onClick={() => setRegion("Ocean")}
              >
                Ocean
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;
