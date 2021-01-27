import { Box } from 'grommet';
import Head from 'next/head';

export default function RegistryPage({ title }) {
  return (
    <>
      <Head>
        <title>{title} | Registry</title>
      </Head>
      <Box>Registry page will go here...</Box>
    </>
  );
}
