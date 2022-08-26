import styled from "styled-components";

export const Shop = styled.main`
  padding-bottom: 120px;

  .top {
    background-color: var(--secundary-color);
    aspect-ratio: 1920/300;
    display: flex;
    align-items: center;
    position: relative;

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;
    }

    .absolute-image {
      position: absolute;
      bottom: 0;
      right: 26.93vw;
      max-width: 13.8vw;
      width: 100%;
      object-fit: contain;
    }

    .select-categories {
      position: relative;
      z-index: 5;
      background-image: url("/images/seta-select.png");
      background-position: 94%;
    }
  }

  .list {
    padding-top: 80px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 60px 130px;
  }

  .card-list {
    .image {
      max-width: 270px;
    }

    h3 {
      color: #585857;
    }
  }

  @media only screen and (max-width: 1600px) {
    padding-bottom: 100px;

    .list {
      padding-top: 70px;
      gap: 55px 110px;
    }

    .card-list {
      .image {
        max-width: 255px;
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    padding-bottom: 80px;

    .list {
      padding-top: 60px;
      gap: 50px 90px;
    }

    .card-list {
      .image {
        max-width: 230px;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    padding-bottom: 60px;

    .list {
      padding-top: 50px;
      gap: 45px 75px;
    }

    .card-list {
      .image {
        max-width: 200px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    padding-bottom: 45px;

    .top {
      .absolute-image {
        right: 0;
      }
    }

    .list {
      padding-top: 40px;
      gap: 40px 60px;
    }

    .card-list {
      .image {
        max-width: 185px;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    .list {
      gap: 30px 50px;
    }

    .card-list {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      .image {
        max-width: 170px;
        width: 100%;
      }

      .text {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding-bottom: 30px;

    .top {
      aspect-ratio: unset;
      padding: 30px 0;

      h2 {
        font-size: 22px;
      }
    }

    .list {
      padding-top: 40px;
      gap: 25px 5px;
      grid-template-columns: repeat(2, 1fr);
      max-width: 530px;
      margin: 0 auto;
    }

    .card-list {
      max-width: 180px;
      margin: 0 auto;

      .image {
        max-width: 165px;
      }

      .image + * {
        margin-top: 18px;
      }

      h3 {
        font-size: 17px;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    padding-bottom: 23px;

    .top {
      padding: 23px 0;

      .container {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
      }

      h2 {
        font-size: 22px;
      }

      .absolute-image {
        right: 0;
        max-width: 115px;
      }

      .select-categories {
        background-position: 91%;
      }
    }

    .container {
      max-width: 100%;
    }

    .list {
      padding-top: 35px;
      gap: 20px 20px;
    }

    .card-list {
      .image {
        max-width: 145px;
      }

      h3 {
        font-size: 15px;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    .top {
      padding: 23px 0;

      .container {
        gap: 8px;
      }

      h2 {
        font-size: 19px;
      }

      .absolute-image {
        right: 0;
        max-width: 95px;
      }

      .select-categories {
        background-position: 91%;
      }
    }

    .list {
      gap: 15px 30px;
      max-width: 315px;
    }

    .card-list {
      .image {
        max-width: 120px;
      }

      .image+*{
        margin-top: 13px;
      }

      h3 {
        font-size: 12px;
      }

      span {
        font-size: 10px;
      }
    }
  }
`;
