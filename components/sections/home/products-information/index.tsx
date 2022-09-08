import { ButtonComponent } from "components/data/button";
import { Container } from "components/data/container";
import { NextImage } from "components/data/NextImage";

import * as S from "./styles";

export function ProductsInformation() {
  return (
    <S.ProductInformation id="produtos">
      <Container>
        <div className="image-dog hide-mobile-768">
          <NextImage
            loading="lazy"
            src="/images/home-produtos-dog.webp"
            alt="Imagem cachorro"
            layout="fill"
          />
        </div>

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
                <div className="image-dog show-mobile-768">
                  <NextImage
                    loading="lazy"
                    src="/images/home-produtos-dog.webp"
                    alt="Imagem cachorro"
                    layout="fill"
                  />
                </div>

                <div className="top">
                  <div className="icon-box">
                    <NextImage
                      layout="fill"
                      src="/images/icon-dog.png"
                      alt="Icone cachorro"
                    />
                  </div>

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
                <div className="image-cat show-mobile-768">
                  <NextImage
                    loading="lazy"
                    src="/images/home-produtos-cat.webp"
                    alt="Imagem gato"
                    layout="fill"
                  />
                </div>

                <div className="top">
                  <div className="icon-box">
                    <NextImage
                      layout="fill"
                      src="/images/icon-cat.png"
                      alt="Icone cachorro"
                    />
                  </div>

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
        <div className="image-cat hide-mobile-768">
          <NextImage
            loading="lazy"
            src="/images/home-produtos-cat.webp"
            alt="Imagem gato"
            layout="fill"
          />
        </div>
      </Container>
    </S.ProductInformation>
  );
}
