import Image from "next/image";
import { baseImage, baseImageGallery } from "src/services/api";

import * as S from "./styles";

interface NextImageProps {
  isBaseUrl?: boolean;
  isBaseImageGallery?: boolean;
  src: string | undefined;
  layout: "fill" | "fixed" | "intrinsic" | "responsive" | "raw" | undefined;
  loading?: "eager" | "lazy" | undefined;
  priority?: boolean;
  alt?: string;
}

export function NextImage({ src, layout, isBaseUrl, isBaseImageGallery, alt }: NextImageProps) {
  return (
    <S.Image>
      <Image
        src={src ? (isBaseUrl ? baseImage + src : isBaseImageGallery ?  baseImageGallery + src : src) : "/images/default-image.webp"}
        layout={layout}
      />
    </S.Image>
  );
}
