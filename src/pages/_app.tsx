import type { AppProps } from "next/app";
import { Inter as FontSans } from "@next/font/google";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globalstyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
