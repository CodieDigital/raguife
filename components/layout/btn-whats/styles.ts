import styled from "styled-components";

export const ButtonWhatsComponent = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 99;

  a {
    max-width: 75px;
    height: 75px;
    display: flex;
    fill: #fff;
    transition: 0.2s;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  a:hover {
    fill: #d9edcb;
  }

  @media only screen and (max-width: 1600px) {
    right: 19px;
    bottom: 19px;

    a {
      max-width: 70px;
      height: 70px;
    }
  }

  @media only screen and (max-width: 1400px) {
    right: 18px;
    bottom: 18px;

    a {
      max-width: 65px;
      height: 65px;
    }
  }

  @media only screen and (max-width: 1200px) {
    right: 17px;
    bottom: 17px;

    a {
      max-width: 60px;
      height: 60px;
    }
  }

  @media only screen and (max-width: 1024px) {
    right: 16px;
    bottom: 16px;

    a {
      max-width: 55px;
      height: 55px;
    }
  }

  @media only screen and (max-width: 768px) {
    right: 14px;
    bottom: 25px;

    a {
      max-width: 50px;
      height: 50px;
    }
  }

  @media only screen and (max-width: 500px) {
    a {
      max-width: 45px;
      height: 45px;
    }
  }
`;
