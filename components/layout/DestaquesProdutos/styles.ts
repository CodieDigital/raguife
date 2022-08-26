import styled from "styled-components";

export const DestaquesProdutos = styled.section`
  background-color: var(--purple-color);
  padding: 100px 0 120px;

  .container {
    max-width: 1430px;
  }

  .swiper-button-next {
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
  }

  h2 {
    text-align: center;
    color: #fff;
    margin-bottom: 40px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: #fff;

    &::after {
      font-size: 25px;
    }
  }

  .swiper + * {
    margin-top: 45px;
  }

  .actions {
    display: flex;
    gap: 30px;
    width: 100%;
    justify-content: center;

    a {
      background-color: var(--red-color);
      width: 324px;
    }

    a:hover {
      background-color: var(--hover-secundary-color);
    }
  }

  @media only screen and (max-width: 1600px) {
    padding: 80px 0 100px;

    .container {
      max-width: 1320px;
    }

    h2 {
      margin-bottom: 35px;
    }
  }

  @media only screen and (max-width: 1400px) {
    padding: 60px 0 80px;

    .container {
      max-width: 1120px;
    }

    h2 {
      margin-bottom: 28px;
    }

    .actions {
      gap: 25px;
      margin-top: 40px;

      a {
        max-width: 300px;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 50px 0 65px;

    .container {
      max-width: 940px;
    }

    h2 {
      margin-bottom: 20px;
    }

    .actions {
      gap: 20px;
      margin-top: 35px;

      a {
        max-width: 280px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 40px 0 50px;

    .container {
      max-width: 880px;
    }

    h2 {
      margin-bottom: 15px;
    }

    .actions {
      gap: 15px;
      margin-top: 30px;

      a {
        max-width: 270px;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    padding: 30px 0 40px;

    .swiper {
      max-width: 700px;
    }

    .actions {
      margin-top: 25px;

      a {
        max-width: 240px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .actions {
      flex-direction: column;
      align-items: center;
    }

    .swiper-button-next {
      right: 20px;
    }

    .swiper-button-prev {
      left: 20px;
    }
  }

  @media only screen and (max-width: 500px) {
    padding: 20px 0 30px;

    .actions {
      gap: 10px;
      margin-top: 18px;

      a {
        max-width: 215px;
      }
    }

    h2 {
      margin-bottom: 11px;
    }

    .swiper-button-prev::after,
    .swiper-button-next::after {
      font-size: 20px;
    }
  }
`;
