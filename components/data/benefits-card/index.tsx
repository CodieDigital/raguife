import React from "react";
import { Benefits } from "src/services/shop/get";
import { NextImage } from "../NextImage";
import * as S from "./styles";

export interface BenefitsCardProps {
  cardBenefits: Benefits;
}

export function BenefitsCard({ cardBenefits }: BenefitsCardProps) {
  if (!cardBenefits) {
    return <></>;
  }

  return (
    <S.BenefitsCard>
      <React.Fragment key={cardBenefits.id + cardBenefits.titulo}>
        <div className="image">
          <NextImage alt="Imagem produto" layout="fill" src={cardBenefits.imagem} isBaseUrl/>
        </div>

        <div className="text">
          <h3 className="title-6-medium">{cardBenefits.titulo}</h3>

          <p className="paragraph-2-regular">{cardBenefits.subTitulo}</p>
        </div>
      </React.Fragment>
    </S.BenefitsCard>
  );
}
