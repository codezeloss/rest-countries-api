import Image from "next/image";
import Link from "next/link";
import backIcon from "/public/assets/back-icon.svg";
import placeholderImage from "../../public/assets/placeholder-img.jpg";

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
      <Link href="/">
        <div className="flex items-center gap-3 mb-20 cursor-pointer">
          <Image
            className="w-5 h-5"
            src={backIcon}
            alt="Back"
            width={50}
            height={50}
          />
          <p>Back</p>
        </div>
      </Link>

      <div className="flex items-center gap-24">
        <div className="min-w-[560] w-[560] h-[401px]">
          <Image
            className="min-w-[560] w-[560] h-[401px] rounded-tr-md rounded-tl-md object-fill"
            src={!img_src ? placeholderImage : img_src}
            alt={img_alt}
            width={560}
            height={401}
          />
        </div>

        <div className="max-w-[800px]">
          <h2 className="text-3xl mb-6 font-extrabold">{country_name}</h2>

          <div className="flex mb-16 space-x-20">
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
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Border Countries: </p>
              <div className="flex gap-2 flex-wrap">{border_countries}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
