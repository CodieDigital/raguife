import { api } from "src/services/api";

import { GetServerSidePropsContext, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";

export interface ProductListItem {
  id: number;
  titulo: string;
  subtitulo: string;
  imagem: string;
  url: string;
  categoriaTitle: string;
}

export interface Product {
  id: number;
  titulo: string;
  descricao?: string;
  imagem: string;
  url: string;
  ordem: number;
  subtitulo: string;
  thumbnail: string;
  extra1: string;
  extra2: string;
  extra3: string;
  extra4: string;

  //preciso receber
  categoryTitle: string; //para breadcrumb
  categoryFilter:string; //para subtitulo lista 1
  sabor:string; // para subititulo lista 2
  disponibilidade: Disponivel[]; // box disponibilidade
}

interface Disponivel {
  titulo: string;
}

interface ProductVariation {
  id: number;
  imagemId: number;
  titulo: string;
  ordem: string;
  preco: number;
  isPromotion: boolean;
  precoPromo?: number;
}

interface HeadPage {
  pageTitle: string;
  metaDescription: string;
  imageOpenGraph: string;
  headScripts: string;
}

export interface Imagem {
  id: number;
  fileData: string;
}

export interface Benefits {
  id: number;
  icon: string;
  title: string;
  subTitle: string;
}

export interface ProductDetail {
  detail: Product;
  head: HeadPage;
  benefit: Benefits[];
  product:ProductListItem,
}

export interface ProductProps {
  map(
    arg0: (product: ProductListItem) => JSX.Element
  ): import("react").ReactNode;
  pageTotal: number;
  pageSize: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  items: ProductListItem[];
  pageNumber: number;
  isFirstPage: boolean;
  isLastPage: boolean;
}

export interface CategoriesList {
  id: number;
  metaDescription: string;
  pageTitle: string;
  titulo: string;
  productsCount: number;
  url: string;
}

export async function GetProducts(
  router: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) {
  if (router) {
    const { data } = await api.get<ProductProps>(
      `/Produto/list${router.resolvedUrl.substr(
        router.resolvedUrl.split("/")[1].length + 1
      )}`
    );

    if (data) {
      return data;
    }

    return { products: [] };
  }
}

export async function GetProductsHome(
  router: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) {
  if (router) {
    const { data } = await api.get<ProductProps>(`/Produto/list/GetAll`);

    if (data) {
      return data;
    }

    return { products: [] };
  }
}

export async function GetProductsCats(
  router: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) {
  if (router) {
    const { data } = await api.get<ProductProps>(`/Produto/list/para-gatos`);

    if (data) {
      return data;
    }

    return { products: [] };
  }
}


export async function GetProductsDogs(
  router: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) {
  if (router) {
    const { data } = await api.get<ProductProps>(`/Produto/list/para-dogs`);

    if (data) {
      return data;
    }

    return { products: [] };
  }
}


export async function GetProduct(
  router: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
): Promise<ProductDetail | undefined> {
  if (router && router.query.url) {
    const { data } = await api.get<ProductDetail>(
      `/Produto/detail/${router.query.url}`
    );

    if (data) {
      return data;
    }

    return undefined;
  }
}

export async function GetCategories() {
  const { data } = await api.get<CategoriesList[]>(`/categories/list`);

  return data;
}
