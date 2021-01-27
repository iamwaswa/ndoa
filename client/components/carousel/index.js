import { Box, Button } from 'grommet';

import Image from 'next/image';
import styled from 'styled-components';
import { useCarousel } from './hooks';

const Container = styled(Box)`
  position: relative;
  height: 100%;
  width: 100%;
`;

const BottomContainer = styled(Box)`
  position: absolute;
  bottom: 16px;
  left: 0;
  width: 100%;
`;

const Control = styled(Button)`
  background-color: transparent;
  border-radius: 50%;
  border: 2px solid
    ${({ selected }) => (selected ? `var(--brand)` : `var(--white)`)};
  padding: 0px;
  position: relative;
  height: 16px;
  width: 16px;

  &:after {
    background-color: ${({ selected }) =>
      selected ? `var(--brand)` : `transparent`};
    border-radius: 50%;
    content: '';
    position: absolute;
    top: 2px;
    bottom: 2px;
    left: 2px;
    right: 2px;
    opacity: ${({ selected }) => (selected ? 1 : 0)};
    transform: scale(${({ selected }) => (selected ? 1 : 0)});
    transform-origin: center;
    transition: all 300ms ease-in-out;
  }
`;

export function Carousel({ images }) {
  const [selectedImageIndex, selectImageIndex] = useCarousel(images.length);

  return (
    <Container>
      <Image layout="fill" objectFit="cover" src={images[selectedImageIndex]} />
      <BottomContainer direction="row" justify="center">
        <Box direction="row" gap="small">
          {images.map((_, index) => (
            <Control
              key={index}
              selected={selectedImageIndex === index}
              onClick={selectImageIndex(index)}
            />
          ))}
        </Box>
      </BottomContainer>
    </Container>
  );
}
