import styled from "styled-components";

export const BenefitsCard = styled.div`
  width: 100%;
  text-align: center;

  .image {
    max-width: 175px;
    width: 100%;
    aspect-ratio:175/175;
    margin: 0 auto;    
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
    margin: 0 auto;
  }
`;
