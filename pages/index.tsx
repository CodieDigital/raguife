import Head from "next/head";
import { GetServerSideProps } from "next";

import { api } from "src/services/api";

import { Layout } from "components/layout";
import {
  BannerComponent,
  BeneficiosInformacoes,
  ContactComponent,
  ParalaxBanner,
  ProductsInformation,
} from "components/sections/home/components";

import * as S from "../styles/pages/home";
import { DestaquesProdutosComponent } from "../components/layout/DestaquesProdutos";
import { ProductShowCase } from "components/sections/shop-detail/carousel";
import {
  GetProducts,
  GetProductsHome,
  ProductListItem,
  ProductProps,
} from "src/services/shop/get";
import { Banner } from "components/sections/home/banner";
import { Container } from "components/data/container";
import { PageInformationProps } from "src/interfaces/informationsPage";

interface HomeProps {
  products: ProductProps;
  banners: Banner[];
  information: PageInformationProps;
}

export default function HomePage({ products, banners,information }: HomeProps) {

  return (
    <Layout>
      <Head>
        <title>{information.head.pageTitle}</title>
        <meta name="description" content={information.head.metaDescription}/>
      </Head>

      <S.HomePage>
        <BannerComponent listBanners={banners} />

        <ProductsInformation />

        <ParalaxBanner />

        <BeneficiosInformacoes />

        <DestaquesProdutosComponent
          withActions
          title="Produtos de destaque"
          listProducts={products.items}
        />

        <div className="image-text">
          <div className="container-text-image">
            <div className="image">
              <img src="/images/text-image-4.png" alt="Cachorro e gato" />
            </div>

            <div className="text">
              <img src="/images/image-text-home.png" alt="Texto" />
            </div>
          </div>
        </div>
        <ContactComponent />
      </S.HomePage>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const responseProducts = await GetProductsHome(ctx);
  const banners = await api.get<Banner[]>(`/component/banners/GetAll`);
  const informationPage = await api.get<PageInformationProps>(`/pages/home`);

  if (!banners || !responseProducts || !informationPage ) {
    return {
      props: {
        banner: [],
      },
    };
  }

  return {
    props: {
      banners: banners.data,
      products: responseProducts,
      information: informationPage.data,
    },
  };
};
