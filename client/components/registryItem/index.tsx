import {
  Box,
  BoxTypes,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Paragraph,
  Text,
} from 'grommet';

import BlockContent from '@sanity/block-content-to-react';
import { FC } from 'react';
import Image from 'next/image';
import { Item } from 'types/database';
import styled from 'styled-components';
import { useRegistryItem } from './hooks';

const CardContainer = styled(Card)`
  max-width: 300px;
`;

interface IProgressMeterProps extends BoxTypes {
  progress?: number;
}

const ProgressMeter = styled<FC<IProgressMeterProps>>(Box)`
  background-color: var(--gray);
  border-radius: 20px;
  position: relative;

  &:after {
    background-color: ${({ progress }) => {
      if (progress < 50) {
        return `var(--red)`;
      } else if (progress < 75) {
        return `var(--yellow)`;
      }

      return `var(--green)`;
    }};
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-top-right-radius: ${({ progress }) => (progress >= 90 ? `20px` : 0)};
    border-bottom-right-radius: ${({ progress }) =>
      progress >= 90 ? `20px` : 0};
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: ${({ progress }) => `${progress}%`};
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;

const Description = styled(Paragraph)`
  margin: 0;
`;

const PrimaryButton = styled(Button)`
  color: var(--white);
`;

export function RegistryItem({
  contribution,
  description,
  image,
  cashGift,
  link,
  name,
  price,
  purchased,
}: Omit<Item, 'picture'> & {
  image: { id: string; url: string };
}): JSX.Element {
  const purchasedPercentage = useRegistryItem({
    contribution,
    price,
  });

  function purchaseItem(): void {
    return;
  }

  function openLink() {
    window.open(
      link,
      name,
      `location,menubar,noopener,noreferrer,resizable,scrollbars,status,toolbar`
    );
  }

  return (
    <CardContainer direction="column" gap="xsmall" pad="medium">
      <CardHeader direction="column" align="stretch" gap="xsmall">
        <Box direction="row" align="center" justify="between">
          <Text>{name}</Text>
          {cashGift ? null : <Text>${price}</Text>}
        </Box>
        {typeof contribution === `number` ? (
          <ProgressMeter
            direction="row"
            align="center"
            justify="start"
            margin={{ bottom: `xxsmall` }}
            pad={{ horizontal: `small`, vertical: `xxsmall` }}
            progress={purchasedPercentage}
          >
            <Text>
              {`${Math.floor(purchasedPercentage)}% contributed${
                purchasedPercentage === 100 ? `!!!` : ``
              }`}
            </Text>
          </ProgressMeter>
        ) : null}
      </CardHeader>
      <CardBody direction="column" gap="xsmall">
        <Image
          layout="responsive"
          height={200}
          width={275}
          priority={true}
          src={image.url}
        />
        <Description>
          <BlockContent blocks={description} />
        </Description>
      </CardBody>
      <CardFooter justify="end">
        <PrimaryButton
          disabled={purchased}
          primary={true}
          label={
            cashGift
              ? `Contribute${purchased ? `d!` : ``}`
              : `${purchased ? `Purchased!` : `Buy`}`
          }
          onClick={link ? openLink : purchaseItem}
        />
      </CardFooter>
    </CardContainer>
  );
}
