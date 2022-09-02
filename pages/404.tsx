import { Head } from "next/document";
import { useRouter } from "next/router";

import { Layout } from "components/layout";
import { Container } from "components/data/container";

import * as S from "styles/pages/notfound";

export default function Page404() {
  const router = useRouter()

  return (
    <Layout>
      <S.NotFound>
        <Container>
          <p className="title-4-bold">Página não encontrada ;(</p>
        </Container>
      </S.NotFound>
    </Layout>
  );
}
