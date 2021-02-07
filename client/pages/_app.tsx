import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { AppProps } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import { GlobalStyles } from 'styles';
import { Layout } from 'layout';
import { LoadingScreen } from 'components/loadingScreen';
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
    <StylesProvider injectFirst={true}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <LoadingScreen />
        <Layout>
          <Component {...pageProps} title="W&C" />
        </Layout>
      </ThemeProvider>
    </StylesProvider>
  );
}
