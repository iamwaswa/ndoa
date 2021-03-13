import { Action } from './action';
import { Content } from './content';
import { Header } from './header';
import { Item } from 'types/database';
import { RegistryItemContainer } from './styles';
import { useCashGiftAmount } from './hooks';

interface IRegistryItemProps extends Omit<Item, 'picture'> {
  image: { id: string; url: string };
}

export function RegistryItem({
  contribution,
  description,
  goal,
  image,
  name,
  slug,
}: IRegistryItemProps): JSX.Element {
  const {
    amount,
    currency,
    updateAmount,
    updateCurrency,
  } = useCashGiftAmount();

  return (
    <>
      <RegistryItemContainer>
        <section className="item">
          <Header contribution={contribution} goal={goal} name={name} />
          <Content
            amount={amount}
            contribution={contribution}
            currency={currency}
            description={description}
            image={image}
            total={goal}
            updateAmount={updateAmount}
            updateCurrency={updateCurrency}
          />
        </section>
        <Action
          amount={amount}
          contribution={contribution}
          currency={currency}
          name={name}
          slug={slug}
          total={goal}
        />
      </RegistryItemContainer>
    </>
  );
}
