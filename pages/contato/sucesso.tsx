import { useRouter } from "next/router";

import { Head } from "next/document";

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
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="description" content="Contato enviado com sucesso" />
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
