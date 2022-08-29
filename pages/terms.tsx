import { BreadCrumbComponent } from "components/data/breadcrumb";
import { Container } from "components/data/container";
import { Layout } from "components/layout";
import { GetServerSideProps } from "next";
import { PageInformationProps } from "src/interfaces/informationsPage";
import { api } from "src/services/api";
import * as S from "styles/pages/contact";

const BreadCrumbList = [
  {
    label: "Master of Miniatures",
    url: "/",
  },
  {
    label: "terms of use",
    url: "/terms",
  },
];

export default function TermsPage() {
  return (
    <Layout>
      <S.Contact>
        <Container>
          <div className="top">
            <BreadCrumbComponent list={BreadCrumbList} />

            <h2 className="title-2-bold-graphie">Terms of use</h2>
          </div>

          <div className="content">
            <p><strong>Política Privacidade</strong></p>

            <p>
              A sua privacidade é importante para nós. É política do respeitar a
              sua privacidade em relação a qualquer informação sua que possamos
              coletar no site , e outros sites que possuímos e operamos.
              Solicitamos informações pessoais apenas quando realmente
              precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios
              justos e legais, com o seu conhecimento e consentimento. 
              <br/>
              <br/>
              Também informamos por que estamos coletando e como será usado. Apenas
              retemos as informações coletadas pelo tempo necessário para
              fornecer o serviço solicitado. 
              <br/>
            </p>

            <p><strong>Política de Cookies</strong></p>
          </div>
        </Container>
      </S.Contact>
    </Layout>
  );
}

