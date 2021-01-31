import Box, { BoxProps } from '@material-ui/core/Box';
import { green, red, yellow } from '@material-ui/core/colors';

import BlockContent from '@sanity/block-content-to-react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { ComponentType } from 'react';
import Fab from '@material-ui/core/Fab';
import Image from 'next/image';
import { Item } from 'types/database';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { theme } from 'theme';
import { useRegistryItem } from './hooks';

const CardContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 300px;
  padding: ${theme.spacing()}px;

  & > * {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

interface IProgressMeterProps extends BoxProps {
  progress?: number;
}

const ProgressMeter = styled<ComponentType<IProgressMeterProps>>(Box)`
  display: flex;
  align-items: center;
  background-color: var(--gray);
  border-radius: 20px;
  margin-bottom: ${theme.spacing()}px;
  padding: ${theme.spacing()}px ${theme.spacing(2)}px;
  position: relative;

  &:after {
    background-color: ${({ progress }) => {
      if (progress < 50) {
        return red[500];
      } else if (progress < 75) {
        return yellow[500];
      }

      return green[500];
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

const Description = styled(Typography)`
  margin: 0;
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
    <CardContainer>
      <CardHeader>
        <Box>
          <Typography>{name}</Typography>
          {cashGift ? null : <Typography>${price}</Typography>}
        </Box>
        {typeof contribution === `number` ? (
          <ProgressMeter progress={purchasedPercentage}>
            <Typography>
              {`${Math.floor(purchasedPercentage)}% contributed${
                purchasedPercentage === 100 ? `!!!` : ``
              }`}
            </Typography>
          </ProgressMeter>
        ) : null}
      </CardHeader>
      <CardContent>
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
      </CardContent>
      <CardActions>
        <Fab
          color="primary"
          disabled={purchased}
          variant="extended"
          onClick={link ? openLink : purchaseItem}
        >
          {cashGift
            ? `Contribute${purchased ? `d!` : ``}`
            : `${purchased ? `Purchased!` : `Buy`}`}
        </Fab>
      </CardActions>
    </CardContainer>
  );
}
