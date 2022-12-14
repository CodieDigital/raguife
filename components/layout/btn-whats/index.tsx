import * as S from "./styles";

export function ButtonWhats() {
  return (
    <S.ButtonWhatsComponent>
      <a target={"_blank"} href="https://api.whatsapp.com/send?phone=55017996126414&text=Bem%20vindos%20a%20Raguife%2C%20como%20podemos%20ajudar%20%3F">
        {/* <img src="/images/button-whats.png" alt="" /> */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="89"
          height="89"
          viewBox="0 0 89 89"
        >
          <defs>
            <mask id="5f08b" width="2" height="2" x="-1" y="-1">
              <path  d="M4 2h80v80H4z" />
              <path d="M45.779 2.195c-21.107 0-38.22 16.979-38.22 37.925 0 5.73 1.282 11.163 3.733 16.345.251.532-.69 4.685-7.292 25.517 21.648-6.454 25.96-7.32 26.659-7.015 4.393 1.923 9.62 3.078 15.12 3.078C66.889 78.045 84 61.064 84 40.12 84 19.174 66.889 2.195 45.779 2.195z" />
            </mask>
            <filter
              id="5f08a"
              width="112"
              height="115"
              x="-12"
              y="-14"
              filterUnits="userSpaceOnUse"
            >
              <feOffset dy="3" in="SourceGraphic" result="FeOffset1027Out" />
              <feGaussianBlur
                in="FeOffset1027Out"
                result="FeGaussianBlur1028Out"
                stdDeviation="2.4 2.4"
              />
            </filter>
          </defs>
          <g>
            <g>
              <g>
                <g>
                  <g filter="url(#5f08a)">
                    <path
                      fill="none"
                      d="M45.779 2.195c-21.107 0-38.22 16.979-38.22 37.925 0 5.73 1.282 11.163 3.733 16.345.251.532-.69 4.685-7.292 25.517 21.648-6.454 25.96-7.32 26.659-7.015 4.393 1.923 9.62 3.078 15.12 3.078C66.889 78.045 84 61.064 84 40.12 84 19.174 66.889 2.195 45.779 2.195z"
                      mask='url("#5f08b")'
                    />
                    <path
                      fillOpacity=".16"
                      d="M45.779 2.195c-21.107 0-38.22 16.979-38.22 37.925 0 5.73 1.282 11.163 3.733 16.345.251.532-.69 4.685-7.292 25.517 21.648-6.454 25.96-7.32 26.659-7.015 4.393 1.923 9.62 3.078 15.12 3.078C66.889 78.045 84 61.064 84 40.12 84 19.174 66.889 2.195 45.779 2.195z"
                    />
                  </g>
                  <path
                    d="M45.779 2.195c-21.107 0-38.22 16.979-38.22 37.925 0 5.73 1.282 11.163 3.733 16.345.251.532-.69 4.685-7.292 25.517 21.648-6.454 25.96-7.32 26.659-7.015 4.393 1.923 9.62 3.078 15.12 3.078C66.889 78.045 84 61.064 84 40.12 84 19.174 66.889 2.195 45.779 2.195z"
                  />
                </g>
                <g>
                  <path
                    fill="#65c71c"
                    d="M61.075 51.926c-.73 1.81-4.032 3.461-5.488 3.537-1.455.078-1.497 1.128-9.43-2.318-7.932-3.447-12.704-11.828-13.08-12.368-.377-.538-3.073-4.38-2.928-8.247.147-3.867 2.264-5.692 3.02-6.45a3.039 3.039 0 0 1 2.149-.905c.625-.01 1.03-.02 1.491-.002.462.017 1.156-.097 1.757 1.5.6 1.598 2.037 5.525 2.221 5.925.184.4.298.864.015 1.378-.284.515-.43.837-.841 1.282-.414.444-.871.993-1.24 1.333-.413.376-.843.786-.41 1.59.433.803 1.926 3.435 4.201 5.605 2.924 2.79 5.446 3.715 6.222 4.136.778.424 1.242.377 1.724-.13.48-.509 2.066-2.222 2.624-2.987.558-.768 1.08-.617 1.798-.329.716.29 4.536 2.336 5.314 2.758.778.422 1.297.64 1.483.974.186.335.127 1.909-.602 3.718zM45.646 9.446c-17.135 0-31.027 13.784-31.027 30.788a30.47 30.47 0 0 0 4.452 15.898l-5.6 16.517 17.179-5.457a31.09 31.09 0 0 0 14.996 3.83c17.137 0 31.028-13.786 31.028-30.788 0-17.004-13.89-30.787-31.028-30.787z"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </a>
    </S.ButtonWhatsComponent>
  );
}
