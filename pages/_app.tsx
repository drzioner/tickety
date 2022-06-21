/** @packages */
import { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";

/** @styles */
import "../styles/globals.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
