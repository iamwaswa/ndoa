import { ChangeEvent, useState } from 'react';

import { FunctionType } from 'types';
import { SupportedCurrenciesEnum } from 'enums';

interface IUseCashGiftAmount {
  amount: number;
  updateAmount: FunctionType<ChangeEvent, void>;
  currency: SupportedCurrenciesEnum;
  updateCurrency: FunctionType<ChangeEvent, void>;
}

export function useCashGiftAmount(): IUseCashGiftAmount {
  const [amount, setAmount] = useState<number>(15);
  const [currency, setCurrency] = useState<SupportedCurrenciesEnum>(
    SupportedCurrenciesEnum.CANADA
  );

  function updateAmount(event: ChangeEvent): void {
    setAmount(Number(event.target.value));
  }

  function updateCurrency(event: ChangeEvent): void {
    if (isSupportedCurrency(event.target.value)) {
      setCurrency(event.target.value);
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
