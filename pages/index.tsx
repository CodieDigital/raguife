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
import { GetProducts, GetProductsHome, ProductListItem, ProductProps } from "src/services/shop/get";
import { Banner } from "components/sections/home/banner";

interface HomeProps {
  products: ProductProps;
  banners: Banner[];
}

export default function HomePage({products, banners}:HomeProps ) {

  return (
    <Layout>
      <S.HomePage>
        <BannerComponent listBanners={banners} />

        <ProductsInformation />

        <ParalaxBanner />

        <BeneficiosInformacoes />

        <DestaquesProdutosComponent withActions title="Produtos de destaque" listProducts={products.items} />

        <div className="image-text">
          <div className="image">
            <img src="/images/text-image" alt="" />
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

  if (!banners || !responseProducts) {
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
    },
  };
};