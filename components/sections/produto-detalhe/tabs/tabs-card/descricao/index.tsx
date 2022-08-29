import { Product } from "src/services/shop/get";
import * as S from "../styles";

interface DescricaoProps {
  detail: Product;
}
export function DescricaoComponent({ detail }: DescricaoProps) {
  return (
    <S.TabContent key={detail.descricao}>
      <div className="content paragraph-1-regular">
        <p>
          <strong>Sinopse:</strong>
        </p>

        <div
          dangerouslySetInnerHTML={{
            __html: detail.descricao ? detail.descricao : "<span className='paragraph-1-medium'>Este produto não possuí descrição</span>",
          }}
        ></div>
      </div>
    </S.TabContent>
  );
}