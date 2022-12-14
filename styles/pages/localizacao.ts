import styled from "styled-components";

export const Localizacao = styled.section`
  .top {
    background-color: var(--tertiary-color);
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

    .box-left {
      max-width: 480px;
      width: 100%;
    }

    .absolute-image {
      position: absolute;
      bottom: 0;
      right: 15.93vw;
      max-width: 13.8vw;
      width: 100%;
      object-fit: contain;
    }
  }

  .search {
    background-color: var(--purple-color);
    padding: 45px 0;

    .container {
      display: flex;
      justify-content: center;
    }

    input {
      border: unset;
      border-radius: 10px;
      height: 72px;
      max-width: 890px;
      width: 100%;
      text-align: center;
    }
  }

  .container-localizacao {
    display: flex;
  }

  .map {
    max-width: 100%;
    width: 100%;
    height: 750px;
  }

  .results {
    max-width: 625px;
    width: 100%;
    background-color: #fff;
    max-height: 750px;
    overflow-y: auto;
    padding-left: 13.72vw;
    padding-top: 48px;
    padding: 48px  0 15px 11.72vw;

    h3 {
      color: var(--tertiary-color);
      font-size: 32px;
      margin-bottom: 24px;
    }
  }

  .results::-webkit-scrollbar {
    width: 8px;
  }

  .results::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  .results::-webkit-scrollbar-thumb {
    background-color: #201e1e;
  }

  .results::-webkit-scrollbar-thumb:hover {
    background: var(--secundary-color);
  }

  .cards-results {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .clean {
    color: var(--tertiary-color);
    margin-bottom: 8px;
    display: flex;
  }

  .clean:hover {
    color: var(--red-color);
  }

  .card-localization {
    background-color: var(--tertiary-color);
    color: #fff;
    max-width: 285px;
    width: 100%;
    border-radius: 10px;
    padding: 20px 20px 15px;
    display: flex;
    flex-direction: column;
    gap: 4px;

    .with-icon {
      fill: #fff;
      display: flex;
      align-items: center;
      gap: 7px;
      transition: 0.5s;

      span {
        display: flex;
        align-items: center;
      }

      a {
        color: #fff;
      }
    }

    .with-icon:hover {
      fill: var(--red-color);

      a {
        color: var(--red-color);
      }
    }

    .with-icon + button {
      margin-top: 10px;
    }

    button {
      height: 48px;
      max-width: 245px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: unset;
      border-radius: 5px;
      background-color: var(--red-color);
      color: #fff;
    }
  }

  @media only screen and (max-width: 1600px) {
    .search {
      padding: 40px 0;

      input {
        height: 66px;
        max-width: 860px;
      }
    }

    .results {
      max-width: 560px;
      padding-left: 12.72vw;
      max-height: 720px;
    }

    .map {
      height: 720px;
    }

    .card-localization {
      button {
        height: 46px;
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    .top {
      h2 {
        font-size: 38px;
      }
    }

    .search {
      padding: 35px 0;

      input {
        height: 61px;
        max-width: 840px;
      }
    }

    .results {
      padding-top: 35px;
      padding-left: 85px;
      max-width: 450px;

      h3 {
        font-size: 30px;
        margin-bottom: 18px;
      }
    }

    .card-localization {
      button {
        height: 44px;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .top {
      .box-left {
        max-width: 445px;
      }

      h2 {
        font-size: 34px;
      }
    }

    .search {
      padding: 31px 0;

      input {
        height: 56px;
        max-width: 760px;
      }
    }

    .results {
      padding-left: 45px;
      max-width: 400px;

      h3 {
        margin-bottom: 11px;
      }
    }

    .cards-results {
      gap: 25px;
    }

    .card-localization {
      button {
        height: 42px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .top {
      aspect-ratio: unset;
      padding: 30px 0;

      .absolute-image {
        right: 0;
      }
    }

    .search {
      padding: 28px 0;

      input {
        height: 52px;
        max-width: 700px;
      }
    }

    .results {
      padding-left: 35px;
      max-width: 365px;
      padding-top: 35px;

      h3 {
        margin-bottom: 11px;
        font-size: 28px;
      }
    }

    .card-localization {
      button {
        height: 40px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .top {
      padding: 22px 0;

      .box-left {
        max-width: 315px;
      }

      h2 {
        font-size: 22px;
      }

      p {
        font-size: 14px;
      }
    }

    .search {
      padding: 25px 0;

      input {
        height: 47px;
        max-width: 500px;
        border-radius: 5px;
      }
    }

    .container-localizacao {
      flex-direction: column;
    }

    .results {
      max-width: 100%;
      padding: 20px 15px 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      max-height: 400px;
    }

    .map {
      height: 620px;
    }
  }

  @media only screen and (max-width:500px) {
    .search {
      padding: 22px 0;

      input {
        height: 44px;
        font-size: 15px;
      }
    }

    .results {
      max-height: 365px;
    }

    .map {
      height: 520px;
    }
  }

  @media only screen and (max-width:400px) {
    .search {
      padding: 19px 0;

      input {
        height: 41px;
        font-size: 14px;
      }
    }
  }
`;
