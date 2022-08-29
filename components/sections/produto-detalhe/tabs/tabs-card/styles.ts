import styled from "styled-components";

export const TabContent = styled.section`
  background-color: #004d56;
  padding: 60px;

  .content {
    max-width: 95%;
    margin: 0 auto;
  }

  .table1 {
    table {
      max-width: 100%;
      width: 100%;
      border: 1px solid var(--tertiary-color);
      flex-direction: column;
      display: flex;
      justify-content: space-between;
      border-radius: 10px;

      tr {
        display: flex;
      }

      td:first-child {
        max-width: 363px;
      }

      strong {
        margin-bottom: 0;
      }

      tr:nth-child(even) {
        background-color: #005b65;
      }

      td {
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        width: 100%;
        padding: 20px 10px;
      }

      td + td {
        border-left: 1px solid var(--tertiary-color);
      }

      tr + tr {
        border-top: 1px solid var(--tertiary-color);
      }
    }
  }

  .table2 {
    table {
      border: 1px solid var(--tertiary-color);
      border-radius: 10px;
      max-width: 100%;
      width: 100%;

      tr:nth-child(even) {
        background-color: #005b65;
      }

      td {
        padding: 20px 10px;
      }

      strong {
        margin-bottom: 0;
        justify-content: center;
      }

      td + td {
        border-left: 1px solid var(--tertiary-color);
      }
    }
  }

  strong {
    display: flex;
    margin-bottom: 20px;
    gap: 5px;
  }

  p {
    color: #fff;
    line-height: 28px;
    max-width: 1230px;
  }

  .definitions-item {
    display: flex;
    gap: 4px;
  }

  @media only screen and (max-width: 1600px) {
    padding: 45px 50px;

    .strong {
      margin-bottom: 10px;
    }
  }

  @media only screen and (max-width: 1400px) {
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

    p {
      line-height: 22px;
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

    p {
      line-height: 21px;
    }
  }

  @media only screen and (max-width: 420px) {
    padding: 20px 10px;

    p {
      line-height: 20px;
    }
  }
`;
