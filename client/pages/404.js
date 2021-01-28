import Head from 'next/head';
import { ParagraphWrapper } from 'components/paragraphWrapper';

export default function NotFoundPage({ title }) {
  return (
    <>
      <Head>
        <title>{title} | Not found</title>
      </Head>
      <ParagraphWrapper>
        Whoops! Looks like you got lost. Hit one of the links above to get back
        to the site
      </ParagraphWrapper>
    </>
  );
}
