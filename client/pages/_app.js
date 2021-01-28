import 'styles/globals.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Grommet } from 'grommet';
import { Layout } from 'layout';
import { Radial } from 'grommet-icons';

export default function MyApp({ Component, pageProps }) {
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
      <Layout>
        <Component {...pageProps} title="W&C" />
      </Layout>
    </Grommet>
  );
}
