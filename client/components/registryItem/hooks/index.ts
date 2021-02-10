import { ChangeEvent, useState } from 'react';
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

  function updateAmount(event: { target: { value: string } }): void {
    const value = Number(event.target.value);
    if (value > 0) {
      setAmount(value);
    }
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
