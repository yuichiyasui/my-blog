import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Y&apos;s log</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
