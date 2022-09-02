import styled from "styled-components";

export const ParalaxBanner = styled.section`
  background-image: url("/images/bg-paralax-home.webp");
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  position: relative;
  aspect-ratio: 1920/600;

  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    aspect-ratio: inherit;
    height: 100%;
    width: 100%;
    background-color: #1c1c1c;
    opacity: 0.75;
  }

  .container {
    position: relative;
    z-index: 5;
  }

  .title {
    color: var(--secundary-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;

    h2 {
      line-height: 75px;
    }
  }

  .icon {
    max-width: 80px;
    height: auto;
    width: 100%;
    object-fit: contain;
  }

  p {
    color: #fff;
    max-width: 660px;
    text-align: center;
    margin: 0 auto;
  }

  a {
    background-color: var(--tertiary-color);
    max-width: 257px;
    margin: 0 auto;
  }

  a:hover {
    background-color: var(--primary-color);
  }

  p + * {
    margin-top: 30px;
  }

  @media only screen and (max-width: 1600px) {
    .title {
      .icon {
        max-width: 70px;
      }

      h2 {
        line-height: 90px;
      }
    }

    p + * {
      margin-top: 25px;
    }

    a {
      max-width: 250px;
    }
  }

  @media only screen and (max-width: 1400px) {
    .title {
      margin-bottom: 5px;

      .icon {
        max-width: 50px;
      }

      h2 {
        line-height: 60px;
      }
    }

    p + * {
      margin-top: 20px;
    }
  }

  @media only screen and (max-width: 1200px) {
    .title {
      margin-bottom: 5px;

      .icon {
        max-width: 50px;
      }

      h2 {
        line-height: 50px;
      }
    }

    p + * {
      margin-top: 20px;
    }

    a {
      max-width: 220px;
      height: 35px;
    }
  }

  @media only screen and (max-width: 1024px) {
    aspect-ratio: unset;
    height: 350px;

    .title {
      gap: 5px;

      .icon {
        max-width: 45px;
      }

      h2 {
        line-height: 40px;
      }
    }

    p {
      max-width: 630px;
    }

    p+*{
      margin-top: 15px;
    }

    a {
      max-width: 200px;
      height: 33px;
      font-size: 12.5px;
    }
  }

  @media only screen and (max-width: 900px) {
    aspect-ratio: unset;
    height: 320px;

    .title {

      h2 {
        line-height: 35px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    aspect-ratio: unset;
    height: 300px;

    .title {

      .icon {
        max-width: 40px;
      }

      h2 {
        line-height: 35px;
      }
    }

    p {
      max-width: 550px;
      font-size: 13px;
    }
  }

  @media only screen and (max-width: 500px) {
    aspect-ratio: unset;
    height: 270px;

    .title {

      .icon {
        max-width: 35px;
      }

      h2 {
        line-height: 29px;
        font-size: 23px;
      }
    }

    p {
      font-size: 11px;
    }

    a {
      font-size: 11.5px;
      height: 30px;
      max-width: 185px;
    }
  }

  @media only screen and (max-width:400px) {
    .title {
      gap: 2px;
      .icon {
        max-width: 30px;
      }

      h2 {
        font-size: 16px;
      }
    }

    p{
      font-size: 10px;
    }

    p+*{
      margin-top: 12px;
    }

    a {
      font-size: 10px;
      height: 25px;
      max-width: 150px;
    }
  }
`;
