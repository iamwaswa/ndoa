import { Currency, FunctionType } from 'types';

import { ChangeEvent } from 'react';
import { Contribute } from './contribute';
import Image from 'next/image';
import { Item } from 'types/database';
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { RegistryItemContent } from './styles';
import { SanityBlockContent } from 'components/blockContent';

interface IContentProps extends Pick<Item, 'description'> {
  amount: string;
  contribution: number;
  currency: Currency;
  image: { id: string; url: string };
  total: number;
  updateAmount: FunctionType<{ target: { value: string } }, void>;
  updateCurrency: FunctionType<
    [ChangeEvent<{ name?: string; value: unknown }>],
    void
  >;
}

export function Content({
  amount,
  contribution,
  currency,
  description,
  image,
  total,
  updateAmount,
  updateCurrency,
}: IContentProps): JSX.Element {
  return (
    <RegistryItemContent>
      <section className="content">
        <Image
          layout="responsive"
          height={200}
          width={275}
          priority={true}
          src={image.url}
        />
        <SanityBlockContent content={description} linkColor="#ffffff" />
      </section>
      <Contribute
        amount={amount}
        contribution={contribution}
        currency={currency}
        total={total}
        updateAmount={updateAmount}
        updateCurrency={updateCurrency}
      />
    </RegistryItemContent>
  );
}
