import { ThemeContext } from "@/pages/_app";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import placeholderImage from "/public/assets/placeholder-img.jpg";

type Props = {
  flag_image: string;
  name: string;
  population: string;
  region: string;
  capital: any;
};

const CountryCard = ({
  flag_image,
  name,
  population,
  region,
  capital,
}: Props) => {
  const theme = useContext(ThemeContext);

  return (
    <Link className="w-fit" href={`/${name}`}>
      <div
        className={`w-[267px] rounded-md drop-shadow-lg ${
          theme ? "bg-dark-blue" : "bg-white"
        } ${!theme ? "text-vdark-blue-lgm" : "text-white"}`}
      >
        <div className="w-[267px] h-[160px] 3bp:w-full rounded-tr-md rounded-tl-md">
          <Image
            className="w-fit h-[160px] object-cover rounded-tr-md rounded-tl-md"
            src={flag_image ? flag_image : placeholderImage}
            alt={name ? name : "Country flag"}
            width={267}
            height={160}
          />
        </div>

        <div className="px-6 pb-11 pt-6">
          <h2 className="font-bold text-lg mb-4">
            {name.length > 20 ? name.slice(0, 20) + "..." : name}
          </h2>

          <div className="text-sm">
            <p>
              <span className="font-semibold">Population: </span>
              {population.toLocaleString()}
            </p>
            <p>
              <span className="font-semibold">Region: </span>
              {region}
            </p>
            <div className="">
              <span className="font-semibold">Capital: </span>
              {`${
                capital && capital.length > 2
                  ? capital?.join(", ").slice(0, 20) + "..."
                  : capital?.join(", ")
              }`}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
