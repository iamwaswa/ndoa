import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    /* Viewport limits */
    --max-width: 960px;

    /* Colors */
    --light-blue: #98bcdd;
    --dark-blue: #212738;
    --gold: #d6b069;

    /* Base Font */
    --base-font-display: swap;
    --base-font-family: 'Abhaya Libre', sans-serif;
    --base-font-style: normal;
    --base-font-weight: 400;
    
    /* Title Font */
    --title-font-display: swap;
    --title-font-family: 'Playfair Display', cursive;
    --title-font-style: italic;
    --title-font-weight: 400;
  }

  html,
  body {
    background-color: var(--dark-blue);
    font-display: var(--base-font-display);
    font-family: var(--base-font-family);
    font-style: var(--base-font-style);
    font-weight: var(--base-font-weight);
    min-width: 320px;
  }

  a {
    color: var(--light-blue);
    text-decoration: none;
    position: relative;

    &:after {
      content: '';
      border-bottom: 3px solid var(--light-blue);
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
    }
    
    &:hover {
      color: var(--light-blue);
      text-decoration: none;
    }
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
`;
