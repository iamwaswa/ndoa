import { Box, Button, ButtonType } from 'grommet';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Carousel } from 'react-responsive-carousel';
import { FC } from 'react';
import Head from 'next/head';
import { Home } from 'types/database';
import Image from 'next/image';
import { PageProps } from 'types';
import SanityClient from '@sanity/client';
import { buildImageUrl } from 'utils/buildImageUrl';
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

export default function HomePage({
  images,
  title,
}: PageProps<InferGetStaticPropsType<typeof getStaticProps>>): JSX.Element {
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
              priority={true}
              quality={100}
              rel="preload"
              src={url}
            />
          ))}
        </Carousel>
      </Container>
    </>
  );
}

type HomePageImage = {
  id: string;
  url: string;
};

interface IHomePageProps {
  images: Array<HomePageImage>;
}

export const getStaticProps: GetStaticProps<IHomePageProps> = async () => {
  const client = SanityClient({
    dataset: process.env.SANITY_DATASET,
    projectId: process.env.SANITY_PROJECT_ID,
    useCdn: true,
  });

  const { pictures } = await client.fetch<Pick<Home, 'pictures'>>(
    `*[_type == 'home'][0]{
      pictures
    }`
  );

  return {
    props: {
      images: pictures.map(
        (picture): HomePageImage => ({
          id: picture._key,
          url: buildImageUrl(client, picture).width(720).minWidth(320).url(),
        })
      ),
    },
  };
};
