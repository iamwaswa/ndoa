import Box, { BoxProps } from '@material-ui/core/Box';
import Button, { ButtonProps } from '@material-ui/core/Button';
import { ComponentType, ReactNode } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import Carousel from 'react-slick';
import Head from 'next/head';
import { Home } from 'types/database';
import Image from 'next/image';
import { PageProps } from 'types';
import SanityClient from '@sanity/client';
import { buildImageUrl } from 'utils/buildImageUrl';
import styled from 'styled-components';
import { theme } from 'theme';

const Container = styled<ComponentType<BoxProps>>(Box)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  height: 100%;
  width: 100%;
  margin: 0 auto;

  ${theme.breakpoints.up(`md`)} {
    margin-bottom: ${theme.spacing(2)}px;
  }
`;

const ThumbContainer = styled.ul`
  list-style: none;
`;

interface IThumbProps extends ButtonProps {
  selected?: boolean;
}

const Thumb = styled<ComponentType<IThumbProps>>(Button)`
  background-color: transparent;
  border-radius: 50%;
  border: ${theme.spacing(0.25)}px solid
    ${({ selected }) =>
      selected ? theme.palette.primary.main : theme.palette.grey[300]};
  padding: 0px;
  position: relative;
  height: ${theme.spacing(3)}px;
  width: ${theme.spacing(3)}px;
  min-width: 0;

  &:after {
    background-color: ${({ selected }) =>
      selected ? theme.palette.primary.main : `transparent`};
    border-radius: 50%;
    content: '';
    position: absolute;
    top: ${theme.spacing(0.25)}px;
    bottom: ${theme.spacing(0.25)}px;
    left: ${theme.spacing(0.25)}px;
    right: ${theme.spacing(0.25)}px;
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
          appendDots={(dots: ReactNode): JSX.Element => (
            <ThumbContainer>{dots}</ThumbContainer>
          )}
          arrows={false}
          autoplay={true}
          autoplaySpeed={5000}
          dots={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          customPaging={() => <Thumb />}
        >
          {images.map(({ id, url }) => (
            <Image
              key={id}
              layout="fill"
              priority={true}
              quality={100}
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
