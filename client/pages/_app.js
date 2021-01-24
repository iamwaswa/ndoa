import { Grommet } from 'grommet';
import { Layout } from '../layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <Grommet
      theme={{
        global: {
          font: {
            family: 'Roboto',
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
