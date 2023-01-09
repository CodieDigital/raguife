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
                <img
                  src="/images/logo-footer.png"
                  loading="lazy"
                  alt="Logo footer"
                />
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

            <Link href={"/onde-encontrar"} passHref>
              <a href="replaced" className="link-2-regular show-mobile-1024">
                Onde encontrar
              </a>
            </Link>

            <LinksContato />
          </div>

          <div className="links">
            <RedesSociasComponent />

            <a
              target={"_blank"}
              href="https://grupoambaramaral.com.br/"
              className="logo-ambar"
            >
              <img
                src="/images/logo-ambar.png"
                loading="lazy"
                alt="Logo Ambar"
              />
            </a>
          </div>
        </div>
      </Container>

      <div className="barra-footer">
        <Container>
          <a
            className="link-2-regular"
            target={"_blank"}
            href="https://privacy-central.securiti.ai/#/notices/6c4e075c-18ab-4759-a9f0-9d776ed2b69f"
          >
            Política de privacidade
          </a>

          <a
            className="link-2-regular"
            target={"_blank"}
            href="https://privacy-central.securiti.ai/#/dsr/6decb33a-c823-451d-af24-9955bc4aa213"
          >
            DSR
          </a>
        </Container>
      </div>
    </S.Footer>
  );
}
