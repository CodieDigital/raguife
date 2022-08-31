import styled from "styled-components";

export const ShopDetail = styled.main`
  padding: 60px 0 0;

  .box-product {
    position: relative;
    padding-bottom: 40px;

    .container {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 3vw;
    }

    .box-image {
      max-width: 630px;
      width: 100%;
      display: flex;
      position: relative;
      justify-content: flex-end;
      padding-right: 8.75vw;
    }

    .icon-selo {
      width: 55%;
      position: absolute;
      left: -29%;
      top: 50%;
      transform: translateY(-50%);
      z-index: 5;
    }

    .image {
      aspect-ratio: 344/480;
      max-width: 380px;
      width: 100%;
      position: relative;

      img {
        object-fit: contain;
      }
    }

    .text {
      max-width: 610px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      padding-top: 7%;

      .transform {
        text-transform: lowercase;
      }

      .transform::first-letter {
        text-transform: uppercase;
      }

      .top {
        h2 {
          min-height: 90px;
          line-height: 1.2;
          margin-bottom: 15px;
        }
      }

      .bottom {
        display: flex;
        flex-direction: column;
        gap: 35px;
      }
    }

    .benefits {
      color: #fff;
      
      li+li {
        margin-top: 5px;
      }
    }

    .box {
      display: flex;
      gap: 20px;
      margin-top: 7px;
    }

    .quantity {
      color: #fff;
    }

    .box-quantity {
      max-width: 95px;
      width: 100%;
      border: 1px solid var(--tertiary-color);
      border-radius: 10px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    h2 {
      color: var(--secundary-color);
    }
  }

  .bg-green {
    background-color: var(--tertiary-color);
    height: 68%;
    width: calc(100% + 50vw);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -50vw;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  @media only screen and (max-width: 1600px) {
    .box-product {
      padding-bottom: 35px;

      .box-image {
        max-width: 590px;
      }

      .text {
        max-width: 590px;
        padding-top: 5.5%;

        h2 {
          font-size: 43px;
        }
      }

      .image {
        max-width: 320px;
      }

      .box-quantity {
        max-width: 90px;
        height: 46px;
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    padding-top: 55px;

    .box-product {
      padding-bottom: 30px;

      .box-image {
        max-width: 510px;
        padding-right: 7.75vw;
      }

      .text {
        max-width: 470px;
        padding-top: 5.5%;

        .top {
          h2 {
            font-size: 40px;
            min-height: 75px;
          }
        }

        .bottom {
          gap: 30px;
        }
      }

      .image {
        max-width: 290px;
      }

      .box-quantity {
        max-width: 85px;
        height: 44px;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    padding-top: 50px;

    .box-product {
      padding-bottom: 25px;

      .box-image {
        max-width: 455px;
        padding-right: 7vw;
      }

      .text {
        max-width: 435px;

        .top {
          h2 {
            font-size: 35px;
            min-height: 60px;
          }
        }

        .bottom {
          gap: 25px;
        }
      }

      .image {
        max-width: 255px;
      }

      .box-quantity {
        max-width: 80px;
        height: 42px;
        border-radius: 8px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    padding-top: 45px;

    .box-product {
      padding-bottom: 20px;

      .container {
        gap: 50px;
      }

      .box-image {
        max-width: 455px;
        padding-right: 7vw;
      }

      .text {
        max-width: 435px;
        padding-top: 6%;

        .top {
          h2 {
            font-size: 32px;
            min-height: auto;
          }
        }

        .bottom {
          gap: 25px;
        }
      }

      .image {
        max-width: 225px;
      }

      .box-quantity {
        max-width: 75px;
        height: 40px;
        border-radius: 7px;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    padding-top: 40px;

    .box-product {
      .image {
        max-width: 200px;
      }

      .text {
        .top {
          h2 {
            font-size: 30px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding-top: 35px;

    .box-product {
      padding-bottom: 15px;

      .show-mobile {
        margin-bottom: 20px;
      }

      .breadcrumb {
        max-width: 100%;
        margin-left: 30px;
      }

      .container {
        flex-direction: column;
        align-items: center;
        gap: 30px;
      }

      .box-image {
        justify-content: center;
      }

      .image {
        max-width: 265px;
      }

      .text {
        padding-top: 0;

        .top {
          h2 {
            font-size: 37px;
            margin-bottom: 20px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 600px) {
    padding-top: 30px;

    .box-product {
      .image {
        max-width: 240px;
      }

      .text {
        .top {
          h2 {
            font-size: 34px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 500px) {
    padding-top: 20px;

    .box-product {
      .show-mobile {
        margin-bottom: 10px;
      }

      .breadcrumb {
        margin-left: 10px;
      }

      .box-image {
        max-width: 100%;
      }

      .image {
        max-width: 49vw;
      }

      .container {
        gap: 20px;
      }

      .text {
        .top {
          h2 {
            margin-bottom: 15px;
            font-size: 28px;
          }
        }

        .benefits {
          li {
            font-size: 14.5px;
          }
        }

        .bottom {
          gap: 15px;
        }

        .box-quantity {
          max-width: 65px;
          height: 37px;
          border-radius: 5px;
          font-size: 12.5px;
        }

        .box {
          gap: 15px;
        }
      }
    }
  }

  @media only screen and (max-width: 400px) {
    .box-product {
      .text {
        .top {
          h2 {
            font-size: 22.5px;
            margin-bottom: 8px;
          }
        }

        .bottom {
          gap: 10px;
        }

        .benefits {
          li {
            font-size: 13.5px;
          }

          li + li {
            margin-top: 5px;
          }
        }

        .quantity {
          span {
            font-size: 12px;
          }
        }

        .box {
          gap: 10px;
        }

        .box-quantity {
          max-width: 60px;
          height: 35px;
          font-size: 12px;
        }
      }
    }
  }
`;
