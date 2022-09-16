import Head from "next/head";
import { AppProps } from "next/app";

import "swiper/css";
import "swiper/css/navigation";

import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

import "../styles/reset.css";
import "../styles/fonts.css";

import { GlobalStyle } from "../styles/global";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const App = ({ Component, pageProps }: AppProps) => {
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

      <script
        src="https://cdn-prod.securiti.ai/consent/cookie-consent-sdk.js"
        data-tenant-uuid="472025cc-d8b2-4bf5-aeee-8dad3027a5f9"
        data-domain-uuid="c4786817-5ab4-4776-a7a8-66106459964e"
        data-backend-url="https://app.securiti.ai"
        defer
        onLoad={() => {
          (window as any).initCmp();
        }}
      ></script>

      <button className="cmp-revoke-consent">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75H192 160 64c-35.3 0-64 28.7-64 64v96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V352l8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V300.4c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4V32zm-64 76.7V240 371.3C357.2 317.8 280.5 288 200.7 288H192V192h8.7c79.8 0 156.5-29.8 215.3-83.3z" />
        </svg>
      </button>
    </>
  );
};

export default App;
