import styled from "styled-components";

export const Sobre = styled.section`
  .banner-sobre {
    aspect-ratio: 1920/800;
    background-color: var(--tertiary-color);
    display: flex;
    align-items: center;

    .text-image {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 25px;
      max-width: 89%;
      width: 100%;
      margin: 0 0 0 auto;
    }

    h4 {
      color: #fff;
      margin-bottom: 50px;
    }

    .text {
      max-width: 560px;
      width: 100%;
    }

    span {
      display: block;
      color: #fff;
    }

    span.titulo-2 {
      line-height: 0.8;
      margin-left: 38px;
    }

    span.titulo-3 {
      margin-left: 100px;
      margin-top: -8px;
    }

    .image {
      max-width: 52.08vw;

      img {
        width: 100%;
        object-fit: contain;
      }
    }
  }

  .sobre {
    padding: 105px 0 115px;
    background-color: var(--purple-color);

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 40px;
      color: #fff;
    }

    .text {
      max-width: 630px;
    }

    .image {
      max-width: 660px;

      img {
        width: 100%;
        object-fit: contain;
      }
    }

    p {
      max-width: 890px;
      line-height: 24px;
      margin: 0 auto;
    }

    h2 + * {
      margin-top: 25px;
    }
  }

  .informativo-nutricao {
    background-color: #b91b72;
    position: relative;
    display: flex;
    align-items: flex-end;
    gap: 20px;

    .img-left {
      display: block;
      max-width: 17.34vw;
      width: 100%;
      object-fit: contain;
    }

    .img-right {
      display: block;
      max-width: 15.36vw;
      width: 100%;
      object-fit: contain;
    }

    .container {
      padding: 95px 0 100px;
    }

    h2 {
      color: #fff;
      text-align: center;
      margin-bottom: 57px;
    }

    .grid-nutricao {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      max-width: 1120px;
      margin: 0 auto;
      gap: 25px;
      row-gap: 55px;
    }

    .box-nutricao {
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 315px;
      width: 100%;

      img {
        max-height: 61px;
        height: 100%;
        width: auto;
        object-fit: contain;
      }

      img + * {
        margin-top: 17px;
      }

      h4 {
        text-align: center;
      }
    }
  }

  .tradicao {
    padding: 90px 0 100px;
    background-color: #fff;

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h2 {
      color: var(--tertiary-color);
      text-align: center;
      max-width: 775px;
    }

    h2 + * {
      margin-top: 33px;
    }

    .image {
      max-width: 430px;

      img {
        width: 100%;
        object-fit: contain;
      }
    }

    .image + * {
      margin-top: 40px;
    }

    .bt {
      max-width: 270px;
      width: 100%;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--primary-color);
      color: #fff;
      border-radius: 5px;
      transition: 0.3;
    }

    .bt:hover {
      background-color: var(--tertiary-color);
    }
  }

  .beneficios {
    padding: 80px 0;

    .hide-mobile {
      display: block;
    }

    .show-mobile {
      display: none;
    }

    .container {
      display: flex;
      flex-wrap: wrap;
      gap: 60px;
      justify-content: center;
    }

    .box-beneficios {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      max-width: 410px;
      width: 100%;

      img {
        max-width: 60px;
        width: 100%;
        object-fit: contain;
      }

      h4 {
        color: var(--tertiary-color);
      }

      p {
        color: #fff;
      }
    }
  }

  @media only screen and (max-width: 1600px) {
    .banner-sobre {
      h4 {
        margin-bottom: 35px;
      }

      span.titulo-2 {
        margin-top: -6px;
      }

      .text {
        max-width: 530px;
      }
    }

    .sobre {
      padding: 90px 0 100px;

      .text {
        max-width: 560px;
      }

      .image {
        max-width: 585px;
      }

      h2 + * {
        margin-top: 20px;
      }

      p {
        line-height: 22.5px;
      }
    }

    .informativo-nutricao {
      .container {
        padding: 80px 0 85px;
      }

      h2 {
        margin-bottom: 40px;
      }

      .grid-nutricao {
        row-gap: 45px;
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    .banner-sobre {
      h4 {
        margin-bottom: 20px;
      }

      span.titulo-2 {
        margin-left: 32px;
      }

      span.titulo-3 {
        margin-left: 85px;
        margin-top: -7px;
      }

      .text {
        max-width: 435px;
      }
    }

    .sobre {
      padding: 75px 0 85px;

      .text {
        max-width: 470px;
      }

      .image {
        max-width: 510px;
      }

      h2 + * {
        margin-top: 15px;
      }

      p {
        line-height: 21.5px;
      }
    }

    .informativo-nutricao {
      gap: 30px;
      .container {
        padding: 60px 0 55px;
      }

      h2 {
        margin-bottom: 30px;
      }

      .grid-nutricao {
        row-gap: 35px;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .banner-sobre {
      h4 {
        margin-bottom: 15px;
      }

      span.titulo-3 {
        margin-left: 75px;
      }

      .text {
        max-width: 365px;
      }
    }

    .sobre {
      padding: 60px 0 70px;

      .text {
        max-width: 430px;
      }

      h2 + * {
        margin-top: 10px;
      }

      p {
        line-height: 22.5px;
      }
    }

    .informativo-nutricao {
      gap: 25px;

      .container {
        padding: 45px 0 55px;
      }

      .img-left {
        max-width: 15.34vw;
      }

      .img-right {
        max-width: 13.36vw;
      }

      h2 {
        margin-bottom: 25px;
      }

      .grid-nutricao {
        row-gap: 35px;
      }

      .box-nutricao {
        h4 {
          font-size: 14px;
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .banner-sobre {
      aspect-ratio: unset;
      padding: 50px 0;

      h4 {
        margin-bottom: 10px;
      }

      span.titulo-3 {
        margin-left: 70px;
      }

      .image {
        max-width: 48.08vw;
      }
    }

    .sobre {
      padding: 40px 0 50px;

      .image {
        display: none;
      }

      .text {
        max-width: 100%;
        text-align: center;
      }

      h2 + * {
        margin-top: 5px;
      }

      p {
        line-height: 22px;
      }
    }

    .informativo-nutricao {
      .container {
        padding: 35px 0 40px;
      }

      h2 {
        margin-bottom: 18px;
      }

      .hide-mobile {
        display: none;
      }

      .show-mobile {
        display: block !important;
        max-width: 600px;
      }

      .box-nutricao {
        max-width: 140px;
        margin: 0 auto;

        br {
          display: none;
        }
      }

      .swiper-button-next {
        right: 0;
        color: #fff;
      }

      .swiper-button-prev {
        left: 0;
        color: #fff;
      }

      .swiper-button-prev::after,
      .swiper-button-next::after {
        font-size: 25px;
      }
    }

    .beneficios {
      .hide-mobile {
        display: none;
      }

      .box-beneficios {
        max-width: 240px;
        margin: 0 auto;

        img {
          max-width: 45px;
        }

        h4 {
          font-size: 13px;
        }
      }

      .show-mobile {
        display: block !important;
        max-width: 660px;
        margin: 0 auto;
      }

      .swiper-button-next {
        right: 0;
        color: #fff;
      }

      .swiper-button-prev {
        left: 0;
        color: #fff;
      }

      .swiper-button-prev::after,
      .swiper-button-next::after {
        font-size: 25px;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    .informativo-nutricao {
      .show-mobile {
        max-width: 410px;
        margin: 0 auto;
      }

      h2 {
        font-size: 23px;
      }

      .box-nutricao {
        h4 {
          font-size: 13px;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .banner-sobre {
      padding: 35px 0;

      .image {
        display: none;
      }

      h4 {
        margin-bottom: 3px;
        font-size: 14px;
      }

      .text-image {
        max-width: 500px;
        margin: 0 auto;
        justify-content: center;
      }

      .text {
        max-width: fit-content;

        h1 {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
      }
    }

    .sobre {
      padding: 25px 0 35px;

      h2 + * {
        margin-top: 3px;
      }

      p {
        line-height: 21.5px;
        max-width: 90%;
      }
    }

    .informativo-nutricao {
      .container {
        padding: 25px 0;
      }

      h2 {
        font-size: 20px;
      }
    }
  }

  @media only screen and (max-width: 680px) {
    .informativo-nutricao {
      .show-mobile {
        max-width: 240px;
      }

      h2 {
        max-width: 270px;
        margin: 0 auto 15px;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .banner-sobre {
      padding: 20px 0;

      h4 {
        margin-bottom: 0;
        font-size: 12px;
      }

      span.titulo-2 {
        margin-left: 20px;
      }

      span.titulo-3 {
        margin-left: 45px;
      }
    }

    .sobre {
      padding: 20px 0 25px;

      h2 + * {
        margin-top: 2px;
      }

      h2 {
        font-size: 20px;
      }

      p {
        line-height: 20px;
        max-width: 90%;
        font-size: 12.5px;
      }
    }

    .informativo-nutricao {
      .show-mobile {
        max-width: 200px;
      }

      .container {
        padding: 20px 0;
      }

      h2 {
        font-size: 19px;
      }

      .swiper-button-prev {
        justify-content: flex-start;
      }

      .swiper-button-next {
        justify-content: flex-end;
      }

      .swiper-button-prev::after,
      .swiper-button-next::after {
        font-size: 20px;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    .sobre {
      padding: 15px 0 20px;

      h2 {
        font-size: 18px;
      }

      p {
        max-width: 95%;
      }
    }

    .informativo-nutricao {
      .show-mobile {
        max-width: 170px;
      }

      .container {
        padding: 15px 0;
      }

      h2 {
        font-size: 14px;
        margin: 0 auto 12px;
      }

      .box-nutricao {
        img {
          max-height: 50px;
        }

        img + * {
          margin-top: 11px;
        }

        h4 {
          font-size: 12px;
        }
      }
    }
  }
`;
