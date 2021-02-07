import Box, { BoxProps } from '@material-ui/core/Box';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import Carousel from 'react-bootstrap/Carousel';
import { ComponentType } from 'react';
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

  .carousel.slide {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    .carousel-inner {
      display: flex;
      flex-direction: column;
      flex-grow: 1;

      .carousel-item {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }
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
        <Carousel>
          {images.map(({ id, url }) => (
            <Carousel.Item key={id}>
              <Image
                key={id}
                layout="fill"
                objectFit="cover"
                priority={true}
                quality={100}
                src={url}
              />
            </Carousel.Item>
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
