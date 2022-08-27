import styled from "styled-components";

export const Footer = styled.footer`
  background-color: var(--primary-color);
  padding: 70px 0 12px;

  .links-contato {
    margin-bottom: 0;
    gap: 0;

    a {
      max-width: unset;
    }
  }

  .top-content {
    display: flex;
    justify-content: space-between;
  }

  .top-content + * {
    margin-top: 60px;
  }

  .redes-sociais + * {
    margin-top: 25px;
  }

  .logo-pets {
    max-width: 300px;
    display: flex;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  .logo-ambar {
    max-width: 178px;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  .links {
    display: flex;
    flex-direction: column;

    h3 {
      color: var(--tertiary-color);
      margin-bottom: 10px;
    }

    a {
      color: #fff;
      transition: 0.3s;
    }

    a + * {
      margin-top: 6px;
    }

    a:hover {
      color: var(--tertiary-color);
    }
  }

  .redes-sociais {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    place-self: flex-start;

    a {
      margin-top: 0;
    }
  }

  .barra-codie {
    color: #fff;
    display: flex;
    gap: 10px;
    width: 100%;
    justify-content: center;
    align-items: center;

    img {
      max-height: 21px;
      object-fit: contain;
    }
  }

  @media only screen and (max-width: 1600px) {
    padding: 55px 0 12px;

    .top-content + * {
      margin-top: 45px;
    }

    .logo-pets {
      max-width: 230px;
    }
  }

  @media only screen and (max-width: 1400px) {
    padding: 45px 0 12px;

    .top-content + * {
      margin-top: 35px;
    }

    .logo-pets {
      max-width: 190px;
    }

    .logo-ambar {
      max-width: 130px;
    }

    .barra-codie {
      img {
        max-height: 19px;
      }
    }

    .links {
      h3 {
        margin-bottom: 8px;
      }

      a + * {
        margin-top: 5px;
      }
    }

    .redes-sociais {
      gap: 10px 16px;
    }

    .redes-sociais + * {
      margin-top: 20px;
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 35px 0 11px;

    .logo-pets {
      max-width: 160px;
    }

    .logo-ambar {
      max-width: 135px;
    }

    .barra-codie {
      img {
        max-height: 17px;
      }
    }

    .links {
      h3 {
        margin-bottom: 6px;
      }

      a + * {
        margin-top: 4px;
      }
    }

    .top-content + * {
      margin-top: 30px;
    }

    .redes-sociais {
      gap: 13px;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 25px 0 10px;

    .logo {
      gap: 15px;
    }

    .logo-pets {
      max-width: 130px;
    }

    .logo-ambar {
      max-width: 110px;
      margin: 20px auto 0;
    }

    .top-content {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }

    .hide-mobile {
      display: none;
    }

    .redes-sociais {
      grid-template-columns: repeat(5, 1fr);
      align-items: flex-end;
    }

    .links {
      text-align: center;

      a {
        justify-content: center;
      }
    }

    .top-content + * {
      margin-top: 25px;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 20px 0 10px;

    .logo-ceo {
      max-width: 75px;
      margin: 0 auto;
    }

    .logo {
      gap: 10px;
    }

    .logo-pets {
      max-width: 115px;
    }

    .logo-ambar {
      max-width: 95px;
    }

    .redes-sociais + * {
      margin-top: 12px;
    }

    .barra-codie {
      gap: 7px;

      img {
        max-height: 15px;
      }
    }
  }
`;
