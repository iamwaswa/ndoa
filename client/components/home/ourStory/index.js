import { Box, Text } from 'grommet';

import { OurStoryContent } from './content';
import styled from 'styled-components';
import { useRef } from 'react';
import { useViewportWidth } from '../../../hooks/viewportWidth';

const Container = styled(Box)`
  margin: 0 auto;
  max-width: 900px;
`;

export function OurStory() {
  const mobile = useRef(340);

  const viewportWidth = useViewportWidth();

  return (
    <Box
      pad={{
        horizontal: viewportWidth < mobile.current ? `medium` : `large`,
        vertical: `medium`,
      }}
    >
      <Text size="xxlarge" textAlign="center">
        Our Story
      </Text>
      <Container
        align="center"
        direction="column"
        pad={{
          horizontal: `small`,
          vertical: `medium`,
        }}
      >
        <OurStoryContent
          content="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and
        more recently with desktop publishing software like Aldus PageMaker
        including versions of Lorem Ipsum."
        />
        <OurStoryContent
          content="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and
        more recently with desktop publishing software like Aldus PageMaker
        including versions of Lorem Ipsum."
        />
        <OurStoryContent
          content="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and
        more recently with desktop publishing software like Aldus PageMaker
        including versions of Lorem Ipsum."
        />
        <OurStoryContent
          content="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and
        more recently with desktop publishing software like Aldus PageMaker
        including versions of Lorem Ipsum."
        />
      </Container>
    </Box>
  );
}
