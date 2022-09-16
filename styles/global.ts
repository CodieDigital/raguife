import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --primary-color: #005b65;
    --secundary-color: #69f500;
    --tertiary-color:#65c71c;
    --hover-secundary-color: #4ea50c;
    --blue-color:  #3c91e6;
    --red-color: #ec5252;
    --purple-color:#502c92;
    --container: 1380px;
}

html {
    scroll-behavior: smooth !important;
}

.cmp-revoke-consent{
  position: fixed;
  background-color: #237afc;
  border: unset;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  bottom: 20px;
  left: 20px;
  padding: 0;
  z-index: 5;

  svg {
    width: 28px;
    fill: #fff;
  }
}

body {
  background-color: var(--primary-color);
    overflow-x: hidden !important;
}

body::-webkit-scrollbar {
  width: 7px;
}

body::-webkit-scrollbar-track {
  background: #f1f1f1;
}

body::-webkit-scrollbar-thumb {
  background: #005b65;
}

body::-webkit-scrollbar-thumb:hover {
  background: var( --secundary-color);
}

*:focus {
    outline: transparent !important;
}

.error-message {
    font-size: 13px;
    color: #b70000;
    text-align: left;
    margin-top: 5px;
}

.uppercase {
    text-transform: uppercase;
}

a,
button {
    cursor: pointer;
    text-decoration: none !important;
    transition: 0.25s;
}

a:hover,
button:hover {
    transition: 0.25s;
}

a::after,
a::before {
    transition: 0.3s;
}

a:hover::after,
a:hover::before {
    transition: 0.3s;
}

ol,
ul {
    list-style: none !important;
    padding-left: 0 !important;
    margin-bottom: 0 !important;
}

.capitalize {
  text-transform: capitalize;
}

.container {
    max-width: var(--container);
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
}

  .show-mobile {
    display: none !important;
  }

  @media only screen and (max-width:1600px) {
    .container {
      max-width: 1280px;
    }

    .cmp-revoke-consent{
      height: 55px;
      width: 55px;
      bottom: 19px;
      left: 19px;

      svg {
        width: 25px;
        fill: #fff;
      }
    }
  }

  @media only screen and (max-width:1400px) {
    .container {
      max-width: 1080px;
    }

    .cmp-revoke-consent{
      height: 52px;
      width: 52px;
      bottom: 18px;
      left: 18px;

      svg {
        width: 23.5px;
        fill: #fff;
      }
    }
  }

  @media only screen and (max-width:1200px) {
    .container {
      max-width: 980px;
    }

    .cmp-revoke-consent{
      height: 49px;
      width: 49px;
      bottom: 17px;
      left: 17px;

      svg {
        width: 23px;
        fill: #fff;
      }
    }
  }

  @media only screen and (max-width:1024px) {
    .container {
      max-width: 840px;
    }

    .cmp-revoke-consent{
      height: 46px;
      width: 46px;
      bottom: 16px;
      left: 16px;

      svg {
        width: 22px;
        fill: #fff;
      }
    }
  }


  @media only screen and (max-width: 900px) {
    .error-message {
      font-size: 12px;
      margin-top: 4px;
      padding-left: 10px;
    }

    .container {
      max-width: 740px;
    }
  }

  @media only screen and (max-width:768px) {
    .show-mobile {
      display: flex !important;
    }

    .hide-mobile {
      display: none !important;
    }

    .container {
      max-width: 640px;
    }
    
    .cmp-revoke-consent{
      height: 42px;
      width: 42px;
      bottom: 15.5px;
      left: 15.5px;

      svg {
        width: 19px;
        fill: #fff;
      }
    }
  }

  @media only screen and (max-width:500px) {
    .container {
      max-width: 95%;
    }

    .cmp-revoke-consent{
      height: 38px;
      width: 38px;
      bottom: 13.5px;
      left: 13.5px;

      svg {
        width: 16px;
        fill: #fff;
      }
    }
  }
`;
