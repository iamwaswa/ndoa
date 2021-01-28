import { Box, Button } from 'grommet';

import { Carousel } from 'react-responsive-carousel';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';

const Container = styled(Box)`
  position: relative;
  height: 100%;
  width: 100%;
  margin: 0 auto;

  @media and (min-width: 900px) {
    margin-bottom: 32px;
  }

  & .carousel-root,
  .carousel.carousel-slider,
  .carousel .slider-wrapper,
  .carousel .slider.animated {
    height: 100%;
    width: 100%;
  }

  & .carousel .control-dots {
    display: flex;
    justify-content: center;

    & > * + * {
      margin-left: 8px;
    }
  }
`;

const Thumb = styled(Button)`
  background-color: transparent;
  border-radius: 50%;
  border: 2px solid
    ${({ selected }) => (selected ? `var(--brand)` : `var(--white)`)};
  padding: 0px;
  position: relative;
  height: 18px;
  width: 18px;

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

export default function HomePage({ images, title }) {
  return (
    <>
      <Head>
        <title>{title} | Home</title>
      </Head>
      <Container>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={5000}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          swipeable={true}
          renderIndicator={(clickHandler, isSelected) => (
            <Thumb selected={isSelected} onClick={clickHandler} />
          )}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              // height={400}
              // width={800}
              layout="fill"
              objectFit="cover"
              objectPosition="center center"
              src={image}
              quality={100}
            />
          ))}
        </Carousel>
      </Container>
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      images: [
        `https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fGNvdXBsZXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=800&h=400&q=100`,
        `https://images.unsplash.com/photo-1501631259223-89d4e246ed23?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvdXBsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=100`,
        `https://images.unsplash.com/photo-1521145239174-279dc2227166?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvdXBsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=100`,
        `https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvdXBsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=100`,
        `https://images.unsplash.com/photo-1513279922550-250c2129b13a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Y291cGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=100`,
        `https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=100`,
        `https://images.unsplash.com/photo-1490723186985-6d7672633c86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=100`,
        `https://images.unsplash.com/photo-1505150099521-fde7970bcc3a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y291cGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=100`,
      ],
    },
  };
}
