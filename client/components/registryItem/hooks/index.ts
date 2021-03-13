import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Currency, FunctionType } from 'types';

import { CurrencyNameEnum } from 'enums';
import { currencies } from '@constants';

interface IUseCashGiftAmount {
  amount: string;
  updateAmount: FunctionType<{ target: { value: string } }, void>;
  currency: Currency;
  updateCurrency: FunctionType<
    [ChangeEvent<{ name?: string; value: unknown }>],
    void
  >;
}

export function useCashGiftAmount(): IUseCashGiftAmount {
  const validMoney = useRef<RegExp>(/^[\d]+$|^[\d]+\.[\d]*$|^\.[\d]*$/);
  const [amount, setAmount] = useState<string>(`15`);
  const [currency, setCurrency] = useState<Currency>(
    currencies.find(
      (currency: Currency): boolean => currency.name === CurrencyNameEnum.CANADA
    )
  );

  function updateAmount(event: { target: { value: string } }): void {
    if (event.target.value) {
      if (validMoney.current.test(event.target.value)) {
        setAmount(event.target.value);
      }
    } else {
      setAmount(event.target.value);
    }
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

  useEffect((): void => {
    setAmount(getMinimumAmountForCurrency(currency).toString());
  }, [currency]);

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

function getMinimumAmountForCurrency({ name }: Currency): number {
  switch (name) {
    case CurrencyNameEnum.KENYA:
      return 50;
    case CurrencyNameEnum.SOUTH_AFRICA:
    case CurrencyNameEnum.ZAMBIA:
      return 10;
    default:
      return 15;
  }
}
