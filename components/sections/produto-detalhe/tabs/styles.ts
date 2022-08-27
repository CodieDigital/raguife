import styled from "styled-components";

export const TabsSection = styled.section`
  padding-top: 40px;
  padding-bottom: 5.21vw;

  .tabs-actions {
    display: flex;
    width: 100%;
    gap: 30px;
  }

  .tab-element {
    background-color: #dfdfdf;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    overflow: hidden;
  }

  button {
    background-color: transparent;
    border: 1px solid var(--secundary-color);
    border-bottom: unset;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 58px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 25px;
    color: var(--tertiary-color);
    transition: 0.4s;
  }

  button:hover {
    background-color: var(--tertiary-color) !important;
    color: #fff;
  }

  .button-tab.active {
    background-color: var(--tertiary-color);
    color: #fff;
  }

  @media only screen and (max-width: 1600px) {
    button {
      height: 52px;
    }
  }

  @media only screen and (max-width: 1400px) {
    .tabs-actions {
      gap: 25px;
    }

    button {
      height: 48px;
    }
  }

  @media only screen and (max-width: 1200px) {
    .tabs-actions {
      gap: 20px;
    }

    button {
      height: 42px;

      span {
        font-size: 13px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .tabs-actions {
      flex-direction: column;
    }

    button {
      width: 100%;
      border: 1px solid var(--secundary-color);
      border-radius: 10px;
    }

    .button-tab.active {
      border-radius: unset;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }

    .tab-element {
      border-radius: 0;
    }
  }

  @media only screen and (max-width: 900px) {
    .tabs-actions {
      max-width: 530px;
      margin: 0 auto;
    }
  }

  @media only screen and (max-width: 500px) {
    button {
      border-radius: unset !important;
    }
  }
`;
