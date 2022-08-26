import styled from "styled-components";

export const CardProduct = styled.div`
  width: 100%;

  .image {
    aspect-ratio: 229/319!important;
    max-width: 300px;
    margin: 0 auto;
    display: block;

    img {
      aspect-ratio: inherit;
      width: 100% !important;
      max-height: 417px!important;
      object-fit: contain!important;
    }
  }

  .image + * {
    margin-top: 30px;
  }

  .text {
    text-align: center;

    a {
      color: #fff;
      margin-bottom: 7px;
    }

    h3 {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    span {
      color: #9bcdff;;
    }
  }

  @media only screen and (max-width: 768px) {
    .image {
      aspect-ratio: unset;
      max-width: 270px;
      margin: 0 auto;

      img {
        aspect-ratio: inherit;
        width: 100% !important;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .image + * {
      margin-top: 10px;
    }
  }

  @media only screen and (max-width: 400px) {
    .image {
      max-width: 220px;
    }
  }
`;
