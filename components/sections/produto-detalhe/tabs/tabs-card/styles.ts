import styled from "styled-components";

export const TabContent = styled.section`
  background-color: #dfdfdf;
  padding: 60px;

  .content {
    max-width: 95%;
  }

  strong {
    display: flex;
    margin-bottom: 20px;
  }

  p {
    line-height: 28px;
    max-width: 1230px;
  }

  @media only screen and (max-width: 1600px) {
    padding: 45px 50px;

    .strong {
      margin-bottom: 10px;
    }
  }

  @media only screen and (max-width: 1600px) {
    padding: 45px 50px;

    strong {
      margin-bottom: 10px;
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 40px 45px;

    p {
      line-height: 27px;
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 35px 40px;

    p {
      line-height: 25px;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 35px 40px;

    p {
      line-height: 24px;
    }
  }

  @media only screen and (max-width: 900px) {
    padding: 25px 20px;
    .content {
      max-width: 90%;
      margin: 0 auto;
    }
  }

  @media only screen and (max-width: 500px) {
    padding: 20px 15px;

    strong {
      margin-bottom: 5px;
    }

    .content {
      max-width: 95%;
    }
  }

  @media only screen and (max-width: 420px) {
    padding: 20px 10px;
  }
`;
