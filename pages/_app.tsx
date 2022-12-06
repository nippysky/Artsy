import "../styles/globals.css";
import type { AppProps } from "next/app";
import ScrollUp from "../components/ScrollUp";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        color="#000000"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <ScrollUp />
      <Component {...pageProps} />
    </>
  );
}
