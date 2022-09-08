import axios from "axios";

const apiURL = "https://api.raguifepet.com.br/";
const baseImage = "https://painel.raguifepet.com.br/uploads/";
const baseImageGallery = "https://painel.raguifepet.com.br/imagens/Products/";
const baseVideo = "https://painel.raguifepet.com.br/uploads/videos/";

const api = axios.create({
  baseURL: apiURL,
});

export { api, baseImage, baseImageGallery, baseVideo };
