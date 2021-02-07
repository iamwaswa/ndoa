import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --max-width: 720px;
    --light-blue: #98bcdd;
    --dark-blue: #212738;
    --gold: #d6b069;
    --title-font: 'Playfair Display', serif;
    --base-font: 'Josefin Sans', sans-serif;
  }

  html,
  body {
    background-color: var(--dark-blue);
    font-family: var(--base-font);
    min-width: 320px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
`;
