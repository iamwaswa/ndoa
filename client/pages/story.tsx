import { Box } from 'grommet';
import { Fragment } from 'react';
import { GetStaticPropsResult } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { PageProps } from 'types';
import { ParagraphWrapper } from 'components/paragraphWrapper';
import { TextPageWrapper } from 'components/textPageWrapper';

interface IStoryPageGetStaticPropsResult {
  content: Array<{
    id: string;
    type: `image` | `text`;
    value: string;
  }>;
}

export default function StoryPage({
  content,
  title,
}: PageProps<IStoryPageGetStaticPropsResult>): JSX.Element {
  return (
    <>
      <Head>
        <title>{title} | Story</title>
      </Head>
      <TextPageWrapper>
        {content.map(({ id, type, value }, index) => {
          if (type === `text`) {
            return (
              <Box key={index}>
                <ParagraphWrapper>{value}</ParagraphWrapper>
              </Box>
            );
          } else if (type === `image`) {
            return (
              <Box key={id}>
                <Image
                  layout="intrinsic"
                  src={value}
                  height={400}
                  width={700}
                />
              </Box>
            );
          }

          return <Fragment key={index} />;
        })}
      </TextPageWrapper>
    </>
  );
}

export function getStaticProps(): GetStaticPropsResult<IStoryPageGetStaticPropsResult> {
  return {
    props: {
      content: [
        {
          id: `1`,
          type: `text`,
          value: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        },
        {
          id: `2`,
          type: `image`,
          value: `https://images.unsplash.com/photo-1505150099521-fde7970bcc3a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y291cGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&h=400&q=100`,
        },
        {
          id: `3`,
          type: `text`,
          value: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        },
        {
          id: `4`,
          type: `image`,
          value: `https://images.unsplash.com/photo-1505150099521-fde7970bcc3a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y291cGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&h=400&q=100`,
        },
        {
          id: `5`,
          type: `text`,
          value: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        },
        {
          id: `6`,
          type: `image`,
          value: `https://images.unsplash.com/photo-1505150099521-fde7970bcc3a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y291cGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&h=400&q=100`,
        },
      ],
    },
  };
}
