import '../index.css';

import { Grommet } from 'grommet';
import { Layout } from '../layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <Grommet
      theme={{
        global: {
          colors: {
            brand: '#228BE6',
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
  );
}
