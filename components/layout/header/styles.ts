import styled from "styled-components";

export const Header = styled.header`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  padding: 18px 0 15px;
  z-index: 99;
  background-color: var(--primary-color);

  .menu-mobile {
    position: fixed;
    height: 100vh;
    width: 100%;
    right: 0;
    top: 0;
    z-index: -10;
    visibility: hidden;
    transition: 0.3s ease-in-out;
    display: flex;
    justify-content: flex-end;

    .filter {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.4);
      display: flex;
      justify-content: flex-end;
    }

    .menu {
      width: 30%;
      min-width: 250px;
      height: 100%;
      background-color: var(--primary-color);
      position: relative;
      z-index: 99;
      transform: translateX(100%);
      transition: 0.3s ease-in-out;
      padding: 25px;

      nav {
        display: flex;
        flex-direction: column;
        flex-direction: column;
        height: auto;
        align-items: flex-start;
        gap: 10px;

        a,
        span {
          color: #fff;
          cursor: pointer;
          font-size: inherit;
        }

        .dropdown {
          span {
            display: flex;
            align-items: center;
            gap: 15px;
          }

          svg {
            stroke: #fff;
            transform: rotate(90deg);
            transition: all 0.4s;
            width: 6px;
            height: 10px;
          }

          .subMenu {
            display: none;
          }
        }

        .dropdown.active {
          svg {
            transform: rotate(-90deg);
          }

          .subMenu {
            display: flex;
            flex-direction: column;
            margin-left: 15px;
            gap: 8px;
            margin-top: 5px;

            a {
              font-size: 15px;
            }
          }
        }
      }

      .redes-sociais {
        padding-top: 30px;
        margin-top: 25px;
        border-top: 1px solid #fff;
        display: flex;
        gap: 10px;
      }
    }

    .close {
      color: #fff;
      display: flex;
      justify-content: flex-end;
      transition: 0.3s;
      width: 20px;
      margin-left: auto;
      cursor: pointer;
    }

    .close:hover {
      color: var(--secundary-color);
    }
  }

  .block-bar {
    display: none;
    width: 35px;
    flex-direction: column;
    cursor: pointer;
    align-self: center;
    gap: 7px;

    div {
      background-color: #fff;
      width: 100%;
      height: 3px;
    }
  }

  .menu-mobile.active {
    z-index: 99;
    visibility: visible;
    .menu {
      transform: translateX(0%);
    }
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    max-width: 192px;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  .box-right {
    display: flex;
    justify-content: space-between;

    .nav {
      display: flex;
      align-items: center;
      gap: 2.5vw;
      max-width: 520px;

      a,
      span {
        color: #fff;
        position: relative;
        z-index: 5;
      }

      a:hover {
        color: var(--tertiary-color);
      }
    }

    .dropdown {
      position: relative;

      .no-animation {
        position: relative;
        color: rgba(255, 255, 255, 0);
        z-index: 5;

        .animation {
          position: absolute;
          top: -3px;
          left: 0;
          right: 0;
          margin: 0 auto;
          color: #fff;
          transition: 0.3s;
        }

        .animation:hover {
          transform: scale(0.8);
          transition: 0.3s;
        }
      }

      .subMenu {
        display: none;
        flex-direction: column;
        bottom: 15px;
        position: absolute;
        background-color: rgba(177, 177, 177, 0.72);
        transition: all 0.3s;
        transform: translateY(100%);
        min-width: 124px;

        span {
          background-color: var(--primary-color);
          color: var(--primary-color);
        }

        a,
        span {
          padding: 12px 14px 12px 15px;
        }

        a:hover {
          color: var(--primary-color);
        }

        a + a {
          padding-top: 10px;
          margin-top: 5px;
          border-top: 1px solid #fff;
        }
      }
    }

    .dropdown:hover {
      .subMenu {
        display: flex;
      }
    }

    .nav + * {
      margin-left: 2.5vw;
    }

    .redes-sociais {
      display: flex;
      gap: 0.83vw;
    }
  }

  @media only screen and (max-width: 1600px) {
    .logo {
      max-width: 175px;
    }

    .box-right {
      .dropdown {
        .subMenu {
          bottom: 17px;
        }
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    padding: 15px 0 13px;

    .logo {
      max-width: 155px;
    }

    .box-right {
      .dropdown {
        .subMenu {
          bottom: 21px;
        }
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 12px 0 10px;

    .logo {
      max-width: 140px;
    }

    .box-right {
      .dropdown {
        .subMenu {
          bottom: 26px;
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .show-1024 {
      display: flex !important;
    }

    .hide-1024 {
      display: none !important;
    }

    .box-right {
      display: none;
    }

    .block-bar {
      display: flex;
    }

    .logo {
      max-width: 130px;
    }
  }
  @media only screen and (max-width: 768px) {
    .hide-768 {
      display: none !important;
    }

    .menu-mobile {
      .menu {
        padding: 20px;

        .redes-sociais {
          padding-top: 20px;
          margin-top: 15px;
          gap: 10px;
        }

        nav {
          .dropdown.active {
            .subMenu {
              a {
                font-size: 13px;
              }
            }
          }
        }
      }

      .close {
        margin-bottom: 10px;
      }
    }

    .logo {
      max-width: 120px;
    }
  }

  @media only screen and (max-width: 650px) {
    .menu-mobile {
      .menu {
        min-width: 340px;
      }
    }
  }

  @media only screen and (max-width: 550px) {
    .menu-mobile {
      .menu {
        min-width: 280px;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .menu-mobile {
      .menu {
        min-width: 250px;
      }
    }

    .logo {
      max-width: 115px;
    }

    .block-bar {
      width: 32px;

      div {
        height: 2px;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    padding: 10px 0 8px;

    .menu-mobile {
      .menu {
        padding: 15px;
        min-width: 240px;
      }
    }

    .logo {
      max-width: 90px;
    }
  }
`;
