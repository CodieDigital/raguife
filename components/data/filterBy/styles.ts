import styled from "styled-components";

export const Filter = styled.div`
  max-width: 315px;
  width: 100%;

  select {
    background-color: #fff;
    border-radius: 5px;
    border: unset;
    color: #585857;
    width: 100%;
    height: 48px;
    padding: 0 16px;
    background-image: url("../images/seta-select.png");
    background-repeat: no-repeat;
    background-position: 95% center;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  select::-ms-expand {
    display: none;
  }

  @media only screen and (max-width: 1400px) {
    max-width: 290px;

    select {
      height: 45px;
      padding: 0 17px;
      background-position: 90% center;
    }
  }

  @media only screen and (max-width: 1200px) {
    max-width: 275px;

    select {
      height: 40px;
      padding: 0 17px;
      background-position: 90% center;
    }
  }

  @media only screen and (max-width: 1024px) {
    max-width: 220px;

    select {
      height: 37px;
      padding: 0 15px;
    }
  }

  @media only screen and (max-width: 900px) {
    max-width: 185px;

    select {
      height: 35px;
      padding: 0 14px;
    }
  }

  @media only screen and (max-width: 768px) {
    max-width: 135px;

    select {
      height: 33px;
      padding: 0 13px;
    }
  }

  @media only screen and (max-width: 500px) {
    max-width: 115px;

    select {
      height: 30px;
      padding: 0 13px;
    }
  }

  @media only screen and (max-width:400px) {
    select {
      font-size: 11px;
      height: 26px;
      padding: 0 10px;
    }
  }
`;
