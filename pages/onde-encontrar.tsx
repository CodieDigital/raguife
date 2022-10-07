import Head from "next/head";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";

import {
  GetUnidades,
  ListUnits,
  UnidadesProps,
} from "src/services/getUnidades";

import { Layout } from "components/layout";
import { Container } from "components/data/container";


interface Point {
  latitude: string;
  longitude: string;
  city: string;
  rua: string;
  phone: string;
  whats: string;
}
interface LocalizacaoPageProps {
  mapPoints: UnidadesProps;
}

import * as S from "styles/pages/localizacao";
import { NotFound } from "styles/pages/notfound";
import { AnyReactComponent } from "components/data/map-icon";

export default function LocalizacaoPage({
  mapPoints: { items },
}: LocalizacaoPageProps) {
  const [mapPointsState, setMapPointsState] = useState(items);
  const [mapsState, setMapsState] = useState<{ map: any; maps: any } | null>(
    null
  );
  const [defaultProps, setDefaultProps] = useState({
    center: {
      lat: -23.303922834531214,
      lng: -51.18911148591293,
    },
    zoom: 8,
  });

  const router = useRouter();

  async function HandleSearch(value) {
    const searchLocalization = items.filter(
      (point) =>
        point.cidade.toLowerCase().includes(value.toLowerCase()) ||
        point.rua.toLowerCase().includes(value.toLowerCase())
    );
    if (searchLocalization) {
      setMapPointsState(searchLocalization);
    } else {
      setMapPointsState(items);
    }
  }

  function getLocation(card: ListUnits) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((e) => showPosition(card, e));
    }
  }

  async function showPosition(card, position) {
    await router.replace({
      pathname: "/onde-encontrar",
      query: {
        userLatitude: position.coords.latitude,
        userLongitude: position.coords.longitude,
        finalLatitude: card?.latitude,
        finalLongitude: card?.longitude,
      },
    });
    router.reload();
  }

  const apiIsLoaded = (map, maps, search) => {
    if (search) {
      const directionsRenderer = new google.maps.DirectionsRenderer();
      directionsRenderer.setMap(map);
      const origin = {
        lat: Number(search.latitude),
        lng: Number(search.longitude),
      };

      setDefaultProps({ center: origin, zoom: 8 });

      return;
    }
    if (router.query.userLatitude) {
      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer();
      directionsRenderer.setMap(map);
      const origin = {
        lat: Number(router.query.userLatitude),
        lng: Number(router.query.userLongitude),
      };
      const destination = {
        lat: Number(router.query.finalLatitude),
        lng: Number(router.query.finalLongitude),
      };
      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(result);
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    }
  };

  useEffect(() => {
    if (mapPointsState.length === 1 && mapsState) {
      apiIsLoaded(mapsState.map, mapsState.maps, mapPointsState[0]);
    }
  }, [mapPointsState, defaultProps.zoom]);

  useEffect(() => {
      const teste = document.querySelectorAll(".icon");

      teste.forEach((t: any) => {
        t.style.position = "absolute"
        t.style.top = "50%" 
        t.style.left = "50%" 
        t.style.transform = "translate(-50%, -111%)" 
        t.style.top = "50%" 
      })
  }, [mapsState])

  return (
    <Layout>
      <Head>
        <title>Onde encontrar</title>
        <meta
          name="description"
          content="Encontre a únidade Raguife mais próxima de você"
        />
        <meta
          itemProp="description"
          content="Encontre a únidade Raguife mais próxima de você"
        />
        <meta
          name="twitter:description"
          content="Encontre a únidade Raguife mais próxima de você"
        />
        <meta
          name="og:description"
          content="Encontre a únidade Raguife mais próxima de você"
        />
        <meta property="og:title" content="Onde encontrar" />
        <meta property="og:url" content={router.query.pathname?.toString()} />
        <link rel="canonical" href={router.pathname} />
      </Head>

      <S.Localizacao>
        <div className="top">
          <Container>
            <div className="box-left">
              <h2 className="title-2-bold">Onde Encontrar</h2>

              <p className="paragraph-1-medium">
                Encontre nossos produtos na loja física mais próxima de você.
              </p>
            </div>
            <img
              className="absolute-image"
              src="/images/icon-pet-shop.png"
              alt="Icone logo"
            />
          </Container>
        </div>

        <div className="search">
          <Container>
            <input
              name="search"
              type="text"
              placeholder="Digite uma localização"
              className="paragraph-1-regular"
              onChange={(e) => HandleSearch(e.target.value)}
            />
          </Container>
        </div>

        <div className="container-localizacao">
          <div className="results">
            {router.query.userLatitude && (
              <a className="clean" href="/onde-encontrar">
                Limpar rota
              </a>
            )}
            {mapPointsState.length === 0 && (
              <p className="paragraph-1-medium">Nenhuma loja encontrada</p>
            )}

            <div className="cards-results">
              {mapPointsState.map((card) => {
                return (
                  <div
                    className="card-localization"
                    key={card.latitude + card.longitude + "card"}
                  >
                    <h4 className="title-7-bold">{card.cidade}</h4>

                    <h4 className="title-7-regular">{card.rua}</h4>

                    {card.telefone && (
                      <div className="with-icon">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                          >
                            <g>
                              <g>
                                <path d="M15.544 11.306l-3.5-1.5a.75.75 0 0 0-.875.216l-1.55 1.894A11.583 11.583 0 0 1 4.08 6.378l1.894-1.55a.748.748 0 0 0 .216-.875l-1.5-3.5A.755.755 0 0 0 3.83.02l-3.25.75a.75.75 0 0 0-.581.73C0 9.517 6.497 16 14.5 16a.75.75 0 0 0 .731-.581l.75-3.25a.76.76 0 0 0-.437-.863z" />
                              </g>
                            </g>
                          </svg>
                        </span>
                        <a href={"tel:" + card.telefone}>{card.telefone}</a>
                      </div>
                    )}

                    {card.celular && (
                      <div className="with-icon">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                          >
                            <g>
                              <g>
                                <path d="M12.05 10.754c-.184.458-1.02.876-1.388.895-.369.02-.38.286-2.388-.587-2.008-.872-3.216-2.994-3.31-3.13-.096-.137-.779-1.11-.742-2.088.037-.98.573-1.441.764-1.633a.77.77 0 0 1 .544-.23c.159-.002.261-.004.378 0 .117.005.293-.024.445.38.152.405.516 1.398.562 1.5.047.101.075.219.004.349-.072.13-.109.212-.213.324-.105.113-.22.252-.314.338-.104.095-.213.199-.104.402.11.203.488.87 1.064 1.42.74.705 1.378.94 1.575 1.046.197.108.314.096.436-.033.122-.128.523-.562.665-.756.14-.194.273-.156.455-.083.18.073 1.148.591 1.345.698.197.107.328.162.375.247.047.085.033.483-.152.94zM8.146 0C3.807 0 .291 3.49.291 7.794c0 1.472.411 2.85 1.127 4.025L0 16l4.349-1.381a7.87 7.87 0 0 0 3.796.969c4.338 0 7.855-3.49 7.855-7.794C16 3.489 12.483 0 8.145 0z" />
                              </g>
                            </g>
                          </svg>
                        </span>
                        <a href={"tel:" + card.celular}>{card.celular}</a>
                      </div>
                    )}
                    <button
                      className="link-2-regular"
                      type="button"
                      onClick={() => {
                        getLocation(card);
                      }}
                    >
                      Traçar rota
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="map">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyCZhoHmvRP1B3gpx380ZvKvfoxWt-fzH_Q",
              }}
              yesIWantToUseGoogleMapApiInternals
              center={defaultProps.center}
              zoom={defaultProps.zoom}
              onGoogleApiLoaded={({ map, maps }) => {
                setMapsState({
                  map,
                  maps,
                });
                apiIsLoaded(map, maps, null);
              }}
              onChange={(e) => setDefaultProps((oldState) => ({...oldState, zoom: e.zoom}))}
            >
              {mapPointsState.map((point, index) => (
                <AnyReactComponent
                  key={point.latitude + point.longitude + "point" + index}
                  lat={point.latitude}
                  lng={point.longitude}
                />
              ))}
            </GoogleMapReact>
          </div>
        </div>
      </S.Localizacao>
    </Layout>
  );
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const responseUnidades = await GetUnidades(ctx);

  if (!responseUnidades) {
    return {
      props: {
        mapPoints: [],
      },
      notFound: true,
    };
  }

  const newUnidadeList = {
    ...responseUnidades,
    items: responseUnidades.items.map((u) => ({
      ...u,
      latitude: u.latitude.replaceAll(" ", ""),
      longitude: u.longitude.replaceAll(" ", ""),
    })),
  };

  return {
    props: {
      mapPoints: newUnidadeList,
    },
  };
};
