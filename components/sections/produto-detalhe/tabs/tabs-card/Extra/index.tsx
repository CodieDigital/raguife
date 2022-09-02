import * as S from "../styles";

interface DescricaoProps {
  detail?: string;
  type?: "" | "table1" | "table2";
}

export function Extra({ detail, type }: DescricaoProps) {
  return (
    <S.TabContent key={detail}>
      <div className="content paragraph-1-regular">
        {detail && (
          <div
            className={type}
            dangerouslySetInnerHTML={{
              __html: detail,
            }}
          ></div>
        )}

        {!detail && (
          <span className="paragraph-1-medium">
            Este produto não possuí descrição
          </span>
        )}
      </div>
    </S.TabContent>
  );
}
