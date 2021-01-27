import { Box } from 'grommet';
import Head from 'next/head';

export default function LivestreamPage({ title }) {
  return (
    <>
      <Head>
        <title>{title} | Livestream</title>
      </Head>
      <Box>Livestream page will go here...</Box>
    </>
  );
}
