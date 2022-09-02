import Head from "next/head";
import { useRouter } from "next/router";

import { Layout } from "components/layout";
import { ContactComponent } from "components/sections/home/contact";

import * as S from "styles/pages/contact";

export default function ContactPage() {
  const router = useRouter()

  return (
    <S.Contact>
      <Head>
        <title>Contato Raguife</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="description" content="dados de contato empresa raguife" />
        <meta itemProp="description" content="dados de contato empresa raguife" />
        <meta name="twitter:description" content="dados de contato empresa raguife" />
        <meta name="og:description" content="dados de contato empresa raguife" />
        <meta property="og:title" content="Contato Raguife"/>
        <meta property="og:locale" content="pt_BR"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={router.query.pathname?.toString()}/>
        <link rel="icon" href="/favicon.ico" />
        <meta name="content-language" content="pt-br"/>
        <meta name="rating" content="general"/>
        <meta name="distribution" content="global"/>
        <meta name="copyright" content="Codie"/>
        <meta name="author" content="Codie" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index,follow"/>
        <link rel="canonical" href={router.pathname} />
        <meta name="referrer" content="origin" />
        <meta name="language" content="portuguese, PT"/>
        <meta name="location" content="Londrina, Paraná"/>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="keyboard-shortcuts-preference" content="all"/>
      </Head>
      
      <Layout>
        <ContactComponent linksContato />
      </Layout>
    </S.Contact>
  );
}
