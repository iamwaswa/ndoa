import { FunctionType } from 'types';
import { useState } from 'react';

type CheckoutData = {
  name: string;
  email: string;
  phoneNumber: string;
  country: string;
  city: string;
  addressLine1: string;
  addressLine2: string;
  postalCode: string;
  state: string;
  quantity: number;
};

type UpdateEvent = {
  target: {
    name: string;
    value: string;
  };
};

interface IUseCheckout {
  submitting: boolean;
  toggleSubmitting: FunctionType<void, void>;
  data: CheckoutData;
  updateCheckoutData: FunctionType<UpdateEvent, void>;
}

export function useCheckout(): IUseCheckout {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [data, setData] = useState<CheckoutData>({
    name: ``,
    email: ``,
    phoneNumber: ``,
    country: ``,
    city: ``,
    addressLine1: ``,
    addressLine2: ``,
    postalCode: ``,
    state: ``,
    quantity: 1,
  });

  function toggleSubmitting(): void {
    setSubmitting(
      (currentlySubmitting: boolean): boolean => !currentlySubmitting
    );
  }

  function updateCheckoutData(event: UpdateEvent): void {
    if (event.target.name === `quantity` && event.target.value < 1) {
      return;
    }

    setData(
      (currentData: CheckoutData): CheckoutData => ({
        ...currentData,
        [event.target.name]: event.target.value,
      })
    );
  }

  return {
    submitting,
    toggleSubmitting,
    data,
    updateCheckoutData,
  };
}
