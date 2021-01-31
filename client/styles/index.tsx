import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html,
  body {
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

  :root {
    --primary: #98bcdd;
    --white: #f9f9f9;
    --gray: #e4e4e4;
    --red: #ff4040;
    --yellow: #ffaa15;
    --green: #00c753;

    --max-width: 720px;
  }
`;
