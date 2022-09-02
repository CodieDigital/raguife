import { Head } from "next/document";
import { useRouter } from "next/router";

import { Layout } from "components/layout";
import { Container } from "components/data/container";


import * as S from "styles/pages/notfound";

export default function Page404() {
  const router = useRouter()

  return (
    <Layout>
      <Head>
        <title>Página não encontrada</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="description" content="404 | Página não encontrada" />
        <meta
          itemProp="description"
          content="404 | Página não encontrada"
        />
        <meta
          name="twitter:description"
          content="404 | Página não encontrada"
        />
        <meta
          name="og:description"
          content="404 | Página não encontrada"
        />
        <meta property="og:title" content="Página não encontrada" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={router.query.pathname?.toString()} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="content-language" content="pt-br" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="copyright" content="Codie" />
        <meta name="author" content="Codie" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index,follow" />
        <link rel="canonical" href={router.pathname} />
        <meta name="referrer" content="origin" />
        <meta name="language" content="portuguese, PT" />
        <meta name="location" content="Londrina, Paraná" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="keyboard-shortcuts-preference" content="all" />
      </Head>
      <S.NotFound>
        <Container>
          <p className="title-4-bold">Página não encontrada ;(</p>
        </Container>
      </S.NotFound>
    </Layout>
  );
}
