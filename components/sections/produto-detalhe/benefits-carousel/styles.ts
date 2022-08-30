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

  @media only screen and (max-width: 1600px) {
    padding: 35px 0;
  }

  @media only screen and (max-width: 1400px) {
    padding: 30px 0;
  }

  @media only screen and (max-width: 1200px) {
    padding: 25px 0;
  }

  @media only screen and (max-width: 1024px) {
    padding: 20px 0;
  }

  @media only screen and (max-width: 900px) {
    .container {
      max-width: 600px;
    }
  }

  @media only screen and (max-width: 768px) {
  }
`;
