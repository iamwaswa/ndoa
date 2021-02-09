import { FunctionType } from 'types';
import { useState } from 'react';

interface IUseCheckout {
  checkout: boolean;
  toggleCheckout: FunctionType<unknown, void>;
}
export function useCheckout(): IUseCheckout {
  const [checkout, setCheckout] = useState<boolean>(false);

  function toggleCheckout(): void {
    setCheckout((checkingOut: boolean): boolean => !checkingOut);
  }

  return {
    checkout,
    toggleCheckout,
  };
}
