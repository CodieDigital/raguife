import styled from "styled-components";

export const LinksContato = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 38px;

  a {
    color: #fff;
    display: inline-flex;
    align-items: center;
    gap: 9px;
    fill: #fff;
    max-width: fit-content;

    span {
      display: block;
    }
  }

  a:hover {
    color: var(--primary-color);
    fill: var(--primary-color);
  }

  .base {
    align-items: baseline;
  }

  .icon-base {
    position: relative;
    top: 2px;
  }

  @media only screen and (max-width: 1600px) {
    margin-bottom: 33px;
    gap: 8px;
  }

  @media only screen and (max-width: 1400px) {
    margin-bottom: 27px;
    gap: 7px;
  }

  @media only screen and (max-width: 1200px) {
    margin-bottom: 24px;
    gap: 6px;
  }

  @media only screen and (max-width: 1024px) {
    margin-bottom: 20px;
    gap: 5px;

    .icon-base {
      top: 3px;
    }
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 17px;
  }
`;
