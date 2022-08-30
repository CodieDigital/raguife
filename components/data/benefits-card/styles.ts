import styled from "styled-components";

export const BenefitsCard = styled.div`
  max-width: 300px;
  margin: 0 auto;
  width: 100%;
  text-align: center;

  .image {
    max-width: 175px;
    width: 100%;
    aspect-ratio: 175/175;
    margin: 0 auto;
  }

  .image + * {
    margin-top: 10px;
  }

  h3 {
    color: var(--tertiary-color);
    max-width: 95%;
    min-height: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: 0 auto;
  }

  p {
    color: #fff;
  }

  @media only screen and (max-width:1600px) {
    .image {
      max-width: 160px;
    }

    h3 {
      font-size: 17px;
      max-width: 85%;
      min-height: 55px;
    }

    p {
      max-width: 85%;
      margin: 0 auto;
    }
  }

  @media only screen and (max-width:1400px) {
    .image {
      max-width: 155px;
    }

    h3 {
      font-size: 16.5px;
    }
  }

  @media only screen and (max-width:1200px) {
    .image {
      max-width: 150px;
    }

    h3 {
      font-size: 16px;
    }
  }

  @media only screen and (max-width:768px) {
    p {
      font-size: 12.5px;
    }

    .image {
      max-width: 135px;
    }
  }

  @media only screen and (max-width:500px) {
    h3{
      font-size: 15px;
      min-height: auto;
      margin-bottom: 4px;
    }
  }
`;
