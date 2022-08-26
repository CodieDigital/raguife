import styled from "styled-components";

export const BenefitsComponent = styled.div`
  padding: 40px 0;

  .container {
    max-width: 1380px;
    position: relative;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: var(--primary-color);

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
