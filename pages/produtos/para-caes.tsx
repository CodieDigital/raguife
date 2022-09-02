
import Head from "next/head";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";

import {
  GetProducts,
  ProductListItem,
  CategoriesList,
  ProductProps,
} from "src/services/shop/get";
import createRouterBuild from "src/utils/router-build";
import Paginate, { IPagination } from "src/utils/pagination";

import {
  Container,
  PaginationComponent,
  CardProductComponent,
} from "components/data/components";
import { Layout } from "components/layout";

import * as S from "styles/pages/shop";

interface ShopPageProps {
  products: ProductProps;
  categories: CategoriesList[];
}

export default function ShopDogPage({ products, categories }: ShopPageProps) {
  const router = useRouter(),
    routerBuild = createRouterBuild(router),
    [pagination, setPagination] = useState<IPagination | null>(null);

  useEffect(() => {
    if (products) {
      setPagination(
        Paginate({
          totalItems: products.pageTotal,
          currentPage:
            Number(router.query.page) <= 0 || !router.query.page
              ? 1
              : Number(router.query.page),
          pageSize: products.pageSize,
          hasNextPage: products.hasNextPage,
          hasPreviousPage: products.hasPreviousPage,
        })
      );
    }
  }, [products, router.query]);

  return (
    <Layout>
      <Head>
        <title>Para cães</title>
        <meta property="og:url" content={router.query.pathname?.toString()}/>
        <link rel="canonical" href={router.pathname} />
      </Head>

      <S.Shop>
        <div className="shop-content">
          <div className="top">
            <Container>
              <h2 className="title-2-bold">Produtos para Cães</h2>

              {/* <FilterBy
                listFilters={categories}
                router={router}
                routerBuild={routerBuild}
              /> */}

              <img
                className="absolute-image"
                src="/images/icon-pet-shop.png"
                alt="Icone logo"
              />
            </Container>
          </div>

          <Container>
            <div className="product-content">
              <div className="list">
                {products.items.map((product: ProductListItem) => {
                  return (
                    <CardProductComponent
                      key={product.id + product.titulo}
                      card={product}
                    />
                  );
                })}
              </div>

              {products.items.length === 0 && (
                <h2 className="title-4-bold">Nenhum resultado encontrado</h2>
              )}

              {pagination && (
                <PaginationComponent
                  pages={pagination.pages}
                  currentPage={pagination.page}
                  hasNextPage={pagination.hasNextPage}
                  hasPreviousPage={pagination.hasPreviousPage}
                  onSelect={(page) => {
                    return routerBuild.updateRouteParam(
                      "page",
                      page.toString()
                    );
                  }}
                />
              )}
            </div>
          </Container>
        </div>
      </S.Shop>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const responseProducts = await GetProducts(ctx);
  // const responseCategories = await GetCategories();
  const caterories1: CategoriesList[] = [
    {
      id: 1,
      metaDescription: "oi",
      pageTitle: "oi",
      titulo: "dog",
      productsCount: 1,
      url: "/",
    },
  ];

  if (!responseProducts || !caterories1) {
    return {
      notFound: true,
      props: null,
    };
  }

  return {
    props: {
      categories: caterories1,
      products: responseProducts,
    },
  };
};
