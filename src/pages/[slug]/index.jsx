import CountryDetails from "@/Components/CountryDetails";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/Components/Loading";
import BordersCountries from "@/Components/BordersCountries";
import { ThemeContext } from "../_app";

const Post = () => {
  const theme = useContext(ThemeContext);

  const router = useRouter();
  const { slug } = router.query;

  const [country, setCountry] = useState("");

  const [currencies, setCurrencies] = useState("");
  const [languages, setLanguages] = useState("");
  const [nativeName, setNativeName] = useState("");
  const [borders, setBorders] = useState("");

  const [isLoading, setLoading] = useState(false);

  //
  useEffect(() => {
    //
    async function fetchCountries() {
      setLoading(true);

      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${slug}`
      );
      const countryData = await response.data;
      setCountry(countryData);

      // CUSTOM OUTPUTS
      const nativeName = Object.values(countryData[0]?.name.nativeName).find(
        (lang) => lang
      );
      setNativeName(nativeName?.common);

      const currencies =
        countryData[0].currencies !== ""
          ? Object.keys(countryData[0].currencies)
          : "N/A";
      setCurrencies(currencies !== "N/A" ? currencies.join(", ") : currencies);

      const languages =
        countryData[0].languages !== ""
          ? Object.values(countryData[0].languages)
          : "N/A";
      setLanguages(languages !== "N/A" ? languages.join(", ") : languages);

      const borders =
        countryData[0].borders !== "" ? countryData[0]?.borders : "N/A";
      setBorders(borders);

      //setLoading(false);
    }

    fetchCountries();
  }, [slug]);

  //
  if (isLoading) {
    return <Loading />;
  }

  // @ts-nocheck
  return (
    <div
      className={`h-full ${
        theme ? "bg-vdark-blue-dam text-white" : "bg-white text-vdark-blue-lgm"
      }`}
    >
      <CountryDetails
        img_src={country[0]?.flags?.svg}
        img_alt={
          country[0]?.altSpellings ? country[0]?.altSpellings[0] : "Country"
        }
        country_name={country[0]?.name?.common}
        native_name={nativeName}
        population={country[0]?.population}
        region={country[0]?.region}
        sub_region={country[0]?.subregion}
        capital={country[0]?.capital}
        domain={country[0]?.tld.join(" ")}
        currencies={currencies}
        languages={languages}
        border_countries={<BordersCountries borders={borders} />}
      />
    </div>
  );
};

export default Post;
