import { useRouter } from "next/router";

import { Layout } from "components/layout";
import { ButtonComponent } from "components/data/components";

import * as S from "../../styles/pages/sucesso";

export default function ContactSucessPage() {
  const { query } = useRouter();
  return (
    <Layout>
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
