import styled from "styled-components";

export const BeneficionsInformacoes = styled.section`
  padding: 95px 0;

  .text-image {
    max-width: 85%;
    gap: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 0 auto;
  }

  .invert-row {
    margin: 0 auto 0 0;
    flex-direction: row-reverse;
  }

  .text-image + .text-image {
    margin-top: 50px;
  }

  .image {
    max-width: 945px;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  .text {
    max-width: 545px;
    width: 100%;
  }

  h3 {
    color: var(--secundary-color);
    line-height: 1.2;
    max-width: 470px;
  }

  h3 + * {
    margin-top: 25px;
  }

  p {
    color: #fff;
  }

  @media only screen and (max-width: 1600px) {
    padding: 75px 0;

    .text-image + .text-image {
      margin-top: 40px;
    }

    h3 {
      line-height: 1.4;
    }

    h3 + * {
      margin-top: 15px;
    }

    .text {
      max-width: 510px;
    }
  }

  @media only screen and (max-width: 1400px) {
    padding: 60px 0;

    .text-image + .text-image {
      margin-top: 35px;
    }

    h3 {
      line-height: 1.3;
    }

    h3 + * {
      margin-top: 8px;
    }

    .text {
      max-width: 460px;
    }

    .image {
      max-width: 600px;
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 50px 0;

    .text-image + .text-image {
      margin-top: 30px;
    }

    h3 {
      line-height: 1.2;
      font-size: 28px;
    }

    h3 + * {
      margin-top: 4px;
    }

    p {
      font-size: 14px;
    }

    .text {
      max-width: 360px;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 40px 0;

    .text-image{
      gap: 45px;
    }

    .text-image + .text-image {
      margin-top: 25px;
    }

    h3 {
      line-height: 1.1;
      font-size: 24px;
    }

    h3 + * {
      margin-top: 4px;
    }

    p {
      font-size: 13px;
    }

    .text {
      max-width: 300px;
    }
  }

  @media only screen and (max-width: 900px) {
    .text-image{
      gap: 35px;
    }

    h3 {
      line-height: 30px;
      font-size: 20px;
    }

    p {
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 30px 0;

    .text-image{
      margin: 0 auto;
      justify-content: center;
    }

    .text-image:nth-child(2n) {
      margin: 0 auto;
    }

    .text-image+.text-image {
      margin-top: 20px;
    }

    .image {
      display: none;
    }

    .text{
      text-align: center;
      max-width: 500px;
    }
  }

  @media only screen and (max-width:500px) {
    padding: 20px 0;

    p {
      font-size: 11px;
      max-width: 320px;
      margin: 10px auto 0;
    }

    h3 {
      font-size: 18px;
      line-height: 20px;
    }
  }

  @media only screen and (max-width:400px) {
    padding: 20px 0;

    .text-image+.text-image {
      margin-top: 15px;
    }

    p {
      font-size: 10px;
      margin-top: 4px;
    }

    h3 {
      font-size: 16px;
      line-height: 18px;
    }
  }
`;
