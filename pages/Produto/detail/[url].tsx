import Head from "next/head";
import { GetServerSideProps } from "next";

import {
  Benefits,
  GetProduct,
  GetProductsCats,
  GetProductsDogs,
  ProductDetail,
  ProductProps,
} from "src/services/shop/get";

import {
  Container,
  BreadCrumbComponent,
  NextImage,
} from "components/data/components";
import { Layout } from "components/layout";
import TabsSectionComponent from "components/sections/produto-detalhe/tabs";
import { DestaquesProdutosComponent } from "components/layout/DestaquesProdutos";
import { BenefitsComponent } from "components/sections/produto-detalhe/benefits-carousel";

import * as S from "styles/pages/shop-detail";
import { useRouter } from "next/router";

interface DetailProductPageProps {
  data: ProductDetail;
  benefits: Benefits[];
  productsDogs: ProductProps;
  productsCats: ProductProps;
}

export default function DetailProductPage({
  data: { detail, head, badges },
  productsDogs,
  productsCats,
}: DetailProductPageProps) {
  const router = useRouter();

  const breadCrumbProduct = [
    {
      label: detail.categoriaTitle,
      url: "/produtos/" +  detail.categoriaUrl,
    },
    {
      label: detail ? detail.titulo : "/",
      url: "",
    },
  ];

  return (
    <Layout>
      <Head>
      <title>{head.pageTitle}</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="description" content={head.metaDescription} />
        <meta itemProp="description" content={head.metaDescription} />
        <meta name="twitter:description" content={head.metaDescription} />
        <meta name="og:description" content={head.metaDescription} />
        <meta property="og:title" content={head.pageTitle}/>
        <meta property="og:locale" content="pt_BR"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={router.query.pathname?.toString()}/>
        <meta property="og:image" content={head.imageOpenGraph}/>
        <link rel="icon" href="/favicon.ico" />
        <meta name="content-language" content="pt-br"/>
        <meta name="rating" content="general"/>
        <meta name="distribution" content="global"/>
        <meta name="copyright" content="Codie"/>
        <meta name="author" content="Codie" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index,follow"/>
        <link rel="canonical" href={router.pathname} />
        <meta name="referrer" content="origin" />
        <meta name="language" content="portuguese, PT"/>
        <meta name="location" content="Londrina, Paraná"/>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="keyboard-shortcuts-preference" content="all"/>
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

                <h2 className="title-3-bold capitalize">{detail.titulo}</h2>
              </div>

              <div className="bottom">
                <ul className="benefits">
                  <li className="paragraph-1-medium transform">
                    • {detail.subtitulo}
                  </li>
                  <li className="paragraph-1-medium">• {detail.extra5}</li>
                </ul>

                {(detail.extra6 || detail.extra7) && 
                  <div className="quantity">
                    <span className="paragraph-2-regular">
                      Disponível em embalagens de:
                    </span>
                    <div className="box">
                      <div className="box-quantity paragraph-2-regular">
                        {detail.extra6}
                      </div>
                      <div className="box-quantity paragraph-2-regular">
                        {detail.extra7}
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
          </Container>
        </section>

        <BenefitsComponent listBenefits={badges} />

        <TabsSectionComponent product={detail} />

        {detail.categoriaTitle.includes("Cães") ? (
          <DestaquesProdutosComponent
            key={1}
            title="Produtos relacionados"
            listProducts={productsDogs.items}
          />
        ) : (
          <DestaquesProdutosComponent
            title="Produtos ralacionados"
            key={2}
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
