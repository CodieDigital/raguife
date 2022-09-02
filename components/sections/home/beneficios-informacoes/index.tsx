import { DataBenefits } from "./data";
import * as S from "./styles";

export function BeneficiosInformacoes() {
  return (
    <S.BeneficionsInformacoes>
      {DataBenefits.map((benefit, index) => {
        if (index % 2) {
          return (
            <div key={benefit.title + index} className="text-image invert-row">
              <div className="text">
                <h3 className="title-4-bold capitalize">{benefit.title}</h3>

                <p className="paragraph-2-regular">{benefit.description}</p>
              </div>

              <div className="image">
                <img src={benefit.image} loading="lazy" alt={benefit.title} />
              </div>
            </div>
          );
        }

        return  <div key={benefit.title + index} className="text-image">
        <div className="text">
          <h3 className="title-4-bold capitalize">{benefit.title}</h3>

          <p className="paragraph-2-regular">{benefit.description}</p>
        </div>

        <div className="image">
          <img src={benefit.image} loading="lazy" alt={benefit.title} />
        </div>
      </div>;
      })}
    </S.BeneficionsInformacoes>
  );
}
