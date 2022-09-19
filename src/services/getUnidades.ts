import { GetServerSidePropsContext, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";
import { api } from "./api";

export interface ListUnits {
  id?: number;
  cidade: string;
  rua: string;
  telefone?: string;
  celular?: string;
  bairro?: string;
  cep?: string;
  latitude: string;
  longitude: string;
}

export interface UnidadesProps {
  id: number;
  pageTotal: number;
  pageSize: number;
  pageNumber: number;
  hasNextPage: string;
  hasPreviousPage: string;
  isFirstPage: string;
  isLastPage: string;
  items: ListUnits[];
}

export async function GetUnidades(
  router: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) {
  if (router) {
    const { data } = await api.get<UnidadesProps>(`/Loja/list/GetAll`);

    if (data) {
      return data;
    }

    return null;
  }
}
