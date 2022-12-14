import { ButtonComponent } from "components/data/button";
import { Container } from "components/data/container";
import { NextImage } from "components/data/NextImage";
import * as S from "./styles";

export function ParalaxBanner() {
  return (
    <S.ParalaxBanner>
      <Container>
        <div className="title">
          <div className="icon">
            <NextImage
              src="/images/icon-selo.png"
              loading="lazy"
              alt="Icone selo"
              layout="fill"
            />
          </div>

          <h2 className="title-4-bold capitalize">
            Formulado por especialistas
          </h2>
        </div>

        <p className="paragraph-2-regular">
          Nossas formulações visam garantir a segurança e a saúde que o seu
          amigo precisa. Utilizamos proteínas de alta digestibilidade a fim de
          reduzir o volume a odor das fezes. Não utilizamos conservantes,
          corantes e aromatizantes artificiais.
        </p>
        <ButtonComponent text={"Saiba mais sobre nós"} href={"/quem-somos"} />
      </Container>
    </S.ParalaxBanner>
  );
}
