import GoogleMapReact from "google-map-react";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import * as S from "styles/pages/localizacao";
import { useRouter } from "next/router";
import { Layout } from "components/layout";
import { Container } from "components/data/container";
import { GetUnidades, ListUnits, UnidadesProps } from "src/services/getUnidades";

const AnyReactComponent = ({ ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="62"
    height="80"
    viewBox="0 0 62 80"
  >
    <g>
      <g>
        <g>
          <path
            fill="#65C71C"
            d="M4.066 46.382A30.99 30.99 0 0 1 0 30.986C0 13.873 13.79 0 30.8 0 47.81 0 61.6 13.873 61.6 30.986a30.98 30.98 0 0 1-4.423 16.007C48.695 64.29 30.801 80 30.801 80S12.39 64.03 4.066 46.382z"
          />
        </g>
        <g>
          <path
            fill="none"
            stroke="#fff"
            stroke-miterlimit="20"
            stroke-width="1.2"
            d="M11.844 47.36c2.232-10.414 8.262-19.552 14.288-26.162C32.466 14.252 37.617 8.784 38.62 9.773c1.038 1.024-.824 6.778-1.164 8.972 3.232.839 3.78 1.735 4.799 3.599 1.125 2.055 2.792 2.38 4.688 2.693 1.615.266 2.795.12 2.816 1.952.003.317-.1 1.875-.23 2.301-.458 1.505-.91 2.53-3.993 2.729-3.115.2-5.253-.226-6.572 2.787-.517 1.18-1.03 3.37-1.229 4.756-.246 1.716-.49 3.374-.458 7.652h-5.478c-1.042 0-2.317.12-2.317-3.588 0-4.77.27-4.489.666-4.53.238-.026 1.749-.073 2.885-.073.839-.001 1.505-.105 1.88-.547.6-.708 1.792-1.89 1.572-2.99-.078-.39-.299-.879-.729-1.296-.85-.825-2.109-1.572-2.046-2.91.069-1.474-1.319-2.327-2.536-3.27l1.666-3.48v0s.284-.43.042-.728c-.331-.408-.739-.135-1.333.125-6.573 2.877-12.954 10.18-15.615 21.91a1.958 1.958 0 0 1-1.91 1.522z"
          />
        </g>
      </g>
    </g>
  </svg>
);
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

export default function LocalizacaoPage({ mapPoints: {items} }: LocalizacaoPageProps) {
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
    const searchLocalization = items.filter((point) =>
      point.cidade.toLowerCase().includes(value.toLowerCase()) || point.rua.toLowerCase().includes(value.toLowerCase())
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
  return (
    <Layout>
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
              placeholder="Digite uma localizacao"
              className="paragraph-1-regular"
              onChange={(e) => HandleSearch(e.target.value)}
            />
          </Container>
        </div>

        <div className="container-localizacao">
          <div className="results">
            <h3 className="-bold uppercase">Resultados</h3>

            {router.query.userLatitude && (
              <a className="clean" href="/onde-encontrar">
                Limpar rota
              </a>
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
            >
              {mapPointsState.map((point) => (
                <AnyReactComponent
                  key={point.latitude + point.longitude + "point"}
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
  const responseProducts = await GetUnidades(ctx);

  return {
    props: {
      mapPoints: responseProducts,
    },
  };
};
