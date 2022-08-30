import { Fragment } from "react";

import { BenefitsCard } from "components/data/benefits-card";
import { Swiper, SwiperSlide } from "swiper/react";

import * as S from "./styles";
import { Container } from "components/data/container";
import { Benefits } from "src/services/shop/get";

interface BenefitsSwiperlProps {
  listBenefits: Benefits[];
}

export function BenefitsComponent({ listBenefits }: BenefitsSwiperlProps) {
  return (
    <S.BenefitsComponent>
      <Container>
        {!listBenefits && <div></div>}

        <Swiper
          slidesPerView={4}
          navigation={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            680: {
              slidesPerView: 2,
            },
            901: {
              slidesPerView: 3,
            },
            1601: {
              slidesPerView: 4,
            },
          }}
        >
          {listBenefits &&
            listBenefits.map((cardBenefits) => (
              <SwiperSlide
                className="swiper-item"
                key={"cardBenefit-" + cardBenefits.id}
              >
                <BenefitsCard cardBenefits={cardBenefits} />
              </SwiperSlide>
            ))}
        </Swiper>
      </Container>
    </S.BenefitsComponent>
  );
}
