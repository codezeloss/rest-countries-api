import type { AppProps } from "next/app";
import { createContext, useState } from "react";
import "@/styles/globals.css";
import AppLayout from "@/Components/AppLayout";
export const ThemeContext = createContext(false);

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <AppLayout setTheme={setTheme} btnClicked={toggleTheme}>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeContext.Provider>
  );
}
