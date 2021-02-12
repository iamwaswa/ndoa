import { ChangeEvent, useEffect, useState } from 'react';
import { Currency, FunctionType } from 'types';

import { CurrencyNameEnum } from 'enums';
import { currencies } from '@constants';

interface IUseCashGiftAmount {
  amount: number;
  updateAmount: FunctionType<{ target: { value: string } }, void>;
  currency: Currency;
  updateCurrency: FunctionType<
    [ChangeEvent<{ name?: string; value: unknown }>],
    void
  >;
}

export function useCashGiftAmount(): IUseCashGiftAmount {
  const [amount, setAmount] = useState<number>(15);
  const [currency, setCurrency] = useState<Currency>(
    currencies.find(
      (currency: Currency): boolean => currency.name === CurrencyNameEnum.CANADA
    )
  );

  useEffect((): void => {
    setAmount(getMinimumAmountForCurrency(amount, currency));
  }, [amount, currency]);

  function updateAmount(event: { target: { value: string } }): void {
    setAmount(Number(event.target.value));
  }

  function updateCurrency(
    event: ChangeEvent<{ name?: string; value: unknown }>
  ): void {
    if (isSupportedCurrencyName(event.target.value)) {
      setCurrency(
        currencies.find(
          ({ name }: Currency): boolean => name === event.target.value
        )
      );
    }
  }

  return {
    amount,
    updateAmount,
    currency,
    updateCurrency,
  };
}

const currencySymbols = Object.values(CurrencyNameEnum);

function isSupportedCurrencyName(symbol: unknown): symbol is CurrencyNameEnum {
  return currencySymbols.includes(symbol as CurrencyNameEnum);
}

function getMinimumAmountForCurrency(
  amount: number,
  { name }: Currency
): number {
  switch (name) {
    case CurrencyNameEnum.KENYA:
      return Math.max(50, amount);
    case CurrencyNameEnum.SOUTH_AFRICA:
    case CurrencyNameEnum.ZAMBIA:
      return Math.max(10, amount);
    default:
      return Math.max(1, amount);
  }
}
