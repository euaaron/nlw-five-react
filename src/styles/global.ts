import { createGlobalStyle } from 'styled-components';
import Themes, { ITheme } from '../configs/Themes';

const theme: ITheme = new Themes();

export default createGlobalStyle`
  ::selection {
    background-color: var(--color);
    color: var(--light-background);
  }

  :root {  
    --default-background: ${theme.background};
    --light-background: ${theme.selectionBackground};
    --black: ${theme.black};
    --blue: ${theme.blue};
    --cyan: ${theme.cyan};
    --green: ${theme.green};
    --purple: ${theme.purple};
    --red: ${theme.red};
    --white: ${theme.white};
    --yellow: ${theme.yellow};
    --brightBlack: ${theme.brightBlack};
    --brightBlue: ${theme.brightBlue};
    --brightCyan: ${theme.brightCyan};
    --brightGreen: ${theme.brightGreen};
    --brightPurple: ${theme.brightPurple};
    --brightRed: ${theme.brightRed};
    --brightWhite: ${theme.brightWhite};
    --brightYellow: ${theme.brightYellow};
    --color: ${theme.foreground};
  }
  
  html {
    font-size: 75%;
  }
  
  #__next {
    width: 100vw;
    height: 100vh;
    display: flex;

    > main {    
      display: flex;
      flex-direction: column;
      flex: 3;
    }
  } 
  
  @media (max-width: 1080px) {
    html {
      font-size: 87.5%;
    }
    
  }

  @media (max-width: 720px) {
    html {
      font-size: 93.75%;
    }
  }

  * {  
    box-sizing: border-box;
    outline: 0;
    padding: 0;
    margin: 0;
    transition: background .8s, border .8s;
  }
  
  body {
    background-color: var(--default-background);
  }

  body, input, textarea, button {
    font: 500 1rem Inter, sans-serif;
    color: var(--color);
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: var(--white);
  }

  h1 {
    font-size: 2rem;
  }

  h2 { 
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
