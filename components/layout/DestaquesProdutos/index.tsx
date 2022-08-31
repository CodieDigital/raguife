import { ButtonComponent } from "components/data/button";
import { CardProductComponent } from "components/data/card-product";
import { Container } from "components/data/container";
import React from "react";
import { ProductListItem } from "src/services/shop/get";
import { Swiper, SwiperSlide } from "swiper/react";
import * as S from "./styles";

interface DestaquesProdutosComponentProps {
  listProducts: ProductListItem[];
  title?: string;
  withActions?: boolean;
}

export function DestaquesProdutosComponent({
  listProducts,
  title,
  withActions,
}: DestaquesProdutosComponentProps) {
  return (
    <S.DestaquesProdutos>
      <Container>
        {title && <h2 className="title-4-bold capitalize">{title}</h2>}
        <Swiper
          navigation={true}
          slidesPerView={3}
          className={"swiper-produtos"}
          breakpoints={{
            0: {
              spaceBetween: 20,
              slidesPerView: 1,
            },
            580: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
            1024: {
              spaceBetween: 35,
            },
            1200: {
              spaceBetween: 50,
            },
            1400: {
              spaceBetween: 70,
            },
            1600: {
              spaceBetween: 90,
            },
          }}
        >
          {listProducts.map((card) => {
            return (
              <SwiperSlide key={card.id + card.url + "1"}>
                <CardProductComponent card={card} />
              </SwiperSlide>
            );
          })}
        </Swiper>

        {withActions && (
          <div className="actions">
            <ButtonComponent
              text={"ver todos produtos para cães"}
              href={"/produtos/para-caes"}
            />

            <ButtonComponent
              text={"ver todos produtos para gatos"}
              href={"/produtos/para-gatos"}
            />
          </div>
        )}
      </Container>
    </S.DestaquesProdutos>
  );
}
