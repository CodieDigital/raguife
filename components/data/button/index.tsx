import Link from "next/link";

import { LoaderCircle } from "../loader-circle";

import * as S from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<any> {
  text: string;
  backgroundColor?: string;
  href?: string;
  type?: "submit" | "button";
  loading?: boolean;
}

export function ButtonComponent({
  text,
  backgroundColor,
  href,
  type,
  loading,
  ...props
}: ButtonProps) {
  return (
    <S.Button
      $loading={loading}
    >
      {href && !type ? (
        <Link href={href} passHref>
          <a href="replace" className="link-2-medium" style={{pointerEvents: props.disabled ? "none" : "all"}} {...props}>
          {loading ? <LoaderCircle size={40} /> : text}
          </a>
        </Link>
      ) : (
        <button className="link-2-medium" type={type ? type : "submit"} disabled={loading} {...props}>
          {loading ? <LoaderCircle size={40} /> : text}
        </button>
      )}
    </S.Button>
  );
}
