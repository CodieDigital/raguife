import Link from "next/link";

import { NextImage } from "components/data/components";
import { ProductListItem } from "src/services/shop/get";

import * as S from "./styles";
import React from "react";

export interface CardProps {
  card: ProductListItem;
}

export function CardProductComponent({ card }: CardProps) {
  if (!card) {
    return <></>;
  }

  return (
    <S.CardProduct className="card-list">
      <div className="image">
        <Link
          passHref
          href={{
            pathname: "/Produto/detail/[url]",
            query: {
              url: card.url ? card.url : "default",
            },
          }}
        >
          <a href="replaced">
            <NextImage layout="fill" src={card.imagem} isBaseUrl />
          </a>
        </Link>
      </div>

      <div className="text">
        <Link passHref href={{
            pathname: "/Produto/detail/[url]",
            query: {
              url: card.url ? card.url : "default",
            },
          }}>
          <a href="replaced">
            <h3 className="title-5-bold capitalize">{card.titulo}</h3>
          </a>
        </Link>

        <span className="title-7-medium uppercase">{card.subtitulo}</span>
      </div>
    </S.CardProduct>
  );
}
