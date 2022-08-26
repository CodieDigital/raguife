import styled from "styled-components";

export const Tabela = styled.section`
  background-color: #dfdfdf;
  width: 100%;
  padding: 70px 90px;

  .border-table {
    border: 1px solid #69b430;
    border-radius: 4px;
  }

  .scroller {
    overflow-x: auto;
  }

  .scroller::-webkit-scrollbar {
    height: 6px;
  }

  .scroller::-webkit-scrollbar-track {
    background: transparent;
  }

  .scroller::-webkit-scrollbar-thumb {
    background: var(--secundary-color);
  }

  .scroller::-webkit-scrollbar-thumb:hover {
    background: var(--hover-secundary-color);
  }

  .content-table {
    min-width: 700px;

    .row {
      display: flex;
      align-items: flex-start;
    }

    div {

      .titulo {
        flex: 0.26;
      }

      .titulo + * {
        flex: 1;
        border-left: 1px solid #69b430;
      }

      span {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 0;
        min-height: 58px;
      }

      span + span {
        border-left: 1px solid #69b430;
      }
    }

    .grey {
      background-color: #cbcbcb;
    }
  }
`;


interface GridTableStyleProps {
  numberOfItens: number;
}

export const GridTable = styled.div<GridTableStyleProps>`
   width: 100%;
  display: grid;
   grid-template-columns: ${props => `repeat(${props.numberOfItens}, 1fr)`};

`