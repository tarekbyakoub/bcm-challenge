import type { AppProps } from "next/app";
import { Inter as FontSans } from "@next/font/google";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globalstyles";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const theme: DefaultTheme = {
  colors: {
    primary: "#1a1a1a",
    secondary: "#e6e6e6",
    accent: "#ff6600",
    background: "#f5f5f5",
  },
  typography: {
    font: "'Montserrat', sans-serif",
    size: "16px",
    weight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  spacing: {
    xxs: "4px",
    xs: "8px",
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "48px",
  },
};

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
