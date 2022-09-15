import Document, { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";

import { ServerStyleSheet } from "styled-components";

var stripe_load = () => {
  (function () {
    var s = document.createElement("script");
    s.src = "https://cdn-prod.securiti.ai/consent/cookie-consent-sdk.js";
    s.setAttribute("data-tenant-uuid", "472025cc-d8b2-4bf5-aeee-8dad3027a5f9");
    s.setAttribute("data-domain-uuid", "c4786817-5ab4-4776-a7a8-66106459964e");
    s.setAttribute("data-backend-url", "https://app.securiti.ai");
    s.defer = true;
    var parent_node = document.head || document.body;
    parent_node.appendChild(s);
    s.addEventListener("load", function () {
      // window.initCmp();
    });
  })();
};

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <>
        <Html lang="en">
          <Head></Head>

          <body>
            <Main />

            <script
              src="https://code.jquery.com/jquery-3.6.1.js"
              integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI="
              crossOrigin="anonymous"
            ></script>

            <NextScript />

            <script src="https://cdn-prod.securiti.ai/consent/cookie-consent-sdk.js">
              {(function () {
                var s = document.createElement("script");
                s.setAttribute(
                  "data-tenant-uuid",
                  "472025cc-d8b2-4bf5-aeee-8dad3027a5f9"
                );
                s.setAttribute(
                  "data-domain-uuid",
                  "c4786817-5ab4-4776-a7a8-66106459964e"
                );
                s.setAttribute("data-backend-url", "https://app.securiti.ai");
                s.defer = true;
                var parent_node = document.head || document.body;
                parent_node.appendChild(s);
                s.addEventListener("load", function () {
                  // window.initCmp();
                });
              })()}
            </script>
          </body>
        </Html>
      </>
    );
  }
}
