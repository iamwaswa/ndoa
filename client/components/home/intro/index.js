import { Box, Text } from 'grommet';

import styled from 'styled-components';
import { useDaysToGo } from '../../../hooks/daysToGo';
import { useRef } from 'react';
import { useViewportWidth } from '../../../hooks/viewportWidth';

const HeroImage = styled(Box)`
  background-image: url('https://images.unsplash.com/photo-1490723186985-6d7672633c86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80');
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 300px;
  position: relative;
`;

const OurNameText = styled(Text)`
  position: absolute;
  top: 1rem;
  left: 0;
  right: 0;
`;

const DaysToGoText = styled(Text)`
  color: #ffffff;
  font-style: italic;
  width: fit-content;
`;

export function Intro() {
  const { daysToGo, daysToGoText } = useDaysToGo();

  const xtremeMobile = useRef(340);

  const mobile = useRef(530);

  const viewportWidth = useViewportWidth();

  return (
    <>
      <HeroImage flex={{ grow: 1 }} tag="section">
        <OurNameText size="xxlarge" textAlign="center">
          Waswa & Clare-Anne
        </OurNameText>
      </HeroImage>
      <Box
        align="center"
        background="brand"
        direction="column"
        flex={{ grow: 0 }}
        gap="small"
        pad={{ vertical: `medium` }}
        tag="section"
      >
        <DaysToGoText
          size={
            viewportWidth <= xtremeMobile.current
              ? `medium`
              : viewportWidth <= mobile.current
              ? `xlarge`
              : `xxlarge`
          }
          textAlign="center"
        >
          April 24th, 2021 · {daysToGo} {daysToGoText}
        </DaysToGoText>
      </Box>
    </>
  );
}
