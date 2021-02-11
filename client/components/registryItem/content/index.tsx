import { FunctionType, SelectOption } from 'types';

import { ChangeEvent } from 'react';
import { Contribute } from './contribute';
import Image from 'next/image';
import { Item } from 'types/database';
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { RegistryItemContent } from './styles';
import { SanityBlockContent } from 'components/blockContent';
import { SupportedCurrenciesEnum } from 'enums';

export function Content({
  amount,
  currency,
  description,
  image,
  cashGift,
  purchased,
  updateAmount,
  updateCurrency,
}: Pick<Item, 'cashGift' | 'description' | 'purchased'> & {
  amount: number;
  currency: SupportedCurrenciesEnum;
  image: { id: string; url: string };
  updateAmount: FunctionType<{ target: { value: string } }, void>;
  updateCurrency: FunctionType<[ChangeEvent, SelectOption], void>;
}): JSX.Element {
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
        <SanityBlockContent content={description} />
      </section>
      <Contribute
        amount={amount}
        cashGift={cashGift}
        currency={currency}
        purchased={purchased}
        updateAmount={updateAmount}
        updateCurrency={updateCurrency}
      />
    </RegistryItemContent>
  );
}
