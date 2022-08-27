import styled from "styled-components";

export const HomePage = styled.section`
  .image-text {
    background-color: #b91b72;
    padding: 60px 0;

    .image {
      max-width: 945px;

      img {
        width: 100%;
        object-fit: contain;
      }
    }

    .text {
      max-width: 700px;

      img {
        width: 100%;
        object-fit: contain;
      }
    }
  }

  .container-text-image {
    max-width: 85%;
    gap: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto 0 0;
  }

  @media only screen and (max-width: 1600px) {
    .image-text {
      padding: 50px 0;
    }
  }

  @media only screen and (max-width: 1400px) {
    .image-text {
      padding: 40px 0;
    }
  }

  @media only screen and (max-width: 1200px) {
    .image-text {
      padding: 25px 0;
    }
  }

  @media only screen and (max-width: 1024px) {
    .image-text {
      padding: 0;

      .text {
        max-width: 470px;
        margin: 0 auto;
      }

      .image {
        display: none;
      }
    }

    .container-text-image {
      margin: 0 auto;
    }
  }
`;
