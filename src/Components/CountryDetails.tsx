import Image from "next/image";
import Link from "next/link";
import backIcon from "/public/assets/back-icon.svg";
import placeholderImage from "/public/assets/placeholder-img.jpg";

type Props = {
  img_src: string;
  img_alt: string;
  country_name: string;
  native_name: string;
  population: string;
  region: string;
  sub_region: string;
  capital: any;
  domain: string;
  currencies: string;
  languages: string;
  border_countries: string;
};

const CountryDetails = ({
  img_src,
  img_alt,
  country_name,
  native_name,
  population,
  region,
  sub_region,
  capital,
  domain,
  currencies,
  languages,
  border_countries,
}: Props) => {
  return (
    <div className="bg-very-light-gray h-fit">
      <Link
        className="bg-white flex items-center gap-3 mb-20 cursor-pointer px-6 py-2 shadow-md w-fit 4bp:mb-10"
        href="/"
      >
        <Image
          className="w-4 h-4"
          src={backIcon}
          alt="Back"
          width={40}
          height={40}
        />
        <p className="text-sm">Back</p>
      </Link>

      <div className="flex items-center gap-24 2bp:gap-10 2bp:flex-col">
        <div className="w-[560] h-[401px] 2bp:h-auto">
          <Image
            className="w-[560] h-[401px] 2bp:h-auto rounded-md object-fill"
            src={img_src ? img_src : placeholderImage}
            alt={img_alt}
            width={560}
            height={401}
          />
        </div>

        <div className="max-w-[500px] text-base 2bp:max-w-[560px] 5bp:text-sm 5bp:w-full">
          <h2 className="text-3xl mb-6 font-extrabold 5bp:text-2xl">
            {country_name}
          </h2>

          <div className="flex mb-16 gap-14 2bp:flex-row 2bp:gap-32 2bp:mb-16 4bp:flex-col 4bp:mb-8 4bp:gap-8">
            <div className="flex flex-col gap-1">
              <p>
                <span className="font-semibold">Native Name: </span>
                {native_name}
              </p>
              <p>
                <span className="font-semibold">Population: </span>
                {population?.toLocaleString()}
              </p>
              <p>
                <span className="font-semibold">Region: </span> {region}
              </p>
              <p>
                <span className="font-semibold">Sub Region: </span>
                {sub_region}
              </p>
              <p>
                <span className="font-semibold">Capital: </span>
                {capital ? capital?.join(", ") : ""}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p>
                <span className="font-semibold">Top Level Domain: </span>
                {domain}
              </p>
              <p>
                <span className="font-semibold">Currencies: </span>
                {currencies}
              </p>
              <p>
                <span className="font-semibold">Languages: </span>
                {languages}
              </p>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap gap-2 4bp:flex-col">
              <p className="font-semibold">Border Countries: </p>
              <div className="flex gap-2">{border_countries}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
