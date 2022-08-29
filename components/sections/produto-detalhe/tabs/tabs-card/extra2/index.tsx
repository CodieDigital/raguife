import { Container } from "components/data/components";
import { Product } from "src/services/shop/get";

import * as S from "../styles";

interface DescricaoProps {
  detail: Product;
}

export function Extra2({ detail }: DescricaoProps) {
  return (
    <S.TabContent>
      <div className="content paragraph-1-regular">
        <div className="table1"
          dangerouslySetInnerHTML={{
            __html: detail.extra2
              ? detail.extra2
              : "<span className='paragraph-1-medium'>Este produto não possuí descrição</span>",
          }}
        ></div>
      </div>
    </S.TabContent>
  );
}
