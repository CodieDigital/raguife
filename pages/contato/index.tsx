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
        <meta name="description" content="dados de contato empresa raguife" />
        <meta itemProp="description" content="dados de contato empresa raguife" />
        <meta name="twitter:description" content="dados de contato empresa raguife" />
        <meta name="og:description" content="dados de contato empresa raguife" />
        <meta property="og:title" content="Contato Raguife"/>
        <meta property="og:url" content={router.query.pathname?.toString()}/>
        <link rel="canonical" href={router.pathname} />
      </Head>
      
      <Layout>
        <ContactComponent linksContato />
      </Layout>
    </S.Contact>
  );
}
