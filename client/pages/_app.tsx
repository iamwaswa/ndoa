import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import { AppProps } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import { GlobalStyles } from 'styles';
import { Layout } from 'layout';
import { LoadingScreen } from 'components/loadingScreen';
import { StylesProvider } from '@material-ui/core/styles';
import { SubmitContributionContextProvider } from 'context';
import { ThemeProvider } from '@material-ui/core/styles';
import { ToastContainer } from 'react-toastify';
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
      </ThemeProvider>
    </StylesProvider>
  );
}
