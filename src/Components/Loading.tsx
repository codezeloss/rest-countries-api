import { ThemeContext } from "@/pages/_app";
import { useContext } from "react";

const Loading = () => {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={`loader absolute mx-auto z-20 left-0 right-0 top-0 bottom-0`}
    >
      <div
        className={`outer w-[5.5rem] h-[5.5rem] 3bp:w-[4.5rem] 3bp:h-[4.5rem] ${
          theme ? "outer-dark" : "outer-light"
        }`}
      ></div>
      <div className={`middle w-[4.1rem] h-[4.1rem] 3bp:w-[3.1rem] 3bp:h-[3.1rem] ${theme ? "middle-dark" : "middle-light"}`}></div>
      <div className={`inner w-[2.8rem] h-[2.8rem] 3bp:w-[1.8rem] 3bp:h-[1.8rem] ${theme ? "inner-dark" : "inner-light"}`}></div>
    </div>
  );
};

export default Loading;
