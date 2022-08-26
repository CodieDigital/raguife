import * as S from "./styles";

interface Table {
  id: number;
  titulo: string;
  items: string[];
}

interface TableProps {
  itemsTable: Table[];
  isTitle?: boolean;
}

export function Tabela({ itemsTable, isTitle }: TableProps) {
  if (!isTitle) {
    return <S.Tabela>
      <div className="border-table">
        <div className="scroller">
          <div className="content-table">
            {itemsTable.map(({ id, titulo, items }, index) => {
              if (index % 2) {
                return (
                  <div className="row grey" key={"item-table" + id}>
                    <S.GridTable
                      key={"item-table" + id}
                      numberOfItens={items.length + 1}
                    >
                      <span className="titulo">{titulo}</span>

                      {items.map((item) => (
                        <span key={item + "item"}>{item}</span>
                      ))}
                    </S.GridTable>
                  </div>
                );
              }

              return (
                <div className="row" key={"item-table" + id}>
                  <S.GridTable
                    key={"item-table" + id}
                    numberOfItens={items.length + 1}
                  >
                    <span className="titulo">{titulo}</span>

                    {items.map((item) => (
                      <span key={item + "item"}>{item}</span>
                    ))}
                  </S.GridTable>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </S.Tabela>;
  }

  return (
    <S.Tabela>
      <div className="border-table">
        <div className="scroller">
          <div className="content-table">
            {itemsTable.map(({ id, titulo, items }, index) => {
              if (index % 2) {
                return (
                  <div className="row grey" key={"item-table" + id}>
                    <span className="titulo">{titulo}</span>

                    <S.GridTable
                      numberOfItens={items.length}
                    >
                      {items.map((item) => (
                        <span key={item + "item"}>{item}</span>
                      ))}
                    </S.GridTable>
                  </div>
                );
              }

              return (
                <div className="row" key={"item-table" + id}>
                  <span className="titulo">{titulo}</span>

                  <S.GridTable
                    
                    numberOfItens={items.length}
                  >
                    {items.map((item) => (
                      <span key={item + "item"}>{item}</span>
                    ))}
                  </S.GridTable>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </S.Tabela>
  );
}
