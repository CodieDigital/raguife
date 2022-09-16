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
  }

  @media only screen and (max-width:1400px) {
    .container {
      max-width: 1080px;
    }
  }

  @media only screen and (max-width:1200px) {
    .container {
      max-width: 980px;
    }
  }

  @media only screen and (max-width:1024px) {
    .container {
      max-width: 840px;
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
  }

  @media only screen and (max-width:500px) {
    .container {
      max-width: 95%;
    }
  }
`;
