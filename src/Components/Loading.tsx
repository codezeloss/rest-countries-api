import { ThemeContext } from "@/pages/_app";
import { useContext } from "react";

const Loading = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className={`loader absolute mx-auto w-full z-20 left-0 right-0`}>
      <div className={`outer`}></div>
      <div className={`middle`}></div>
      <div className={`inner`}></div>
    </div>
  );
};

export default Loading;
