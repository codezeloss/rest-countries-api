import Layout from "@/Components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useState } from "react";

export const ThemeContext = createContext(false);

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <Layout setTheme={setTheme} btnClicked={toggleTheme}>
        <Component {...pageProps} />
      </Layout>
    </ThemeContext.Provider>
  );
}
