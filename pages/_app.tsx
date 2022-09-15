import Head from "next/head";
import { AppProps } from "next/app";
import Script from "next/script";

import "swiper/css";
import "swiper/css/navigation";

import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

import "../styles/reset.css";
import "../styles/fonts.css";

import { GlobalStyle } from "../styles/global";
import { useEffect } from "react";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const App = async ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://cdn-prod.securiti.ai/consent/auto_blocking/472025cc-d8b2-4bf5-aeee-8dad3027a5f9/c4786817-5ab4-4776-a7a8-66106459964e.js"
        ></script>
        <title>Raguife</title>
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="content-language" content="pt-br" />
        <meta name="distribution" content="global" />
        <meta name="copyright" content="Codie" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="language" content="portuguese, PT" />
        <meta name="location" content="Londrina, Paraná" />
        <meta name="keyboard-shortcuts-preference" content="all" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="referrer" content="origin" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="author" content="Codie" />
        <meta name="rating" content="general" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn-prod.securiti.ai/consent/cookie-consent.css"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
