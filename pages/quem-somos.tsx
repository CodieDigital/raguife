import Head from "next/head";
import { GetServerSideProps } from "next";
import { Swiper, SwiperSlide } from "swiper/react";

import { api } from "src/services/api";
import { PageInformationProps } from "src/interfaces/informationsPage";

import { Layout } from "components/layout";
import { Container } from "components/data/container";

import * as S from "../styles/pages/quem-somos";

interface InformationPageProps {
  information: PageInformationProps;
}

export default function SobrePage({ information }: InformationPageProps) {
  return (
    <Layout>
      <Head>
        <title>{information.head.pageTitle}</title>
        <meta name="description" content={information.head.metaDescription} />
      </Head>

      <S.Sobre>
        <div className="banner-sobre">
          <div className="text-image">
            <div className="text">
              <h4 className="title-6-regular uppercase capitalize">
                Quem somos
              </h4>

              <h1 className="title-2-bold">
                <span className="capitalize">Oferecendo</span>
                <span className="title-1-cocktail titulo-2">
                  nutrição de
                  <br /> qualidade
                </span>
                <span className="title-2-bold titulo-3 capitalize">
                  para os pets
                </span>
              </h1>
            </div>

            <div className="image">
              <img src="/images/banner-sobre.png" alt="Imagem banner sobre" />
            </div>
          </div>
        </div>

        <div className="sobre">
          <Container>
            <div className="text">
              <h2 className="title-4-bold">A Raguife Pet</h2>

              <p className="paragraph-2-regular">
                Somos uma empresa tradicional no ramo da aquicultura no interior
                de São Paulo, em Santa Fé do Sul. Fazemos parte do grupo Ambar
                Amaral que contempla outras empresas também no ramo de peixes.
                <br />
                <br />
                Inspirados pela nossa experiência e no amor pela nutrição,
                iniciamos o projeto Raguife Pet para oferecer o que há de melhor
                em alimentação para aqueles que são nossos companheiros de vida.
                <br />
                <br />
                Nossas formulações incluem ingredientes nobres para levar mais
                saúde longevidade aos cães e gatos. A missão de nutrir
                confiança, impressa em nosso DNA, agora expande horizontes para
                oferecer uma relação de confiança e muito amor com nossos
                melhores amigos.
              </p>
            </div>

            <div className="image">
              <img
                src="/images/text-image-page-sobre.png"
                alt="Caminhão raguife"
              />
            </div>
          </Container>
        </div>

        <div className="informativo-nutricao">
          <img
            src="/images/absolute-dog.png"
            alt="Cachorro"
            className="img-left"
          />

          <Container>
            <h2 className="title-4-bold capitalize">
              Nutrição de Excelência para Pets
            </h2>

            <div className="grid-nutricao hide-mobile">
              <div className="box-nutricao capitalize">
                <img src="/images/icon-box-nutricao/icon-1.png" alt="icon" />

                <h4 className="title-6-regular">
                  Nutrição de <br /> qualidade
                </h4>
              </div>

              <div className="box-nutricao capitalize">
                <img src="/images/icon-box-nutricao/icon-2.png" alt="icon" />

                <h4 className="title-6-regular">
                  Contém ingredientes <br /> naturais
                </h4>
              </div>

              <div className="box-nutricao capitalize">
                <img src="/images/icon-box-nutricao/icon-3.png" alt="icon" />

                <h4 className="title-6-regular">
                  Alimentos ricos em vitaminas,
                  <br /> antioxidantes e prebióticos
                </h4>
              </div>

              <div className="box-nutricao capitalize">
                <img src="/images/icon-box-nutricao/icon-4.png" alt="icon" />

                <h4 className="title-6-regular">
                  Alta <br />
                  digestibilidade
                </h4>
              </div>

              <div className="box-nutricao capitalize">
                <img src="/images/icon-box-nutricao/icon-5.png" alt="icon" />

                <h4 className="title-6-regular">
                  Formulações <br /> direcionadas
                </h4>
              </div>

              <div className="box-nutricao capitalize">
                <img src="/images/icon-box-nutricao/icon-6.png" alt="icon" />

                <h4 className="title-6-regular">
                  Promoção de saúde
                  <br /> e longevidade
                </h4>
              </div>
            </div>

            <div className="show-mobile">
              <Swiper
                navigation={true}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  680: {
                    slidesPerView: 2,
                  },
                  901: {
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="box-nutricao capitalize">
                    <img
                      src="/images/icon-box-nutricao/icon-1.png"
                      alt="icon"
                    />

                    <h4 className="title-6-regular">
                      Nutrição de <br /> qualidade
                    </h4>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="box-nutricao capitalize">
                    <img
                      src="/images/icon-box-nutricao/icon-2.png"
                      alt="icon"
                    />

                    <h4 className="title-6-regular">
                      Contém ingredientes <br /> naturais
                    </h4>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="box-nutricao capitalize">
                    <img
                      src="/images/icon-box-nutricao/icon-3.png"
                      alt="icon"
                    />

                    <h4 className="title-6-regular">
                      Alimentos ricos em vitaminas,
                      <br /> antioxidantes e prebióticos
                    </h4>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="box-nutricao capitalize">
                    <img
                      src="/images/icon-box-nutricao/icon-4.png"
                      alt="icon"
                    />

                    <h4 className="title-6-regular">
                      Alta <br />
                      digestibilidade
                    </h4>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="box-nutricao capitalize">
                    <img
                      src="/images/icon-box-nutricao/icon-5.png"
                      alt="icon"
                    />

                    <h4 className="title-6-regular">
                      Formulações <br /> direcionadas
                    </h4>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="box-nutricao capitalize">
                    <img
                      src="/images/icon-box-nutricao/icon-6.png"
                      alt="icon"
                    />

                    <h4 className="title-6-regular">
                      Promoção de saúde
                      <br /> e longevidade
                    </h4>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </Container>

          <img
            src="/images/absolute-cat.png"
            alt="Gato"
            className="img-right"
          />
        </div>

        <div className="beneficios">
          <div className="show-mobile">
            <Container>
              <Swiper
                navigation={true}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  901: {
                    slidesPerView: 2,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="box-beneficios capitalize">
                    <img
                      src="/images/icon-beneficios/icon-box-beneficios-1.png"
                      alt="Icone box"
                    />

                    <div className="text">
                      <h4 className="title-6-bold">
                        Manutenção das Articulações
                      </h4>
                      <p className="title-6-regular">
                        Sulfato de condroitina e glicosamina
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="box-beneficios capitalize">
                    <img
                      src="/images/icon-beneficios/icon-box-beneficios-2.png"
                      alt="Icone box"
                    />

                    <div className="text">
                      <h4 className="title-6-bold">
                        Controle e Redução do Tartáro
                      </h4>
                      <p className="title-6-regular">
                        Hexametafosfato de sódio
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="box-beneficios capitalize">
                    <img
                      src="/images/icon-beneficios/icon-box-beneficios-3.png"
                      alt="Icone box"
                    />
                    <div className="text">
                      <h4 className="title-6-bold">
                        Favorece a Função Cognitiva
                      </h4>
                      <p className="title-6-regular">DHA</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="box-beneficios capitalize">
                    <img
                      src="/images/icon-beneficios/icon-box-beneficios-4.png"
                      alt="Icone box"
                    />
                    <div className="texte">
                      <h4 className="title-6-bold">
                        Equilíbrio da Flora Intestinal
                      </h4>
                      <p className="title-6-regular">
                        Prebiótico e beta-glucanas
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="box-beneficios capitalize">
                    <img
                      src="/images/icon-beneficios/icon-box-beneficios-5.png"
                      alt="Icone box"
                    />
                    <div className="text">
                      <h4 className="title-6-bold">
                        Odor e Volume de Fezes Reduzidos
                      </h4>
                      <p className="title-6-regular">
                        Extrato de yucca e polpa de beterraba
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="box-beneficios capitalize">
                    <img
                      src="/images/icon-beneficios/icon-box-beneficios-6.png"
                      alt="Icone box"
                    />
                    <div className="text">
                      <h4 className="title-6-bold">
                        Pele mais Saudável e Pelos mais Bonitos
                      </h4>
                      <p className="title-6-regular">
                        Ômegas 3 e 6, biotina e zinco orgânico
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="box-beneficios capitalize">
                    <img
                      src="/images/icon-beneficios/icon-box-beneficios-7.png"
                      alt="Icone box"
                    />
                    <div className="text">
                      <h4 className="title-6-bold">Antioxidantes Naturais</h4>
                      <p className="title-6-regular">
                        Vitamina E, Vitamina A, e SE Orgânico
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="box-beneficios capitalize">
                    <img
                      src="/images/icon-beneficios/icon-box-beneficios-8.png"
                      alt="Icone box"
                    />
                    <div className="text">
                      <h4 className="title-6-bold">
                        Maior Digestibilidade e Aproveitamento dos Nutrientes
                      </h4>
                      <p className="title-6-regular">
                        Nutrientes nobres e proteína de qualidade
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="box-beneficios capitalize">
                    <img
                      src="/images/icon-beneficios/icon-box-beneficios-9.png"
                      alt="Icone box"
                    />
                    <div className="text">
                      <h4 className="title-6-bold">Crescimento Saudável</h4>
                      <p className="title-6-regular">
                        Equilíbrio entre os Minerais
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="box-beneficios capitalize">
                    <img
                      src="/images/icon-beneficios/icon-box-beneficios-10.png"
                      alt="Icone box"
                    />

                    <div className="text">
                      <h4 className="title-6-bold">
                        Sem Corantes e aromatizantes Artificiais
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </Container>
          </div>

          <div className="hide-mobile">
            <Container>
              <div className="box-beneficios capitalize">
                <img
                  src="/images/icon-beneficios/icon-box-beneficios-1.png"
                  alt="Icone box"
                />

                <div className="text">
                  <h4 className="title-6-bold">Manutenção das Articulações</h4>
                  <p className="title-6-regular">
                    Sulfato de condroitina e glicosamina
                  </p>
                </div>
              </div>

              <div className="box-beneficios capitalize">
                <img
                  src="/images/icon-beneficios/icon-box-beneficios-2.png"
                  alt="Icone box"
                />

                <div className="text">
                  <h4 className="title-6-bold">
                    Controle e Redução do Tartáro
                  </h4>
                  <p className="title-6-regular">Hexametafosfato de sódio</p>
                </div>
              </div>

              <div className="box-beneficios capitalize">
                <img
                  src="/images/icon-beneficios/icon-box-beneficios-3.png"
                  alt="Icone box"
                />
                <div className="text">
                  <h4 className="title-6-bold">Favorece a Função Cognitiva</h4>
                  <p className="title-6-regular">DHA</p>
                </div>
              </div>

              <div className="box-beneficios capitalize">
                <img
                  src="/images/icon-beneficios/icon-box-beneficios-4.png"
                  alt="Icone box"
                />
                <div className="texte">
                  <h4 className="title-6-bold">
                    Equilíbrio da Flora Intestinal
                  </h4>
                  <p className="title-6-regular">Prebiótico e beta-glucanas</p>
                </div>
              </div>

              <div className="box-beneficios capitalize">
                <img
                  src="/images/icon-beneficios/icon-box-beneficios-5.png"
                  alt="Icone box"
                />
                <div className="text">
                  <h4 className="title-6-bold">
                    Odor e Volume de Fezes Reduzidos
                  </h4>
                  <p className="title-6-regular">
                    Extrato de yucca e polpa de beterraba
                  </p>
                </div>
              </div>

              <div className="box-beneficios capitalize">
                <img
                  src="/images/icon-beneficios/icon-box-beneficios-6.png"
                  alt="Icone box"
                />
                <div className="text">
                  <h4 className="title-6-bold">
                    Pele mais Saudável e Pelos mais Bonitos
                  </h4>
                  <p className="title-6-regular">
                    Ômegas 3 e 6, biotina e zinco orgânico
                  </p>
                </div>
              </div>

              <div className="box-beneficios capitalize">
                <img
                  src="/images/icon-beneficios/icon-box-beneficios-7.png"
                  alt="Icone box"
                />
                <div className="text">
                  <h4 className="title-6-bold">Antioxidantes Naturais</h4>
                  <p className="title-6-regular">
                    Vitamina E, Vitamina A, e SE Orgânico
                  </p>
                </div>
              </div>

              <div className="box-beneficios capitalize">
                <img
                  src="/images/icon-beneficios/icon-box-beneficios-8.png"
                  alt="Icone box"
                />
                <div className="text">
                  <h4 className="title-6-bold">
                    Maior Digestibilidade e Aproveitamento dos Nutrientes
                  </h4>
                  <p className="title-6-regular">
                    Nutrientes nobres e proteína de qualidade
                  </p>
                </div>
              </div>

              <div className="box-beneficios capitalize">
                <img
                  src="/images/icon-beneficios/icon-box-beneficios-9.png"
                  alt="Icone box"
                />
                <div className="text">
                  <h4 className="title-6-bold">Crescimento Saudável</h4>
                  <p className="title-6-regular">
                    Equilíbrio entre os Minerais
                  </p>
                </div>
              </div>

              <div className="box-beneficios capitalize">
                <img
                  src="/images/icon-beneficios/icon-box-beneficios-10.png"
                  alt="Icone box"
                />

                <div className="text">
                  <h4 className="title-6-bold">
                    Sem Corantes e aromatizantes Artificiais
                  </h4>
                </div>
              </div>
            </Container>
          </div>
        </div>

        <div className="tradicao">
          <Container>
            <h2 className="title-4-bold capitalize">
              A experiência da aquicultura agora dentro do seu lar!
            </h2>

            <div className="image">
              <img
                src="/images/quem-somos-ambar.png"
                alt=""
                className="logo-ambar"
              />
            </div>

            <a
              target={"_blank"}
              href="https://grupoambaramaral.com.br/"
              className="bt link-2-medium"
            >
              Saiba Mais Sobre o Grupo
            </a>
          </Container>
        </div>
      </S.Sobre>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const informationsPage = await api.get<PageInformationProps>(
    "pages/quem-somos"
  );

  return {
    props: {
      information: informationsPage.data,
    },
  };
};
