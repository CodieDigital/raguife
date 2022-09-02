import { Product } from "src/services/shop/get";
import * as S from "../styles";

interface DescricaoProps {
  detail: Product;
}
export function DescricaoComponent({ detail }: DescricaoProps) {
  return (
    <S.TabContent key={detail.descricao}>
      <div className="content paragraph-1-regular">
        {detail.descricao && (
          <div
            dangerouslySetInnerHTML={{
              __html: detail.descricao,
            }}
          ></div>
        )}

        {!detail.descricao && (
          <span className="paragraph-1-medium">
            Este produto não possuí descrição
          </span>
        )}
      </div>
    </S.TabContent>
  );
}
