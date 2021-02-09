import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import { AppProps } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Elements } from '@stripe/react-stripe-js';
import { GlobalStyles } from 'styles';
import { Layout } from 'layout';
import { LoadingScreen } from 'components/loadingScreen';
import { StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { ToastContainer } from 'react-toastify';
import { loadStripe } from '@stripe/stripe-js';
import { theme } from 'theme';
import { useEffect } from 'react';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  {
    apiVersion: `2020-08-27`,
  }
);

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
        <Elements stripe={stripePromise}>
          <Layout>
            <Component {...pageProps} title="W&C" />
          </Layout>
        </Elements>
      </ThemeProvider>
    </StylesProvider>
  );
}
