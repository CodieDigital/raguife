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
        {/* <!-- Google Tag Manager --> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer','GTM-M2XJ66S');`,
          }}
        ></script>
        {/* <!-- End Google Tag Manager --> */}

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

      <button className="cmp-revoke-consent">Revoke Consent</button>
    </>
  );
};

export default App;
