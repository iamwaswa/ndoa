import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { AppProps } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import { GlobalStyles } from 'styles';
import { Grommet } from 'grommet';
import { Layout } from 'layout';
import { Radial } from 'grommet-icons';
import { StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from 'theme';
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    // * Remove the server-side injected CSS.
    const jssStyles = document.querySelector(`#jss-server-side`);

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Grommet
      theme={{
        carousel: {
          icons: {
            current: Radial,
          },
        },
        global: {
          colors: {
            brand: `#98bcdd`,
            [`light-1`]: `#f9f9f9`,
          },
          font: {
            family: `'Roboto', cursive`,
            size: `16px`,
            height: `16px`,
          },
        },
      }}
    >
      <StylesProvider injectFirst={true}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles />
          <Layout>
            <Component {...pageProps} title="W&C" />
          </Layout>
        </ThemeProvider>
      </StylesProvider>
    </Grommet>
  );
}
