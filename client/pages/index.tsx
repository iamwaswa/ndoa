import { Box, Button, ButtonType } from 'grommet';
import { GetStaticProps, GetStaticPropsResult } from 'next';

import { Carousel } from 'react-responsive-carousel';
import { FC } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { PageProps } from 'types';
import styled from 'styled-components';

const Container = styled(Box)`
  flex-grow: 1;
  position: relative;
  height: 100%;
  width: 100%;
  margin: 0 auto;

  @media and (min-width: 900px) {
    margin-bottom: 32px;
  }

  & .carousel-root,
  .carousel.carousel-slider,
  .carousel .slider-wrapper {
    display: flex;
    flex-direction: column;
  }

  & .carousel-root,
  .carousel.carousel-slider,
  .carousel .slider-wrapper,
  .carousel .slider.animated {
    height: 100%;
    width: 100%;
    flex-grow: 1;
  }

  & .carousel .control-dots {
    display: flex;
    justify-content: center;

    & > * + * {
      margin-left: 8px;
    }
  }
`;

interface IThumbProps extends ButtonType {
  selected: boolean;
}

const Thumb = styled<FC<IThumbProps>>(Button)`
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

interface IHomePageGetStaticPropsResult {
  images: Array<{
    id: string;
    url: string;
  }>;
}

export default function HomePage({
  images,
  title,
}: PageProps<IHomePageGetStaticPropsResult>): JSX.Element {
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
          renderIndicator={(clickHandler, isSelected) => (
            <Thumb selected={isSelected} onClick={clickHandler} />
          )}
        >
          {images.map(({ id, url }) => (
            <Image
              key={id}
              layout="fill"
              objectFit="cover"
              objectPosition="center center"
              src={url}
              quality={100}
            />
          ))}
        </Carousel>
      </Container>
    </>
  );
}

export function getStaticProps(): GetStaticPropsResult<IHomePageGetStaticPropsResult> {
  return {
    props: {
      images: [
        {
          id: `1`,
          url: `https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fGNvdXBsZXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=720&h=400&q=100`,
        },
        {
          id: `2`,
          url: `https://images.unsplash.com/photo-1501631259223-89d4e246ed23?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvdXBsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&h=400&q=100`,
        },
        {
          id: `3`,
          url: `https://images.unsplash.com/photo-1521145239174-279dc2227166?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvdXBsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&h=400&q=100`,
        },
        {
          id: `4`,
          url: `https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvdXBsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&h=400&q=100`,
        },
        {
          id: `5`,
          url: `https://images.unsplash.com/photo-1513279922550-250c2129b13a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Y291cGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&h=400&q=100`,
        },
        {
          id: `6`,
          url: `https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&h=400&q=100`,
        },
        {
          id: `7`,
          url: `https://images.unsplash.com/photo-1490723186985-6d7672633c86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&h=400&q=100`,
        },
        {
          id: `8`,
          url: `https://images.unsplash.com/photo-1505150099521-fde7970bcc3a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y291cGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&h=400&q=100`,
        },
      ],
    },
  };
}
