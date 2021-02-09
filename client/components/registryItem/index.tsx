/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  ProgressMeter,
  RegistryItemAction,
  RegistryItemButton,
  RegistryItemContainer,
  RegistryItemContent,
  RegistryItemHeader,
} from './styles';

import { Checkout } from 'components/checkout';
import Image from 'next/image';
import { Item } from 'types/database';
import { ProductNameEnum } from 'enums';
import { SanityBlockContent } from 'components/blockContent';
import Typography from '@material-ui/core/Typography';
import { useCheckout } from './hooks/checkout';
import { useRegistryItem } from './hooks';

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
  const { checkout, toggleCheckout } = useCheckout();

  const purchasedPercentage = useRegistryItem({
    contribution,
    price,
  });

  return (
    <>
      <RegistryItemContainer>
        <section>
          <RegistryItemHeader
            title={
              <section className="title">
                <Typography>{name}</Typography>
                {cashGift ? null : <Typography>${price}</Typography>}
              </section>
            }
            subheader={
              cashGift && price !== undefined ? (
                <ProgressMeter progress={purchasedPercentage}>
                  <Typography>
                    {`${Math.floor(purchasedPercentage)}% contributed${
                      purchasedPercentage === 100 ? `!!!` : ``
                    }`}
                  </Typography>
                </ProgressMeter>
              ) : null
            }
          />
          <RegistryItemContent>
            <Image
              layout="responsive"
              height={200}
              width={275}
              priority={true}
              src={image.url}
            />
            <SanityBlockContent content={description} />
          </RegistryItemContent>
        </section>
        <RegistryItemAction>
          {cashGift ? (
            <RegistryItemButton
              color="primary"
              disabled={purchased}
              variant="extended"
              onClick={toggleCheckout}
            >
              {purchased ? `Purchased!` : `Contribute`}
            </RegistryItemButton>
          ) : (
            <RegistryItemButton
              color="primary"
              disabled={purchased}
              href={link}
              //@ts-ignore
              rel="noopener noreferrer"
              target="_blank"
              variant="extended"
            >
              {purchased ? `Purchased!` : `Buy`}
            </RegistryItemButton>
          )}
        </RegistryItemAction>
      </RegistryItemContainer>
      <Checkout
        product={{
          name: name.toLowerCase().replace(/\s/g, ``) as ProductNameEnum,
          price,
        }}
        showCheckout={checkout}
        title={name}
        closeCheckout={toggleCheckout}
      />
    </>
  );
}
