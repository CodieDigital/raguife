module.exports = {
  trailingSlash: true,
  images: {
    domains: [
      "localhost",
      "images.codie.digital",
      "painel.reguife.com.br.144-208-108-40.ph105.peopleshostshared.com",
      "api.raguifepet.com.br.66-103-159-3.ph107.peopleshostshared.com",
      "painel.raguifepet.com.br.66-103-159-3.ph107.peopleshostshared.com"
    ],
    experimental: {
      forceSwcTransforms: true,
    },
    swcMinify: true,
    compiler: {
      styledComponents: {
        displayName: true,
        ssr: true,
      },
    },
  },
};
