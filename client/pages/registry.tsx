import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Item, Registry, SanityKeyed } from 'types/database';

import Head from 'next/head';
import { PageProps } from 'types';
import { RegistryItem } from 'components/registryItem';
import SanityClient from '@sanity/client';
import { buildImageUrl } from 'utils/buildImageUrl';
import { loadStripe } from '@stripe/stripe-js';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { MasonryGrid } from 'components/masonryGrid';
import { useMediaQuery } from '@material-ui/core';
import styled from 'styled-components';
import { theme } from 'theme';

export const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  {
    apiVersion: `2020-08-27`,
  }
);

const RegistryContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: ${theme.spacing(1, 0, 2)};
`;

export default function RegistryPage({
  gifts,
  title,
}: PageProps<
  InferGetServerSidePropsType<typeof getServerSideProps>
>): JSX.Element {
  const router = useRouter();

  const mobile = useMediaQuery(theme.breakpoints.down(`xs`));

  useEffect((): void => {
    if (router.query.success) {
      toast.success(`Your contribution was successful!`);
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>{title} | Registry</title>
      </Head>
      <RegistryContainer>
        <MasonryGrid
          columns={mobile ? 1 : 2}
          gap={theme.spacing(2)}
          numberOfItems={gifts.length}
          renderItem={(giftIndex: number): JSX.Element => (
            <RegistryItem {...gifts[giftIndex]} />
          )}
        />
      </RegistryContainer>
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
