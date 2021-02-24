import { Content, GiftRegistry, PageProps } from 'types';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useMediaQuery, useTheme } from '@material-ui/core';

import { BreathingRoom } from 'components/breathingRoom';
import { BreathingRoomSpacingEnum } from 'enums';
import Head from 'next/head';
import { MasonryGrid } from 'components/masonryGrid';
import { Registry } from 'types/database';
import { RegistryItem } from 'components/registryItem';
import { RegistryItemButton } from 'components/registryItem/action/styles';
import { SanityBlockContent } from 'components/blockContent';
import SanityClient from '@sanity/client';
import { createGiftRegistry } from 'utils/getRegistryAsync';
import { loadStripe } from '@stripe/stripe-js';
import styled from 'styled-components';
import { useRegistryContributionSuccess } from 'hooks/registryContributionSuccess';

export const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  {
    apiVersion: `2020-08-27`,
  }
);

const RegistryContainer = styled.div`
  ${({ theme }) => `
    display: flex;
    justify-content: center;
    padding: ${theme.spacing(1, 0, 2)};
  `}
`;

const RegistryAction = styled.div`
  ${({ theme }) => `
    display: flex;
    justify-content: center;
    margin: ${theme.spacing(1, 0, 4)};
  `}
`;

export default function RegistryPage({
  content,
  title,
}: PageProps<InferGetStaticPropsType<typeof getStaticProps>>): JSX.Element {
  const theme = useTheme();

  const mobile = useMediaQuery(theme.breakpoints.down(`xs`));

  useRegistryContributionSuccess();

  return (
    <>
      <Head>
        <title>{title} | Registry</title>
      </Head>
      <BreathingRoom breathe={BreathingRoomSpacingEnum.HORIZONTAL}>
        <SanityBlockContent content={content.text} />
        <RegistryAction>
          <RegistryItemButton
            color="secondary"
            invert={true}
            variant="extended"
            onClick={goToGiftRegistry}
          >
            Go to gift registry
          </RegistryItemButton>
        </RegistryAction>
        <RegistryContainer>
          <MasonryGrid
            columns={mobile ? 1 : 2}
            gap={theme.spacing(2)}
            numberOfItems={content.gifts.length}
            renderItem={(giftIndex: number): JSX.Element => (
              <RegistryItem {...content.gifts[giftIndex]} />
            )}
          />
        </RegistryContainer>
      </BreathingRoom>
    </>
  );
}

type RegistryPageContent = {
  gifts: GiftRegistry;
  text: Content;
};

interface IRegistryPageProps {
  content: RegistryPageContent;
}

export const getStaticProps: GetStaticProps<IRegistryPageProps> = async () => {
  const client = SanityClient({
    dataset: process.env.SANITY_DATASET,
    projectId: process.env.SANITY_PROJECT_ID,
    useCdn: false,
  });

  const { gifts, text } = await client.fetch<Pick<Registry, 'gifts' | 'text'>>(
    `*[_type == 'registry'][0]{
      gifts,
      text,
    }`
  );

  return {
    props: {
      content: {
        gifts: createGiftRegistry(client, { gifts }),
        text: text.map((content) => {
          return content._type === `image` ? null : content;
        }),
      },
    },
    revalidate: 60,
  };
};

function goToGiftRegistry() {
  window.open(
    `https://www.myregistry.com/wedding-registry/waswa-olunga-and-clare-anne-queenan-vancouver-bc/2719347`,
    `giftregistry`,
    `location,menubar,noopener,noreferrer,resizable,scrollbars,status,toolbar`
  );
}
