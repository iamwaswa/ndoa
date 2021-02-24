import { Content, PageProps } from 'types';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { BreathingRoom } from 'components/breathingRoom';
import { BreathingRoomSpacingEnum } from 'enums';
import Head from 'next/head';
import { Livestream } from 'types/database';
import { SanityBlockContent } from 'components/blockContent';
import SanityClient from '@sanity/client';

export default function LivestreamPage({
  content,
  title,
}: PageProps<InferGetStaticPropsType<typeof getStaticProps>>): JSX.Element {
  return (
    <>
      <Head>
        <title>{title} | Livestream</title>
      </Head>
      <BreathingRoom breathe={BreathingRoomSpacingEnum.HORIZONTAL}>
        <SanityBlockContent content={content} />
      </BreathingRoom>
    </>
  );
}

interface ILivestreamPageProps {
  content: Content;
}

export const getStaticProps: GetStaticProps<ILivestreamPageProps> = async () => {
  const client = SanityClient({
    dataset: process.env.SANITY_DATASET,
    projectId: process.env.SANITY_PROJECT_ID,
    useCdn: false,
  });

  const { text } = await client.fetch<Pick<Livestream, 'text'>>(
    `*[_type == 'livestream'][0]{
      text,
    }`
  );

  return {
    props: {
      content: text.map((content) => {
        return content._type === `image` ? null : content;
      }),
    },
    revalidate: 60,
  };
};
