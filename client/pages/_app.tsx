import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import { AppProps } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import { GlobalStyles } from 'styles';
import { Layout } from 'layout';
import { ThemeProvider as MaterialUIThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';
import { SubmitContributionContextProvider } from 'context';
import { ToastContainer } from 'react-toastify';
import { theme } from 'theme';
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect((): void => {
    // * Remove the server-side injected CSS.
    const jssStyles = document.querySelector(`#jss-server-side`);

    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <StylesProvider injectFirst={true}>
      <MaterialUIThemeProvider theme={theme}>
        <StyledComponentsThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles />
          <ToastContainer
            position="top-center"
            autoClose={10000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick={true}
            rtl={false}
            pauseOnFocusLoss={true}
            draggable={true}
            pauseOnHover={true}
          />
          <SubmitContributionContextProvider>
            <Layout>
              <Component {...pageProps} title="W&C" />
            </Layout>
          </SubmitContributionContextProvider>
        </StyledComponentsThemeProvider>
      </MaterialUIThemeProvider>
    </StylesProvider>
  );
}
