import '../index.css';

import { Grommet } from 'grommet';
import { Layout } from '../layout';
import { NavigationHeightContextProvider } from '../context/navigationHeight';

export default function MyApp({ Component, pageProps }) {
  return (
    <NavigationHeightContextProvider>
      <Grommet
        theme={{
          global: {
            colors: {
              brand: '#98bcdd',
            },
            font: {
              family: 'Arapey',
              size: '16px',
              height: '16px',
            },
          },
        }}
      >
        <Layout>
          <Component {...pageProps} title="Ndoa" />
        </Layout>
      </Grommet>
    </NavigationHeightContextProvider>
  );
}
