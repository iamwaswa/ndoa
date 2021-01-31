import { Box, BoxTypes } from 'grommet';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Item, Registry, SanityKeyed } from 'types/database';

import { FC } from 'react';
import Head from 'next/head';
import { PageProps } from 'types';
import { RegistryItem } from 'components/registryItem';
import SanityClient from '@sanity/client';
import { buildImageUrl } from 'utils/buildImageUrl';
import styled from 'styled-components';

interface IGridProps extends BoxTypes {
  count: number;
}

const Grid = styled<FC<IGridProps>>(Box)`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(${({ count }) => count}, 1fr);
  grid-gap: 24px;
  margin: 0 auto;
  max-width: 1200px;

  @media only screen and (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(${({ count }) => Math.ceil(count / 2)}, 1fr);
  }
`;

export default function RegistryPage({
  gifts,
  title,
}: PageProps<
  InferGetServerSidePropsType<typeof getServerSideProps>
>): JSX.Element {
  return (
    <>
      <Head>
        <title>{title} | Registry</title>
      </Head>
      <Grid
        count={gifts.length}
        pad={{ bottom: `medium`, horizontal: `medium` }}
      >
        {gifts.map(({ _key, ...gift }) => (
          <RegistryItem key={_key} {...gift} />
        ))}
      </Grid>
    </>
  );
}

interface IRegistryPageProps {
  gifts: Array<
    SanityKeyed<
      Omit<Item, 'picture'> & {
        image: {
          id: string;
          url: string;
        };
      }
    >
  >;
}

export const getServerSideProps: GetServerSideProps<IRegistryPageProps> = async () => {
  const client = SanityClient({
    dataset: process.env.SANITY_DATASET,
    projectId: process.env.SANITY_PROJECT_ID,
    useCdn: false,
  });

  const { gifts } = await client.fetch<Pick<Registry, 'gifts'>>(
    `*[_type == 'registry'][0]{
      gifts
    }`
  );

  return {
    props: {
      gifts: gifts.map(({ picture, ...gift }) => ({
        ...gift,
        image: {
          id: gift._key,
          url: buildImageUrl(client, picture)
            .maxHeight(200)
            .maxWidth(275)
            .url(),
        },
      })),
    },
  };
};
