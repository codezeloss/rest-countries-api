
import SearchFilter from "@/Components/SearchFilter";
import CountryCard from "@/Components/CountryCard";
import { SetStateAction, useState } from "react";
import Image from "next/image";
import searchIcon from "/public/assets/search-icon.svg";
import arrowBottom from "/public/assets/arrow-bottom.svg";

const Countries = async () => {
  const res = await fetch(`https://restcountries.com/v3.1/region/europe`);
  const data = await res.json();

  const [showDropdown, setShowDropdown] = useState(false);
  const [country, setCountry] = useState("");

  const dropdownHandler = () => {
    setShowDropdown((prevState) => !prevState);
  };

  const countryValueChangeHandler = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setCountry(e.target.value);
  };

  return (
    <>


      <main>
        <div className="mb-12 flex justify-between">
          <div className="flex items-center gap-6 bg-white drop-shadow-md py-5 px-8 w-[480px] h-fit rounded-md">
            <Image src={searchIcon} alt="Search country" width={18} height={18} />
            <input
              className="w-full outline-none text-sm rounded-md"
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
              className="w-[200px] relative flex items-center justify-between mb-1 drop-shadow-md py-5 px-6 bg-white cursor-pointer"
              onClick={dropdownHandler}
            >
              <p className="text-sm">Filter by Region</p>
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
              <div className="w-[200px] absolute z-20">
                <ul className="w-full drop-shadow-md bg-white rounded-md flex flex-col gap-2 text-sm px-6 py-5">
                  <li
                    className="cursor-pointer hover:font-semibold"
                    onClick={dropdownHandler}
                  >
                    Africa
                  </li>
                  <li
                    className="cursor-pointer hover:font-semibold"
                    onClick={dropdownHandler}
                  >
                    America
                  </li>
                  <li
                    className="cursor-pointer hover:font-semibold"
                    onClick={dropdownHandler}
                  >
                    Asia
                  </li>
                  <li
                    className="cursor-pointer hover:font-semibold"
                    onClick={dropdownHandler}
                  >
                    Europe
                  </li>
                  <li
                    className="cursor-pointer hover:font-semibold"
                    onClick={dropdownHandler}
                  >
                    Ocean
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        {/* <SearchFilter /> */}

        <div className="flex gap-16 flex-wrap mx-auto">{data?.map((country: any) => (
          <CountryCard
            key={country.name.common}
            flag_image={country.flags.svg}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))}
        </div>
      </main>
    </>
  );
}

export default Countries;