/* eslint-disable @typescript-eslint/ban-ts-comment */
import { RegistryItemHeader, RegistryItemProgressMeter } from './styles';

import { Item } from 'types/database';
import Typography from '@material-ui/core/Typography';
import { usePurchasedPercentage } from './hooks';

export function Header({
  contribution,
  cashGift,
  name,
  price,
}: Pick<Item, 'contribution' | 'cashGift' | 'name' | 'price'>): JSX.Element {
  const purchasedPercentage = usePurchasedPercentage({
    contribution,
    price,
  });

  return (
    <RegistryItemHeader
      title={
        <section className="title">
          <Typography>{name}</Typography>
          {cashGift ? null : <Typography>${price}</Typography>}
        </section>
      }
      subheader={
        cashGift && price !== undefined ? (
          <RegistryItemProgressMeter progress={purchasedPercentage}>
            <Typography>
              {`${Math.floor(purchasedPercentage)}% contributed${
                purchasedPercentage === 100 ? `!!!` : ``
              }`}
            </Typography>
          </RegistryItemProgressMeter>
        ) : null
      }
    />
  );
}
