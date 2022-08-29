import { Container } from "components/data/container";
import { Layout } from "components/layout";

import * as S from "styles/pages/notfound";

export default function Page404() {
  return (
    <Layout>
      <S.NotFound>
        <Container>
          <p className="title-3-bold-cinzel">Página não encontrada ;(</p>
        </Container>
      </S.NotFound>
    </Layout>
  );
}
