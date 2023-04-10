import Link from "next/link";

const BordersCountries = ({ borders }: any) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {borders
        ? borders?.map((border: string) => (
            <Link
              href={`/${border}`}
              className="bg-white w-[96px] h-[28px] flex items-center justify-center shadow-md text-xs"
            >
              {border}
            </Link>
          ))
        : "N/A"}
    </div>
  );
};

export default BordersCountries;
