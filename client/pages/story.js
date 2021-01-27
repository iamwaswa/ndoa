import { Box } from 'grommet';
import Head from 'next/head';

export default function StoryPage({ title }) {
  return (
    <>
      <Head>
        <title>{title} | Story</title>
      </Head>
      <Box>Story page will go here...</Box>
    </>
  );
}
