import { Product } from "src/services/shop/get";
import * as S from "../styles";

interface DescricaoProps {
  detail: Product;
}

export function Extra1({ detail }: DescricaoProps) {
  return (
    <S.TabContent key={detail.extra1}>
      <div className="content paragraph-1-regular">
        {detail.extra1 && (
          <div
            dangerouslySetInnerHTML={{
              __html: detail.extra1,
            }}
          ></div>
        )}

        {!detail.extra1 && (
          <span className="paragraph-1-medium">
            Este produto não possuí descrição
          </span>
        )}
      </div>
    </S.TabContent>
  );
}
