import { Box } from 'grommet';
import Head from 'next/head';
import { RegistryItem } from 'components/registryItem';
import styled from 'styled-components';

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(${({ count }) => count}, 1fr);
  grid-gap: 24px;
  margin: 0 auto;
  max-width: 1200px;

  @media only screen and (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(${({ count }) => Math.ceil(count / 2)}, 1fr);
  }

  @media only screen and (min-width: 970px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(${({ count }) => Math.ceil(count / 3)}, 1fr);
  }
`;

export default function RegistryPage({ content, title }) {
  return (
    <>
      <Head>
        <title>{title} | Registry</title>
      </Head>
      <Grid
        count={content.length}
        pad={{ bottom: `medium`, horizontal: `medium` }}
      >
        {content.map((item) => (
          <RegistryItem key={item.name} {...item} />
        ))}
      </Grid>
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      content: [
        {
          name: `Engagement pictures`,
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.`,
          image: `https://images.unsplash.com/photo-1505150099521-fde7970bcc3a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y291cGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=275&h=200&q=100`,
          link: `https://www.google.com`,
          price: 450,
        },
        {
          name: `Honeymoon fund`,
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.`,
          image: `https://images.unsplash.com/photo-1505150099521-fde7970bcc3a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y291cGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=275&h=200&q=100`,
          price: 1500,
        },
        {
          name: `Buy us tea!`,
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.`,
          image: `https://images.unsplash.com/photo-1505150099521-fde7970bcc3a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y291cGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=275&h=200&q=100`,
          price: `Unlimited`,
        },
        {
          name: `Wok`,
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.`,
          image: `https://images.unsplash.com/photo-1505150099521-fde7970bcc3a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y291cGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=275&h=200&q=100`,
          price: 50,
        },
        {
          name: `Cutlery`,
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.`,
          image: `https://images.unsplash.com/photo-1505150099521-fde7970bcc3a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y291cGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=275&h=200&q=100`,
          price: `Unlimited`,
        },
        {
          name: `Bedding`,
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.`,
          image: `https://images.unsplash.com/photo-1505150099521-fde7970bcc3a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y291cGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=275&h=200&q=100`,
          price: 200,
        },
      ],
    },
  };
}
