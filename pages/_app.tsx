import Head from "next/head";
import { AppProps } from "next/app";

import "swiper/css";
import "swiper/css/navigation";

import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

import "../styles/reset.css";
import "../styles/fonts.css";

import { GlobalStyle } from "../styles/global";
import { useRouter } from "next/router";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <>
        <Head>
          <title>Raguife</title>
          <link rel="canonical" href={router.pathname} />
          <link rel="icon" href="/favicon.ico" />

          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="description"
            content="Raguife description"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="robots" content="index, follow" />
          <meta name="referrer" content="origin" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="author" content="Codie" />
          <meta name="rating" content="general" />
          <meta name="keyboard-shortcuts-preference" content="all"></meta>
        </Head>

      <GlobalStyle />

      <Component {...pageProps} />
    </>
  );
};

export default App;
