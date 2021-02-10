import { Action } from './action';
import { Content } from './content';
import { Header } from './header';
import { Item } from 'types/database';
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { RegistryItemContainer } from './styles';
import { useCashGiftAmount } from './hooks';

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
  const {
    amount,
    currency,
    updateAmount,
    updateCurrency,
  } = useCashGiftAmount();

  return (
    <>
      <RegistryItemContainer>
        <section>
          <Header
            cashGift={cashGift}
            contribution={contribution}
            name={name}
            price={price}
          />
          <Content
            amount={amount}
            cashGift={cashGift}
            currency={currency}
            description={description}
            image={image}
            purchased={purchased}
            updateAmount={updateAmount}
            updateCurrency={updateCurrency}
          />
        </section>
        <Action
          amount={amount}
          cashGift={cashGift}
          currency={currency}
          link={link}
          name={name}
          purchased={purchased}
        />
      </RegistryItemContainer>
    </>
  );
}
