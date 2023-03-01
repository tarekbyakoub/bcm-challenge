import type { AppProps } from "next/app";
import { Inter as FontSans } from "@next/font/google";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globalstyles";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const theme: DefaultTheme = {};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
