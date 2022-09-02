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
                Home
              </a>
            </Link>

            <Link href={"/quem-somos"} passHref>
              <a href="replaced" className="link-2-regular">
                Quem somos
              </a>
            </Link>

            <Link href={"/contato"} passHref>
              <a href="replaced" className="link-2-regular">
                Contato
              </a>
            </Link>

            <Link href={"/onde-encontrar"} passHref>
              <a href="replaced" className="link-2-regular">
                Onde encontrar
              </a>
            </Link>
          </div>

          <div className="links hide-mobile">
            <h3 className="link-2-medium uppercase">Produtos</h3>

            <Link href={"/produtos/para-caes"} passHref>
              <a href="replaced" className="link-2-regular">
                Para cães
              </a>
            </Link>

            <Link href={"/produtos/para-gatos"} passHref>
              <a href="replaced" className="link-2-regular">
                Para gatos
              </a>
            </Link>
          </div>

          <div className="links">
            <h3 className="link-2-medium uppercase">Contato</h3>

            <LinksContato />

            <Link href={"/onde-encontrar"} passHref>
              <a href="replaced" className="link-2-regular show-mobile-1024">
                Onde encontrar
              </a>
            </Link>
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
      </Container>
    </S.Footer>
  );
}
