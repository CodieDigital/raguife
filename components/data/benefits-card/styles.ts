import styled from "styled-components";

export const BenefitsCard = styled.div`
  width: 100%;

  .image {
    max-width: 40px;
    width: 100%;
  }

  .image + * {
    margin-top: 10px;
  }

  h3 {
    color: var(--secundary-color);
    max-width: 95%;
    min-height: 60px;
    overflow: hidden; 
    text-overflow: ellipsis; 
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 6px;
  }
`;
