import { Content, PageProps } from 'types';

import { GetStaticProps } from 'next';
import Head from 'next/head';
import { SanityBlockContent } from 'components/blockContent';
import SanityClient from '@sanity/client';
import { Story } from 'types/database';
import { TextPageWrapper } from 'components/textPageWrapper';
import { buildImageUrl } from 'utils/buildImageUrl';

export default function StoryPage({
  content,
  title,
}: PageProps<IStoryPageProps>): JSX.Element {
  return (
    <>
      <Head>
        <title>{title} | Story</title>
      </Head>
      <TextPageWrapper>
        <SanityBlockContent content={content} />
      </TextPageWrapper>
    </>
  );
}

interface IStoryPageProps {
  content: Content;
}

export const getStaticProps: GetStaticProps<IStoryPageProps> = async () => {
  const client = SanityClient({
    dataset: process.env.SANITY_DATASET,
    projectId: process.env.SANITY_PROJECT_ID,
    useCdn: true,
  });

  const { text } = await client.fetch<Pick<Story, 'text'>>(
    `*[_type == 'story'][0]{
      text
    }`
  );

  const height = 360;

  const maxWidth = 640;

  return {
    props: {
      content: text.map((content) => {
        return content._type === `image`
          ? {
              _type: content._type,
              height,
              maxWidth,
              url: buildImageUrl(client, content)
                .minWidth(320)
                .width(maxWidth)
                .height(height)
                .url(),
            }
          : content;
      }),
    },
  };
};
