import styled from "styled-components";

export const PaginationStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  .filson {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    background-color: transparent;
    color: var(--secundary-color);
    border: 1px solid var(--secundary-color);
    margin: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .previus {
    svg {
      transform: rotate(180deg);
    }
  }

  button.active {
    background-color: var(--secundary-color);
    color: #fff;
  }

  button.active:hover {
    background-color: #fff;
    color: var(--secundary-color);
  }

  .filson:hover { 
    background-color: var(--secundary-color);
    color: #fff;
    stroke: #fff;
  }

  span {
    color: #fff;
    cursor: pointer;
    stroke: var(--secundary-color);
  }

  @media only screen and (max-width: 1600px) {
    margin-top: 35px;

    .filson {
      width: 47px;
      height: 47px;
    }
  }

  @media only screen and (max-width: 1400px) {
    margin-top: 30px;

    .filson {
      width: 44px;
      height: 44px;
    }
  }

  @media only screen and (max-width: 1200px) {
    margin-top: 25px;

    .filson {
      width: 41px;
      height: 41px;
    }
  }

  @media only screen and (max-width: 1024px) {
    margin-top: 20px;

    .filson {
      width: 38px;
      height: 38px;
    }
  }

  @media only screen and (max-width: 768px) {

  }

  @media only screen and (max-width: 500px) {
    margin-top: 15px;

    .filson {
      font-size: 12px;
      width: 34px;
      height: 34px;

      svg {
        width: 6px;
      }
    }
  }
`;
