import { Product } from "src/services/shop/get";

import * as S from "../styles";

interface DescricaoProps {
  detail: Product;
}

export function Extra4({ detail }: DescricaoProps) {
  return (
    <S.TabContent key={detail.extra4}>
      <div className="content paragraph-1-regular">
        {detail.extra4 && (
          <div
            className="table2"
            dangerouslySetInnerHTML={{
              __html: detail.extra4,
            }}
          ></div>
        )}

        {!detail.extra4 && (
          <span className="paragraph-1-medium">
            Este produto não possuí descrição
          </span>
        )}
      </div>
    </S.TabContent>
  );
}
