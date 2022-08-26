import { ButtonComponent } from "components/data/button";
import { Container } from "components/data/container";

import * as S from "./styles";

export function ProductsInformation() {
  return (
    <S.ProductInformation id="Produtos">
      <Container>
        <img
          className="image-dog hide-mobile-768"
          src="/images/home-produtos-dog.png"
          alt="Imagem cachorro"
        />

        <div className="content">
          <div className="title">
            <h2 className="title-4-bold">Nossos produtos</h2>

            <p className="paragraph-2-regular">
              Linhas para cães e gatos completas e desenvolvidas com
              ingredientes selecionados de altíssima qualidade. São enriquecidos
              com vitaminas, minerais e balanceados com um rigoroso controle de
              qualidade, para garantir a alimentação do seu pet mais nutritiva e
              saborosa.
            </p>
          </div>

          <div className="grid-categorias">
            <div className="box-categorias dog">
              <div className="text dog">
                <img
                  className="image-dog show-mobile-768"
                  src="/images/home-produtos-dog.png"
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
                  className="image-cat  show-mobile-768"
                  src="/images/home-produtos-cat.png"
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
          className="image-cat  hide-mobile-768"
          src="/images/home-produtos-cat.png"
          alt="Imagem gato"
        />
      </Container>
    </S.ProductInformation>
  );
}
