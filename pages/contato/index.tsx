import Head from "next/head";

import { Layout } from "components/layout";
import { ContactComponent } from "components/sections/home/contact";

import * as S from "styles/pages/contact";

export default function ContactPage() {
  return (
    <S.Contact>
      <Head>
        <title>Contato</title>
        <meta name="description" content="dados de contato empresa raguife"/>
      </Head>
      
      <Layout>
        <ContactComponent linksContato />
      </Layout>
    </S.Contact>
  );
}
