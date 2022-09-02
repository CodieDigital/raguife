import { ButtonComponent } from "components/data/button";
import { Container } from "components/data/container";

import * as S from "./styles";

export function ProductsInformation() {
  return (
    <S.ProductInformation id="produtos">
      <Container>
        <img
          loading="lazy"
          className="image-dog hide-mobile-768"
          src="/images/home-produtos-dog.webp"
          alt="Imagem cachorro"
        />

        <div className="content">
          <div className="title">
            <h2 className="title-4-bold capitalize">Nossos produtos</h2>

            <p className="paragraph-2-regular">
              Produzimos alimentos com ingredientes selecionados e de altíssima
              qualidade garantindo uma nutrição eficiente e muito saborosa para
              o seu pet.
            </p>
          </div>

          <div className="grid-categorias">
            <div className="box-categorias dog">
              <div className="text dog">
                <img
                  loading="lazy"
                  className="image-dog show-mobile-768"
                  src="/images/home-produtos-dog.webp"
                  alt="Imagem cachorro"
                />

                <div className="top">
                  <img
                    className="icon-box"
                    src="/images/icon-dog.png"
                    alt="Icone cachorro"
                  />

                  <h3 className="-bold">Cães</h3>
                </div>

                <p className="paragraph-2-regular">
                  Raguife Pet oferece as vitaminas que o seu cão precisa pra ter
                  uma vida longa e saudável.
                </p>

                <ButtonComponent
                  text={"ver produtos para cães"}
                  href={"/produtos/para-caes"}
                />
              </div>
            </div>

            <div className="box-categorias cat">
              <div className="text cat">
                <img
                  loading="lazy"
                  className="image-cat  show-mobile-768"
                  src="/images/home-produtos-cat.webp"
                  alt="Imagem gato"
                />

                <div className="top">
                  <img
                    className="icon-box"
                    src="/images/icon-cat.png"
                    alt="Icone gato"
                  />

                  <h3 className="-bold">Gatos</h3>
                </div>

                <p className="paragraph-2-regular">
                  Para garantir a saúde do seu gatinho, na Raguife Pet você
                  encontra o alimento ideal.
                </p>

                <ButtonComponent
                  text={"ver produtos para cães"}
                  href={"/produtos/para-caes"}
                />
              </div>
            </div>
          </div>
        </div>

        <img
          loading="lazy"
          className="image-cat  hide-mobile-768"
          src="/images/home-produtos-cat.webp"
          alt="Imagem gato"
        />
      </Container>
    </S.ProductInformation>
  );
}
