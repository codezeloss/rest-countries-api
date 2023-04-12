import { ThemeContext } from "@/pages/_app";
import Link from "next/link";
import { useContext } from "react";

const BordersCountries = ({ borders }: any) => {
  const theme = useContext(ThemeContext);

  return (
    <div className="flex gap-2 flex-wrap">
      {borders
        ? borders?.map((border: string) => (
            <Link
              key={border}
              href={`/${border}`}
              className={`${theme ? "bg-dark-blue" : "bg-white"} ${
                !theme ? "text-vdark-blue-lgm" : "text-white"
              } w-[96px] h-[28px] flex items-center justify-center shadow-md text-xs`}
            >
              {border}
            </Link>
          ))
        : "N/A"}
    </div>
  );
};

export default BordersCountries;
