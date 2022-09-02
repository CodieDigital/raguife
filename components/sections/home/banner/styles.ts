import styled from "styled-components";

interface BannerStyleProps {
  heightHeader?: string;
}

export const Banner = styled.section<BannerStyleProps>`
  width: 100%;
  position: relative;
  height: ${(props) => props.heightHeader};
  min-height: 400px;

  .hide-mobile {
    display: block;
  }

  .show-mobile {
    display: none;
  }

  .swiper-banner {
    position: absolute;
    top: 0;
    left: 0;
    height: auto;
    object-fit: cover;
    height: inherit;
    width: 100%;
    height: 100%;
    min-height: inherit;
    object-position: top;

    .absolute-image {
      min-height: inherit;
      height: 100vh;
      object-fit: inherit;
      width: 100%;

      img {
        object-position: center -200px !important;
      }
    }
  }

  .container {
    position: relative;
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .text {
    max-width: 30.16vw;
    width: 100%;
  }

  .text-banner {
    max-width: 30.16vw;
    width: 100%;
    object-fit: contain;
  }

  .bt-banner {
    background-color: var(--primary-color);
    max-width: 210px;
    margin: 68px auto 0;
    font-size: 16px;
  }

  .bt-banner:hover {
    background-color: var(--secundary-color);
  }

  .scroll {
    display: inline-flex;
    gap: 8px;
    align-items: center;
    line-height: 24px;
    animation: scroll 3s infinite linear forwards;
    fill: #fff;
    color: #fff;
    margin-bottom: 35px;
    cursor: pointer;
  }

  .scroll:hover {
    color: var(--secundary-color);
    fill: var(--secundary-color);
  }

  @keyframes scroll {
    0% {
      transform: translateY(0%);
    }

    50% {
      transform: translateY(50%);
    }

    100% {
      transform: translateY(0%);
    }
  }

  @media only screen and (max-width: 1600px) {
    .bt-banner {
      max-width: 200px;
      margin: 45px auto 0;
      font-size: 15.5px;
    }

    .scroll {
      gap: 7px;
      margin-bottom: 30px;
    }
  }

  @media only screen and (max-width: 1400px) {
    .bt-banner {
      max-width: 185px;
      margin: 37px auto 0;
      font-size: 15px;
    }

    .scroll {
      gap: 6px;
      line-height: 22px;
      margin-bottom: 27px;
    }

    .swiper-banner {
      .absolute-image {
        img {
          object-position: center -100px !important;
        }
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .bt-banner {
      max-width: 170px;
      margin: 30px auto 0;
      font-size: 14.5px;
    }

    .scroll {
      gap: 5px;
      line-height: 20px;
      margin-bottom: 24px;
    }

    .swiper-slide {
      .absolute-image {
        span {
          img {
            object-position: center -85px !important;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    height: 571px;

    .bt-banner {
      margin: 26px auto 0;
      font-size: 14px;
    }

    .hide-mobile {
      display: none;
    }

    .show-mobile {
      display: block !important;
    }

    .swiper-banner {
      .absolute-image {

        span {
          img {
            object-fit: cover !important;
            object-position: center center !important;
          }
        }
      }
    }

    .scroll {
      line-height: 17px;
      margin-bottom: 21px;

      svg {
        max-width: 13px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    height: 600px;

    .text {
      max-width: 230px;
    }

    .swiper-banner {
      .absolute-image {
        height: 600px;
      }
    }

    .text-banner {
      max-width: unset;
    }

    .bt-banner {
      max-width: 150px;
      height: 33px;
      margin: 22px auto 0;
      font-size: 13px;
    }

    .scroll {
      line-height: 14px;
      margin-bottom: 20px;

      svg {
        max-width: 12px;
      }
    }
  }

  @media only screen and (max-width: 670px) {
    .container {
      max-width: 530px;
    }

    .text {
      max-width: 185px;
    }

    .bt-banner {
      max-width: 140px;
      height: 28px;
      margin: 17px auto 0;
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 500px) {
    height: 405px;

    .text {
      max-width: 160px;
    }

    .swiper-banner {
      .absolute-image {
        height: 405px;
      }
    }

    .bt-banner {
      max-width: 125px;
      height: 24px;
      margin: 13px auto 0;
      font-size: 11px;
    }

    .scroll {
      font-size: 13px;

      svg {
        height: 15px;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    .text {
      max-width: 130px;
    }

    .bt-banner {
      max-width: 104px;
      height: 18px;
      margin: 9px auto 0;
      font-size: 9px;
    }

    .scroll {
      font-size: 10px;

      svg {
        height: 9px;
      }
    }
  }
`;
