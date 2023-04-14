import { ThemeContext } from "@/pages/_app";
import { useContext } from "react";

const Loading = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className={`loader absolute mx-auto z-20 left-0 right-0 mt-28`}>
      <div className={`outer ${theme ? "outer-dark" : "outer-light"}`}></div>
      <div className={`middle ${theme ? "middle-dark" : "middle-light"}`}></div>
      <div className={`inner ${theme ? "inner-dark" : "inner-light"}`}></div>
    </div>
  );
};

export default Loading;
