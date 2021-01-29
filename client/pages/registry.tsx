import { Box, BoxTypes } from 'grommet';
import { GiftRegistryItem, PageProps } from 'types';

import { FC } from 'react';
import { GetStaticPropsResult } from 'next';
import Head from 'next/head';
import { RegistryItem } from 'components/registryItem';
import styled from 'styled-components';

interface IGridProps extends BoxTypes {
  count: number;
}

const Grid = styled<FC<IGridProps>>(Box)`
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
`;

interface IRegistryPageGetStaticPropsResult {
  content: Array<GiftRegistryItem>;
}

export default function RegistryPage({
  content,
  title,
}: PageProps<IRegistryPageGetStaticPropsResult>) {
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
          <RegistryItem key={item.id} {...item} />
        ))}
      </Grid>
    </>
  );
}

export function getStaticProps(): GetStaticPropsResult<IRegistryPageGetStaticPropsResult> {
  return {
    props: {
      content: [
        {
          id: `1`,
          name: `Engagement pictures`,
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.`,
          image: `https://images.unsplash.com/photo-1505150099521-fde7970bcc3a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y291cGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=275&h=200&q=100`,
          cashGift: true,
          link: `https://www.google.com`,
          price: 450,
          contributed: 265,
          purchased: false,
        },
        {
          id: `2`,
          name: `Honeymoon fund`,
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.`,
          image: `https://images.unsplash.com/photo-1505150099521-fde7970bcc3a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y291cGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=275&h=200&q=100`,
          cashGift: true,
          price: 1500,
          contributed: 1300,
          purchased: false,
        },
        {
          id: `3`,
          name: `Buy us tea!`,
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.`,
          image: `https://images.unsplash.com/photo-1505150099521-fde7970bcc3a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y291cGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=275&h=200&q=100`,
          cashGift: false,
          price: 20,
          purchased: false,
        },
        {
          id: `4`,
          name: `Wok`,
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.`,
          image: `https://images.unsplash.com/photo-1505150099521-fde7970bcc3a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y291cGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=275&h=200&q=100`,
          cashGift: false,
          price: 50,
          purchased: false,
        },
        {
          id: `5`,
          name: `Cutlery`,
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.`,
          image: `https://images.unsplash.com/photo-1505150099521-fde7970bcc3a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y291cGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=275&h=200&q=100`,
          cashGift: false,
          price: 500,
          purchased: false,
        },
        {
          id: `6`,
          name: `Bedding`,
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.`,
          image: `https://images.unsplash.com/photo-1505150099521-fde7970bcc3a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y291cGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=275&h=200&q=100`,
          cashGift: false,
          price: 200,
          purchased: true,
        },
      ],
    },
  };
}
