import Head from 'next/head';

export default function LivestreamPage({ title }) {
  return (
    <>
      <Head>
        <title>{title} | Livestream</title>
      </Head>
      <section>Live stream page goes here...</section>
    </>
  )
}