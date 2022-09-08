import Head from "next/head";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

import { api } from "src/services/api";
import { GetProductsHome, ProductProps } from "src/services/shop/get";
import { PageInformationProps } from "src/interfaces/informationsPage";

import { Layout } from "components/layout";
import {
  BannerComponent,
  BeneficiosInformacoes,
  ContactComponent,
  ParalaxBanner,
  ProductsInformation,
} from "components/sections/home/components";
import { Banner } from "components/sections/home/banner";
import { DestaquesProdutosComponent } from "../components/layout/DestaquesProdutos";

import * as S from "../styles/pages/home";
import { NextImage } from "components/data/NextImage";

interface HomeProps {
  products: ProductProps;
  banners: Banner[];
  information: PageInformationProps;
}

export default function HomePage({
  products,
  banners,
  information,
}: HomeProps) {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>{information.head.pageTitle}</title>
        <meta name="description" content={information.head.metaDescription} />
        <meta itemProp="description" content={information.head.metaDescription} />
        <meta name="twitter:description" content={information.head.metaDescription} />
        <meta name="og:description" content={information.head.metaDescription} />
        <meta property="og:title" content={information.head.pageTitle}/>
        <meta property="og:image" content={information.head.imageOpenGraph}/>
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
              <NextImage layout="fill" src="/images/text-image-4.webp" loading="lazy"  alt="Cachorro e gato" />
            </div>

            <div className="text">
              <NextImage layout="fill" src="/images/image-text-home.png" loading="lazy" alt="Texto" />
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

  if (!banners || !responseProducts || !informationPage) {
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
