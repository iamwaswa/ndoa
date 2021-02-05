import {
  ProgressMeter,
  RegistryItemAction,
  RegistryItemContainer,
  RegistryItemContent,
  RegistryItemHeader,
  RegistryItemLink,
} from './styles';

import Image from 'next/image';
import { Item } from 'types/database';
import { SanityBlockContent } from 'components/blockContent';
import Typography from '@material-ui/core/Typography';
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
  const purchasedPercentage = useRegistryItem({
    contribution,
    price,
  });

  return (
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
            cashGift ? (
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
        <RegistryItemLink
          color="primary"
          disabled={purchased}
          href={link}
          rel="noopener noreferrer"
          target="_blank"
          variant="extended"
        >
          {cashGift
            ? `Contribute${purchased ? `d!` : ``}`
            : `${purchased ? `Purchased!` : `Buy`}`}
        </RegistryItemLink>
      </RegistryItemAction>
    </RegistryItemContainer>
  );
}
