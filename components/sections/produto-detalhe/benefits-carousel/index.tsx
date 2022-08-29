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
  console.log(listBenefits)
  return (
    <S.BenefitsComponent>
      <Container>
        {!listBenefits && <div></div>}

        <Swiper
          slidesPerView={4}
          width={1335}
          spaceBetween={45}
          navigation={true}
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
