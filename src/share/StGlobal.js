import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: sans-serif;
  }

  body {
    height: 100%;
  }

  #root {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`