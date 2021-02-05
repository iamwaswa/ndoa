import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --max-width: 720px;
    --title-font: 'Playfair Display', serif;
    --base-font: 'Josefin Sans', sans-serif;
  }

  html,
  body {
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
