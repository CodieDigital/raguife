import { Fragment } from "react";

import { BenefitsCard, BenefitsItem } from "components/data/benefits-card";
import { Swiper, SwiperSlide } from "swiper/react";

import * as S from "./styles";
import { Container } from "components/data/container";

interface BenefitsSwiperlProps {
  listBenefits: BenefitsItem[];
}

export function BenefitsComponent({ listBenefits }: BenefitsSwiperlProps) {
  return (
    <S.BenefitsComponent>
      <Container>
        <Swiper
        slidesPerView={4}
        width= {1335}
        spaceBetween={45}
         navigation={true}
        >
          {listBenefits.map((cardBenefits) => (
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
