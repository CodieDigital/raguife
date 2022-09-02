import { useRouter } from "next/router";

import Head from "next/head";

import { Layout } from "components/layout";
import { ButtonComponent } from "components/data/components";

import * as S from "../../styles/pages/sucesso";

export default function ContactSucessPage() {
  const {  query } = useRouter();
  const router = useRouter()

  return (
    <Layout>
      <Head>
        <title>Sucesso</title>
        <meta
          name="description"
          content="Contato enviado com sucesso"
        />
        <meta
          itemProp="description"
          content="Contato enviado com sucesso"
        />
        <meta
          name="twitter:description"
          content="Contato enviado com sucesso"
        />
        <meta
          name="og:description"
          content="Contato enviado com sucesso"
        />
        <meta property="og:title" content="Sucesso" />
        <meta property="og:url" content={router.query.pathname?.toString()} />
        <link rel="canonical" href={router.pathname} />
      </Head>
      <S.Sucess>
        <div className="card-success">
          <h2 className="title-5-bold">Contato enviado com sucesso</h2>
          <p className="paragraph-2-bold">
            Muito obrigado {query.name} pelo seu contato!
          </p>
          <ButtonComponent text="Voltar para home" href="/" />
        </div>
      </S.Sucess>
    </Layout>
  );
}
