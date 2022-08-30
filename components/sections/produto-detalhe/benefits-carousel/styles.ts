import styled from "styled-components";

export const BenefitsComponent = styled.div`
  padding: 40px 0;

  .container {
    position: relative;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: #fff;

    &::after {
      font-size: 25px;
    }
  }

  .swiper-button-next {
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
  }

  .swiper {
    position: unset;
  }

  .swiper-wrapper {
    max-width: 1290px;
    margin: 0 auto;
  }
`;
