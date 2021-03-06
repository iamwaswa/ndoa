import { GetStaticProps, InferGetStaticPropsType } from 'next';
import styled, { css } from 'styled-components';

import Head from 'next/head';
import { Home } from 'types/database';
import Image from 'next/image';
import { PageProps } from 'types';
import SanityClient from '@sanity/client';
import Typography from '@material-ui/core/Typography';
import { buildImageUrl } from 'utils/buildImageUrl';

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const TextContainer = styled.div`
  ${({ theme }) => `
    margin-top: ${theme.spacing(1.25)}px;
  `}
`;

const Text = styled(Typography)`
  ${({ theme }) => css`
    font-display: var(--title-font-display);
    font-family: var(--title-font-family);
    font-size: ${theme.typography.h5.fontSize};
    font-style: var(--title-font-style);
    font-weight: var(--title-font-weight);
    margin-bottom: ${theme.spacing()}px;
    text-align: center;

    ${theme.breakpoints.up(`sm`)} {
      font-size: ${theme.typography.h4.fontSize};
    }

    & > span {
      font-size: ${theme.typography.h5.fontSize};
    }
  `}
`;

export default function HomePage({
  width,
  height,
  coverImageURL,
  title,
}: PageProps<InferGetStaticPropsType<typeof getStaticProps>>): JSX.Element {
  return (
    <>
      <Head>
        <title>{title} | Home</title>
      </Head>
      <ImageContainer>
        <Image
          layout="intrinsic"
          width={width}
          height={height}
          priority={true}
          quality={100}
          src={coverImageURL}
        />
      </ImageContainer>
      <TextContainer>
        <Text>
          April 24th, 2021 · 11:00<span>am</span> PST
        </Text>
        <Text>All Saints Parish</Text>
        <Text>Coquitlam, BC</Text>
        <Text>Canada</Text>
      </TextContainer>
    </>
  );
}

interface IHomePageProps {
  width: number;
  height: number;
  coverImageURL: string;
}

export const getStaticProps: GetStaticProps<IHomePageProps> = async () => {
  const client = SanityClient({
    dataset: process.env.SANITY_DATASET,
    projectId: process.env.SANITY_PROJECT_ID,
    useCdn: true,
  });

  const width = 960;
  const height = (1 / 2) * width;

  const { picture } = await client.fetch<Pick<Home, 'picture'>>(
    `*[_type == 'home'][0]{
      picture
    }`
  );

  return {
    props: {
      width,
      height,
      coverImageURL: buildImageUrl(client, picture)
        .width(width)
        .height(height)
        .minWidth(320)
        .url(),
    },
    revalidate: 60,
  };
};
