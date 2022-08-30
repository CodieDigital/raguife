import Link from "next/link";

import { ButtonComponent } from "components/data/button";
import { Container } from "components/data/container";

import * as S from "./styles";
import React, { useEffect, useRef, useState } from "react";
import { NextImage } from "components/data/NextImage";
import { baseImage } from "src/services/api";
import { Swiper, SwiperSlide } from "swiper/react";

export interface Banner {
  id: number;
  titulo: string;
  subtitulo: string;
  thumbnail: string;
  imagem: string;
  categoriaId: number;
}

interface BannerProps {
  listBanners: Banner[];
}

export const BannerComponent = ({ listBanners }: BannerProps) => {
  const [heightHeader, setHeightHeader] = useState("");
  const scrollToSection = () =>
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });

  useEffect(() => {
    if (process.browser) {
      const header = document.querySelector("header");
      const headerHeight = header?.offsetHeight;

      setHeightHeader("calc(100vh - " + headerHeight + "px)");
    } else {
      setHeightHeader("calc(100vh - " + "65px" + "px)");
    }
  }, []);

  return (
    <S.Banner heightHeader={heightHeader}>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        className={"swiper-banner"}
      >
        {listBanners.map((banner) => (
          <SwiperSlide key={banner.id + banner.titulo}>
            <div className="absolute-image hide-mobile">
              <NextImage src={banner.imagem} isBaseUrl layout="fill" />
            </div>

            <div className="absolute-image show-mobile">
              <NextImage src={banner.thumbnail} isBaseUrl layout="fill" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Container>
        <div className="invisble"></div>
        
        <a
          className="scroll link-1-regular"
          href="#produtos"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="20"
            viewBox="0 0 14 20"
          >
            <g>
              <g>
                <path d="M13.242 12.78a.919.919 0 0 0-1.293-.008L7.667 17.04V.777a.91.91 0 0 0-.914-.907.91.91 0 0 0-.914.907V17.04l-4.282-4.275a.925.925 0 0 0-1.294.007.91.91 0 0 0 .007 1.287l5.836 5.794c.084.077.176.14.288.19a.916.916 0 0 0 .991-.19l5.836-5.794a.896.896 0 0 0 .022-1.28z" />
              </g>
            </g>
          </svg>

          <span>saiba mais</span>
        </a>
      </Container>
    </S.Banner>
  );
};
