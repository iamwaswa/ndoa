import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { GiftRegistry, PageProps } from 'types';

import { BreathingRoom } from 'components/breathingRoom';
import { BreathingRoomSpacingEnum } from 'enums';
import Head from 'next/head';
import { Loader } from 'components/loader';
import { MasonryGrid } from 'components/masonryGrid';
import { RegistryItem } from 'components/registryItem';
import SanityClient from '@sanity/client';
import { getRegistryAsync } from 'utils/getRegistryAsync';
import { loadStripe } from '@stripe/stripe-js';
import styled from 'styled-components';
import { theme } from 'theme';
import { useEffect } from 'react';
import { useMediaQuery } from '@material-ui/core';
import { useRegistryContext } from 'context/registry';

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
  initialGifts,
  title,
}: PageProps<InferGetStaticPropsType<typeof getStaticProps>>): JSX.Element {
  const mobile = useMediaQuery(theme.breakpoints.down(`xs`));

  const { gifts, refreshing, fetchData } = useRegistryContext(initialGifts);

  useEffect((): void => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <Head>
        <title>{title} | Registry</title>
      </Head>
      <BreathingRoom breathe={BreathingRoomSpacingEnum.HORIZONTAL}>
        <RegistryContainer>
          <Loader loading={refreshing} loadingText="Registry updating...">
            <MasonryGrid
              columns={mobile ? 1 : 2}
              gap={theme.spacing(2)}
              numberOfItems={gifts.length}
              renderItem={(giftIndex: number): JSX.Element => (
                <RegistryItem {...gifts[giftIndex]} />
              )}
            />
          </Loader>
        </RegistryContainer>
      </BreathingRoom>
    </>
  );
}

interface IRegistryPageProps {
  initialGifts: GiftRegistry;
}

export const getStaticProps: GetStaticProps<IRegistryPageProps> = async () => {
  const client = SanityClient({
    dataset: process.env.SANITY_DATASET,
    projectId: process.env.SANITY_PROJECT_ID,
    useCdn: false,
  });

  const initialGifts = await getRegistryAsync(client);

  return {
    props: {
      initialGifts,
    },
  };
};
