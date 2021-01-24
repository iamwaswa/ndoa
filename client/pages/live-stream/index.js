import Head from 'next/head';

export default function LiveStreamPage({ title }) {
  return (
    <>
      <Head>
        <title>{title} | Live stream</title>
      </Head>
      <section>Live stream page goes here...</section>
    </>
  );
}
