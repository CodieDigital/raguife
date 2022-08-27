import { Container } from "components/data/container";
import { LinksContato } from "components/data/links-page-contact";
import { RedesSociasComponent } from "components/data/redes-sociais";
import Link from "next/link";

import * as S from "./styles";

export function FooterComponent() {
  return (
    <S.Footer>
      <Container>
        <div className="top-content">
          <div className="logo">
            <Link href={"/"} passHref>
              <a href="replaced" className="logo-pets">
                <img src="/images/logo-footer.png" alt="Logo footer" />
              </a>
            </Link>
          </div>

          <div className="links hide-mobile">
            <h3 className="link-2-medium uppercase">Mapa do site</h3>

            <Link href={"/"} passHref>
              <a href="replaced" className="link-2-regular">
                home
              </a>
            </Link>

            <Link href={"/quem-somos"} passHref>
              <a href="replaced" className="link-2-regular">
                quem somos
              </a>
            </Link>

            <Link href={"/contato"} passHref>
              <a href="replaced" className="link-2-regular">
                contato
              </a>
            </Link>
          </div>

          <div className="links hide-mobile">
            <h3 className="link-2-medium uppercase">produtos</h3>

            <Link href={"/produtos/para-caes"} passHref>
              <a href="replaced" className="link-2-regular">
                para cães
              </a>
            </Link>

            <Link href={"/produtos/para-gatos"} passHref>
              <a href="replaced" className="link-2-regular">
                para gatos
              </a>
            </Link>
          </div>

          <div className="links ">
            <h3 className="link-2-medium uppercase">Contato</h3>

            <LinksContato />
          </div>

          <div className="links">
            <RedesSociasComponent />

            <a
              target={"_blank"}
              href="https://grupoambaramaral.com.br/"
              className="logo-ambar"
            >
              <img src="/images/logo-ambar.png" alt="Logo Ambar" />
            </a>
          </div>
        </div>

        <div className="barra-codie">
          <span className="paragraph-2-regular">Desenvolvido por</span>

          <img src="/images/logo-codie.png" alt="Logo codie" />
        </div>
      </Container>
    </S.Footer>
  );
}
