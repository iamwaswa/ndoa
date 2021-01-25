import { Box, Text } from 'grommet';

import styled from 'styled-components';

const TextContent = styled(Text)`
  @media and (max-width: 400px) {
    font-size: 80%;
  }
`;

const Image = styled(Box)`
  height: 300px;
  width: 50%;
  min-width: 280px;
`;

export function OurStoryContent({ content }) {
  return (
    <>
      <TextContent textAlign="center">{content}</TextContent>
      <Image background="black" margin={{ vertical: `large` }} />
    </>
  );
}
