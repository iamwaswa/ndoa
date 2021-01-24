import Head from 'next/head';

export default function HomePage({ title }) {
  return (
    <>
      <Head>
        <title>{title} | Home</title>
      </Head>
      <section>Home page goes here...</section>
    </>
  )
}