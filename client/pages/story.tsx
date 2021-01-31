import { RichText, Story } from 'types/database';

import BlockContent from '@sanity/block-content-to-react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { PageProps } from 'types';
import SanityClient from '@sanity/client';
import { TextPageWrapper } from 'components/textPageWrapper';

export default function StoryPage({
  text,
  title,
}: PageProps<IStoryPageProps>): JSX.Element {
  return (
    <>
      <Head>
        <title>{title} | Story</title>
      </Head>
      <TextPageWrapper>
        <BlockContent blocks={text} imageOptions={{ w: 720, h: 360 }} />
      </TextPageWrapper>
    </>
  );
}

interface IStoryPageProps {
  text: RichText;
}

export const getStaticProps: GetStaticProps<IStoryPageProps> = async () => {
  const client = SanityClient({
    dataset: process.env.SANITY_DATASET,
    projectId: process.env.SANITY_PROJECT_ID,
    useCdn: true,
  });

  const { text } = await client.fetch<Pick<Story, 'text'>>(
    `*[_type == 'story'][0]{
      text[]{
        ...,
        asset->{
          url
        }
      }
    }`
  );

  return {
    props: {
      text,
    },
  };
};
