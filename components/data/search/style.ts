import styled from "styled-components";
import { Form } from "@unform/web";

export const Search = styled(Form)`
  width: 100%;
  display: flex;
  align-items: center;
  height: 50px;
  justify-content: flex-start;
  padding: 0 0 0 20px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.1);

  > div {
    width: calc(100% - 25px);
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: 0;
    width: 20px;
    margin-right: 5px;
    padding: 0;
    display: flex;

    svg {
      max-width: 100%;
      opacity: 1;
      fill: #fff;
    }
  }

  button:disabled {
    cursor: not-allowed;

    svg {
      opacity: 0.3;
    }
  }

  button:hover:not(:disabled) {
    svg {
      fill: var(--yellow);
    }
  }

  input {
    width: 100%;
    height: 30px;
    background-color: transparent;
    padding: 0 5px;
    color: #fff;
    border: 0;
  }

  input::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  @media only screen and (max-width: 1600px) {
    height: 47px;

    > div {
      width: calc(100% - 24px);
    }

    button {
      width: 19px;
    }
  }

  @media only screen and (max-width: 1400px) {
    height: 44px;

    > div {
      width: calc(100% - 23px);
    }

    button {
      width: 18px;
    }
  }

  @media only screen and (max-width: 1200px) {
    height: 42px;

    > div {
      width: calc(100% - 22px);
    }

    button {
      width: 17px;
    }
  }

  @media only screen and (max-width: 1024px) {
    height: 40px;

    > div {
      width: calc(100% - 21px);
    }

    button {
      width: 16px;
    }
  }

  @media only screen and (max-width: 768px) {
    height: 38px;
    padding: 0 0 0 10px;
    border-radius: 3px;

    button {
      width: 15px;
    }
  }
`;
