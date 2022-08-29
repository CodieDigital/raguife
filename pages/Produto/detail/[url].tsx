import Head from "next/head";
import { GetServerSideProps } from "next";
import { useCallback, useEffect, useRef, useState } from "react";

import { Layout } from "components/layout";
import {
  Container,
  ButtonComponent,
  BreadCrumbComponent,
  NextImage,
} from "components/data/components";
import {
  Benefits,
  GetProduct,
  GetProducts,
  GetProductsCats,
  GetProductsDogs,
  GetProductsHome,
  ProductDetail,
  ProductListItem,
  ProductProps,
} from "src/services/shop/get";
import TabsSectionComponent from "components/sections/produto-detalhe/tabs";
import { DestaquesProdutosComponent } from "components/layout/DestaquesProdutos";
import { BenefitsComponent } from "components/sections/produto-detalhe/benefits-carousel";

import * as S from "styles/pages/shop-detail";

// interface VariationProps {
//   id: number;
//   titulo: string;
//   preco: string;
//   imagem: string;
//   precoPromo?: number;
//   isPromotion: boolean;
// }

interface DetailProductPageProps {
  data: ProductDetail;
  benefits: Benefits[];
  productsDogs: ProductProps;
  productsCats: ProductProps;
}

export default function DetailProductPage({
  data: { detail, head, product },
  benefits,
  productsDogs,
  productsCats,
}: DetailProductPageProps) {
  const breadCrumbProduct = [
    {
      label: "Página Inicial",
      url: "/",
    },
    {
      label: detail ? detail.titulo : "/",
      url: "",
    },
  ];

  // const listBenefitsSubstituir: Benefits = [
  //   {
  //     id: 1,
  //     icon: "/images/icon-benefits-1.png",
  //     title: "PELE SAUDÁVEL E PELOS MAIS BONITOS",
  //     subTitle: "Ômegas 3 e 6, biotina e zinco orgânicos",
  //   },
  //   {
  //     id: 2,
  //     icon: "/images/icon-benefits-1.png",
  //     title: "SISTEMA URINÁRIO SAUDÁVEL",
  //     subTitle: "Equilíbrio do pH urinário",
  //   },
  //   {
  //     id: 3,
  //     icon: "/images/icon-benefits-1.png",
  //     title: "TAURINA",
  //     subTitle: "Essencial para a saúde cardíaca e para a visão",
  //   },
  //   {
  //     id: 4,
  //     icon: "/images/icon-benefits-1.png",
  //     title: "COMBATE DOS RADICAIS LIVRES",
  //     subTitle: "Ômegas 3 e 6, biotina e zinco orgânicos",
  //   },
  //   {
  //     id: 5,
  //     icon: "/images/icon-benefits-1.png",
  //     title: "PELE SAUDÁVEL E PELOS MAIS BONITOS",
  //     subTitle: "Ômegas 3 e 6, biotina e zinco orgânicos",
  //   },
  // ];

  // const tabela = [
  //   {
  //     id: 1,
  //     titulo: "Umidade (máx.)",
  //     items: [" 100 g/kg", "10%", "10%"],
  //   },
  // ];

  // const tabela2 = [
  //   {
  //     id: 1,
  //     titulo: "Umidade (máx.)",
  //     items: ["100 g/kg", "10%", "11%", "13%", "15%", "15%", "15%"],
  //   },
  //   {
  //     id: 2,
  //     titulo: "teste",
  //     items: ["100 g/kg", "10%", "11%", "13%", "15%", "15%", "15%"],
  //   },
  // ];

  return (
    <Layout>
      <Head>
        <title>{head.pageTitle}</title>
      </Head>

      <S.ShopDetail>
        <section className="box-product">
          <div className="show-mobile">
            <BreadCrumbComponent list={breadCrumbProduct} />
          </div>

          <Container>
            <div className="box-image">
              <div className="bg-green"></div>
              <div className="image">
                <img
                  src="/images/icon-selo-product.png"
                  className="icon-selo"
                  alt="Icone selo 100% satisfacão"
                />

                <NextImage layout="fill" isBaseUrl src={detail.imagem} />
              </div>
            </div>

            <div className="text">
              <div className="top">
                <div className="hide-mobile">
                  <BreadCrumbComponent list={breadCrumbProduct} />
                </div>

                <h2 className="title-3-bold">{detail.titulo}</h2>
              </div>

              <div className="bottom">
                <ul className="benefits">
                  <li className="paragraph-1-medium">• Gatos adultos</li>
                  <li className="paragraph-1-medium">• Sabor Frango</li>
                </ul>

                <div className="quantity">
                  <span className="paragraph-2-regular">
                    Disponível em embalagens de:
                  </span>
                  <div className="box">
                    <div className="box-quantity paragraph-2-regular">3 kg</div>
                    <div className="box-quantity paragraph-2-regular">
                      15 kg
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <BenefitsComponent listBenefits={benefits} />

        <TabsSectionComponent product={detail} />

        {detail.url.includes("caes") ? (
          <DestaquesProdutosComponent key={detail.id}
            title="Produtos ralacionados"
            listProducts={productsDogs.items}
          />
        ) : (
          <DestaquesProdutosComponent key={detail.id}
            title="Produtos ralacionados"
            listProducts={productsCats.items}
          />
        )}
      </S.ShopDetail>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await GetProduct(ctx);
  const responseProductsDogs = await GetProductsDogs(ctx);
  const responseProductsCats = await GetProductsCats(ctx);

  console.log(responseProductsDogs)

  if (
    response === undefined ||
    responseProductsDogs === undefined ||
    responseProductsCats === undefined
  ) {
    return {
      notFound: true,
      props: {},
    };
  }

  return {
    props: {
      data: response,
      productsDogs: responseProductsDogs || null,
      productsCats: responseProductsCats || null,
    },
  };
};
