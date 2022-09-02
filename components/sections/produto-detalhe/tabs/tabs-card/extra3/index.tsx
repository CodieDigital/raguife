import { Product } from "src/services/shop/get";

import * as S from "../styles";

interface DescricaoProps {
  detail: Product;
}

export function Extra3({ detail }: DescricaoProps) {
  return (
    <S.TabContent>
      <div className="content paragraph-1-regular" key={detail.extra3}>
        {detail.extra3 && (
          <div
            dangerouslySetInnerHTML={{
              __html: detail.extra3,
            }}
          ></div>
        )}

        {!detail.extra3 && (
          <span className="paragraph-1-medium">
            Este produto não possuí descrição
          </span>
        )}
      </div>
    </S.TabContent>
  );
}
