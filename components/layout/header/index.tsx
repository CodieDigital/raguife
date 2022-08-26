import { useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { Container, RedesSociasComponent } from "components/data/components";

import * as S from "./styles";

export function HeaderComponent() {
  const [menu, setMenu] = useState(false);
  const [dropdown, setdropdown] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMenu(false);
  }, [router]);

  return (
    <S.Header>
      <div className={`menu-mobile ${menu ? "active" : ""}`}>
        <div className="filter" onClick={() => setMenu(false)}></div>

        <div className="menu">
          <div
            className="close title-5-bold"
            onClick={() => setMenu(false)}
          >
            X
          </div>

          <nav className="link-1-bold">
            <Link href="/" passHref>
              <a href="replaced">Home</a>
            </Link>

            <Link href={"/quem-somos"} passHref>
              <a href="replaced" className="link-1-bold">
                quem somos
              </a>
            </Link>

            <div className={`dropdown ${dropdown ? "active" : ""}`}>
              <span
                className="link-1-bold"
                onClick={() => setdropdown(!dropdown)}
              >
                <span>produtos</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                >
                  <g>
                    <g transform="rotate(-90 4 6)">
                      <path
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="20"
                        d="M9 3v0L4 9v0l-5-6v0"
                      />
                    </g>
                  </g>
                </svg>
              </span>

              <div className="subMenu">
                <Link href={"/produtos/para-caes"} passHref>
                  <a href="replaced" className="link-1-medium">
                    para cães
                  </a>
                </Link>

                <Link href={"/produtos/para-gatos"} passHref>
                  <a href="replaced" className="link-1-medium">
                    para gatos
                  </a>
                </Link>
              </div>
            </div>

            <Link href={"/contato"} passHref>
              <a href="replaced" className="link-1-bold">
                contato
              </a>
            </Link>
          </nav>
          <RedesSociasComponent />
        </div>
      </div>

      <Container>
        <Link href={"/"} passHref>
          <a href="replaced" className="logo">
            <img src="/images/logo.png" alt="Logo header" />
          </a>
        </Link>

        <div className="box-right">
          <ul className="nav">
            <li>
              <Link href={"/"} passHref>
                <a href="replaced" className="link-1-regular">
                  home
                </a>
              </Link>
            </li>

            <li>
              <Link href={"/quem-somos"} passHref>
                <a href="replaced" className="link-1-regular">
                  quem somos
                </a>
              </Link>
            </li>

            <li className="dropdown">
              <span className="link-1-regular no-animation">
                produtos
                <span className="link-1-regular animation">produtos</span>
              </span>

              <div className="subMenu">
                <span>#</span>

                <Link href={"/produtos/para-caes"} passHref>
                  <a href="replaced" className="link-2-regular">
                    para cães
                  </a>
                </Link>

                <Link href={"/produtos/para-gatos"} passHref>
                  <a href="replaced" className="link-2-regular">
                    para gatos
                  </a>
                </Link>
              </div>
            </li>

            <li>
              <Link href={"/contato"} passHref>
                <a href="replaced" className="link-1-regular">
                  contato
                </a>
              </Link>
            </li>
          </ul>

          <RedesSociasComponent />
        </div>

        <div className="block-bar" onClick={() => setMenu(!menu)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Container>
    </S.Header>
  );
}
