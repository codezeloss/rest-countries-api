import Link from "next/link";

const BordersCountries = ({ borders }: any) => {
  return (
    <div className="flex space-x-4">
      {borders
        ? borders?.map((border: string) => (
            <Link
              href={`/${border}`}
              className="bg-white px-4 py-1 shadow-md text-sm"
            >
              {border}
            </Link>
          ))
        : "N/A"}
    </div>
  );
};

export default BordersCountries;
