import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: #FFFFFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, p {
    font: 1.6rem 'Montserrat', sans-serif;
  }

  #root {
    max-width: 1280px;
    margin: 0 auto;
    padding: 24px 32px;
  }

  button {
    cursor: pointer;
  }

  @media (max-width: 650px) {
    html {
      font-size: 55%;
    }
  }

  @media (max-width: 550px) {
    html {
      font-size: 50%;
    }
  }

  @media (max-width: 450px) {
    html {
      font-size: 45%;
    }
  }
`;
