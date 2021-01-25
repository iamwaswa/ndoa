import { Box } from 'grommet';
import { FirstSection } from '../components/home/firstSection';
import Head from 'next/head';
import styled from 'styled-components';
import { useNavigationHeightContext } from '../context/navigationHeight';

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  height: ${({ navigationHeight }) => {
    return navigationHeight ? `calc(100vh - ${navigationHeight}px)` : `100vh`;
  }};
`;

export default function HomePage({ title }) {
  const { navigationHeight } = useNavigationHeightContext();

  return (
    <>
      <Head>
        <title>{title} | Home</title>
      </Head>
      <Container navigationHeight={navigationHeight} tag="section">
        <FirstSection />
      </Container>
    </>
  );
}
