import styled from "styled-components";

interface ButtonProps {
  $loading?: boolean;
}

export const Button = styled.div<ButtonProps>`
  a,
  button {
    width: 100%;
    height: 48px;
    border-radius: 5px;
    cursor: ${(props) => (props.$loading ? "not-allowed" : "pointer")};
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border: 0;
    opacity: ${(props) => props.$loading && "0.8"};
    transition: all 0.4s ease-in-out;
    animation: ${(props) =>
      props.$loading ? "loading 2s ease-in-out infinite" : "unset"};
    background: ${(props) => props.$loading && "var(--primary-color)"};
  }

  a:hover,
  button:hover {
    transition: all 0.4s ease-in-out;
  }

  @keyframes loading {
    0% {
      background-size: 300% 100%;
    }

    50% {
      background-position: 100% 0;
    }

    100% {
      background-size: 300% 100%;
    }
  }

  button:disabled {
    cursor: not-allowed;
    background: "#6749a3";
    opacity: 0.8;
  }

  @media only screen and (max-width: 1600px) {
    a,
    button {
      height: 45px;
    }
  }

  @media only screen and (max-width: 1400px) {
    a,
    button {
      height: 42px;
    }
  }

  @media only screen and (max-width: 1200px) {
    a,
    button {
      height: 39px;
    }
  }

  @media only screen and (max-width: 1024px) {
    a,
    button {
      height: 36px;
    }
  }

  @media only screen and (max-width: 768px) {
    a,
    button {
      height: 34px;
    }
  }

  @media only screen and (max-width: 600px) {
    a,
    button {
      height: 33px;
    }
  }

  @media only screen and (max-width: 370px) {
    button {
      height: 32px;
      font-size: 13px;
    }
  }

  @media only screen and (max-width: 350px) {
    button {
      height: 31px;
      font-size: 12px;
    }
  }
`;
