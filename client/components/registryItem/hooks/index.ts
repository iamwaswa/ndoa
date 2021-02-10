import { ChangeEvent, useEffect, useState } from 'react';
import { FunctionType, SelectOption } from 'types';

import { SupportedCurrenciesEnum } from 'enums';

interface IUseCashGiftAmount {
  amount: number;
  updateAmount: FunctionType<{ target: { value: string } }, void>;
  currency: SupportedCurrenciesEnum;
  updateCurrency: FunctionType<[ChangeEvent, SelectOption], void>;
}

export function useCashGiftAmount(): IUseCashGiftAmount {
  const [amount, setAmount] = useState<number>(15);
  const [currency, setCurrency] = useState<SupportedCurrenciesEnum>(
    SupportedCurrenciesEnum.CANADA
  );

  useEffect((): void => {
    setAmount(getMinimumAmountForCurrency(amount, currency));
  }, [amount, currency]);

  function updateAmount(event: { target: { value: string } }): void {
    setAmount(Number(event.target.value));
  }

  function updateCurrency(_: ChangeEvent, option: SelectOption): void {
    if (isSupportedCurrency(option.value)) {
      setCurrency(option.value);
    }
  }

  return {
    amount,
    updateAmount,
    currency,
    updateCurrency,
  };
}

function isSupportedCurrency(
  currency: unknown
): currency is SupportedCurrenciesEnum {
  return (Object.values(SupportedCurrenciesEnum) as Array<string>).includes(
    currency as string
  );
}

function getMinimumAmountForCurrency(
  amount: number,
  currency: SupportedCurrenciesEnum
): number {
  switch (currency) {
    case SupportedCurrenciesEnum.KENYA:
      return Math.max(50, amount);
    case SupportedCurrenciesEnum.SOUTH_AFRICA:
    case SupportedCurrenciesEnum.ZAMBIA:
      return Math.max(10, amount);
    default:
      return Math.max(1, amount);
  }
}
