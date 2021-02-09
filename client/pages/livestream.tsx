import Head from 'next/head';
import { PageProps } from 'types';
import { ParagraphWrapper } from 'components/paragraphWrapper';
import { Text } from 'styles/text';
import { TextPageWrapper } from 'components/textPageWrapper';

export default function LivestreamPage({ title }: PageProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{title} | Livestream</title>
      </Head>
      <TextPageWrapper>
        <ParagraphWrapper>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </ParagraphWrapper>
      </TextPageWrapper>
    </>
  );
}
