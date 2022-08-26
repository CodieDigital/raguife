import styled from "styled-components";

export const Input = styled.div`
  input {
    height: 50px;
    padding: 16px;
  }

  textarea {
    height: 137px;
    resize: unset;
    padding: 16px 0 0 16px;
  }

  @media only screen and (max-width: 1600px) {
    input {
      height: 48px;
    }

    textarea {
      height: 130px;
    }
  }

  @media only screen and (max-width: 1400px) {
    input {
      height: 46px;
    }

    textarea {
      height: 125px;
    }
  }

  @media only screen and (max-width: 1200px) {
    input {
      height: 44px;
    }

    textarea {
      height: 115px;
    }
  }

  @media only screen and (max-width: 1024px) {
    input {
      height: 42px;
    }

    textarea {
      height: 110px;
    }
  }

  @media only screen and (max-width: 768px) {
    input {
      height: 40px;
    }

    textarea {
      height: 105px;
    }
  }

  @media only screen and (max-width: 500px) {
    input {
      height: 37px;
    }

    textarea {
      height: 95px;
    }
  }
`;
