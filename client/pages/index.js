import { Box, Text } from 'grommet';

import Head from 'next/head';
import styled from 'styled-components';

const HeroImage = styled(Box)`
  height: 50vw;
  min-height: 300px;
`;

export default function HomePage({ title }) {
  return (
    <>
      <Head>
        <title>{title} | Home</title>
      </Head>
      <Box direction="column" flex={true} tag="section">
        <HeroImage background="black" tag="section"></HeroImage>
        <Box background="brand" pad={{ vertical: `medium` }} tag="section">
          <Text size="large" textAlign="center">
            April 24th, 2021
          </Text>
        </Box>
        <Box tag="section">Home page content will go here...</Box>
      </Box>
    </>
  );
}
