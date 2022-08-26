import { ButtonComponent } from "components/data/button";
import { Container } from "components/data/container";
import * as S from "./styles";

export function ParalaxBanner() {
  return (
    <S.ParalaxBanner>
      <Container>
        <div className="title">
          <img src="/images/icon-selo.png" alt="Icone selo" className="icon" />

          <h2 className="title-4-bold">Formulado por especialistas</h2>
        </div>

        <p className="paragraph-2-regular">
          Produtos naturais proporcionando saúde para o seu pet. A formulação
          conta com alta digestibilidade dos ingredientes, garantindo menor
          volume de fezes e odor, proporcionando melhor qualidade de vida para
          cães e gatos. Fórmulas sem corantes ou aromatizantes artificiais.
        </p>

        <ButtonComponent text={"saiba mais sobre nós"} href={"/quem-somos"}/>
      </Container>
    </S.ParalaxBanner>
  );
}
