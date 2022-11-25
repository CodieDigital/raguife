import Document, { Html, Head, Main, NextScript } from "next/document";

import { ServerStyleSheet } from "styled-components";

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
        <Html lang="pt-BR">
          <Head></Head>

          <body>
            {/* <!-- Google Tag Manager (noscript) --> */}
            <noscript>
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-M2XJ66S"
                height="0"
                width="0"
                style={{ display: "none;", visibility: "hidden" }}
              ></iframe>
            </noscript>
            {/* <!-- End Google Tag Manager (noscript) --> */}
            
            <Main />

            <NextScript />
          </body>
        </Html>
      </>
    );
  }
}
