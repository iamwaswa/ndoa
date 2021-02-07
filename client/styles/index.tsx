import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --max-width: 720px;
    --light-blue: #98bcdd;
    --dark-blue: #212738;
    --gold: #d6b069;
  }

  html,
  body {
    background-color: var(--dark-blue);
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
