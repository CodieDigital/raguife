import { NextImage } from "../NextImage";
import * as S from "./styles";

export interface BenefitsItem {
  id: number;
  icon: string;
  title: string;
  subTitle: string;
}

export interface BenefitsCardProps {
  cardBenefits: BenefitsItem;
}

export function BenefitsCard({ cardBenefits }: BenefitsCardProps) {
  if (!cardBenefits) {
    return <></>;
  }

  return (
    <S.BenefitsCard>
      <div className="image">
        <NextImage layout="fill" src={cardBenefits.icon} />
      </div>

      <div className="text">
        <h3 className="title-6-medium">{cardBenefits.title}</h3>

        <p className="paragraph-2-regular">{cardBenefits.subTitle}</p>
      </div>
    </S.BenefitsCard>
  );
}
