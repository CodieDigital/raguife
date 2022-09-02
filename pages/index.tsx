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
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="description" content={information.head.metaDescription} />
        <meta itemProp="description" content={information.head.metaDescription} />
        <meta name="twitter:description" content={information.head.metaDescription} />
        <meta name="og:description" content={information.head.metaDescription} />
        <meta property="og:title" content={information.head.pageTitle}/>
        <meta property="og:locale" content="pt_BR"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={router.query.pathname?.toString()}/>
        <meta property="og:image" content={information.head.imageOpenGraph}/>
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
              <img src="/images/text-image-4.webp"  alt="Cachorro e gato" />
            </div>

            <div className="text">
              <img src="/images/image-text-home.png"  alt="Texto" />
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
