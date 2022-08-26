import styled from "styled-components";

export const ProductInformation = styled.section`
  padding: 50px 0 80px;

  .container {
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .show-mobile-768 {
    display: none;
  }

  h2 {
    line-height: 112px;
    text-align: center;
    color: var(--secundary-color);
  }

  p {
    color: #fff;
    max-width: 660px;
    margin: 0 auto;
    text-align: center;
  }

  .grid-categorias {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin-top: 35px;
  }

  .image-dog {
    max-width: 13.7vw;
    width: 100%;
    object-fit: contain;
    position: relative;
    z-index: 5;
    height: 100%;
  }

  .image-cat {
    max-width: 10.16vw;
    width: 100%;
    object-fit: contain;
    position: relative;
    z-index: 5;
    height: 100%;
  }

  .text {
    .top {
      display: flex;
      align-items: center;
      gap: 20px;
      font-size: 32px;
      color: #fff;
    }
  }

  .text.dog {
    background-color: var(--blue-color);
    margin-left: -33px;
  }

  .text.cat {
    background-color: var(--red-color);
    margin-right: -33px;
  }

  .box-categorias {
    display: flex;
    align-items: flex-end;

    .text {
      border-radius: 10px;
      padding: 40px;
      margin-bottom: 25px;

      .icon-box {
        max-height: 60px;
        width: auto;
        object-fit: cover;
      }

      .top+*,p + * {
        margin-top: 18px;
      }

      p {
        text-align: left;
        max-width: 350px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }

    a {
      background-color: var(--primary-color);
      max-width: 257px;
      font-size: 16px;
      font-weight: 500;
    }

    a:hover {
      background-color: var(--secundary-color);
    }
  }

  @media only screen and (max-width: 1600px) {
    padding: 40px 0 65px;

    h2 {
      line-height: 70px;
    }
  }

  @media only screen and (max-width: 1400px) {
    padding: 35px 0 75px;

    h2 {
      line-height: 60px;
    }

    .box-categorias {
      .text {
        padding: 30px 30px 30px 40px;
      }

      a {
        max-width: 235px;
        font-size: 15.5px;
      }
    }

    .grid-categorias {
      gap: 25px;
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 35px 0 75px;

    h2 {
      line-height: 50px;
    }

    .box-categorias {
      .text {
        padding: 30px 30px 30px 40px;
      }

      a {
        max-width: 220px;
        font-size: 15px;
      }
    }

    .grid-categorias {
      margin-top: 30px;
      gap: 20px;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 25px 0 55px;

    h2 {
      line-height: 30px;
      margin-bottom: 10px;
    }

    .grid-categorias {
      margin-top: 25px;
      gap: 15px;
    }

    .text.dog {
      margin-left: -20px;
    }

    .text.cat {
      margin-right: -20px;
    }

    .box-categorias {
      .text {
        padding: 25px 25px 25px 30px;

        p {
          font-size: 13.5px;
        }

        .icon-box {
          max-height: 45px;
        }
      }

      a {
        max-width: 200px;
        font-size: 13.5px;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    padding: 20px 0 35px;

    p {
      font-size: 13px;
    }

    .grid-categorias {
      margin-top: 20px;
      gap: 10px;
    }

    .box-categorias {
      .text {
        .icon-box {
          max-width: 40px;
        }

        p {
          -webkit-line-clamp: 4;
          min-height: 81px;
          font-size: 13px;
        }

        .icon-box + *,
        .text p + * {
          margin-top: 14px;
        }
      }

      a {
        font-size: 12.5px;
        max-width: 185px;
        height: 32px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 15px 0 20px;

    .grid-categorias {
      grid-template-columns: repeat(1, 1fr);
      gap: 10px;
    }

    .container {
      max-width: 620px;
    }

    .text.dog {
      margin-left: 0;
    }

    .text.cat {
      margin-right: 0;
    }

    .hide-mobile-768 {
      display: none;
    }

    .show-mobile-768 {
      display: block;
    }

    .box-categorias {
      justify-content: center;

      .icon-box {
        display: flex;
        margin: 0 auto;
      }

      .text {
        margin-bottom: 15px;
        position: relative;

        p {
          text-align: center;
          min-height: 40px;
        }
      }

      a {
        max-width: 170px;
        height: 28px;
        font-size: 11.5px;
        margin: 0 auto;
      }
    }

    .image-cat,
    .image-dog {
      position: absolute;
      bottom: -20px;
      right: -25px;
      max-height: 90px;
      max-width: 55px;
      height: auto;
    }
  }

  @media only screen and (max-width: 650px) {
    .container {
      max-width: 90%;
    }
  }

  @media only screen and (max-width: 500px) {
    padding: 11px 0 15px;

    .container {
      max-width: 100%;
    }

    h2 {
      font-size: 22px;
      margin-bottom: 5px;
    }

    p {
      font-size: 12px;
      max-width: 365px;
    }

    .grid-categorias {
      margin-top: 15px;
      max-width: 300px;
      margin: 15px auto 0;
    }

    .box-categorias {
      .icon-box {
        max-width: 35px;
      }

      .text {
        padding: 15px 20px;

        .icon-box + *,
        .text p + * {
          margin-top: 10px;
        }

        p {
          font-size: 12px;
        }
      }

      a {
        font-size: 10px;
        max-width: 155px;
        height: 27px;
      }
    }

    .image-cat,
    .image-dog {
      max-width: 45px;
      max-height: 70px;
    }
  }

  @media only screen and (max-width: 400px) {
    h2 {
      font-size: 19px;
      margin-bottom: 0;
    }

    p {
      font-size: 10px;
      max-width: 270px;
    }

    .grid-categorias {
      max-width: 250px;
    }

    .box-categorias {
      .text {
        .icon-box {
          max-width: 30px;
        }

        p {
          font-size: 10.5px;
        }

        .icon-box + *,
        .text p + * {
          margin-top: 7px;
        }
      }

      a {
        height: 25px;
      }
    }

    .image-cat,
    .image-dog {
      max-width: 33px;
      bottom: -10px;
      right: -15px;
      max-height: 51px;
    }
  }
`;
