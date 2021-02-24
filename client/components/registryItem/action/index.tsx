/* eslint-disable @typescript-eslint/ban-ts-comment */
import { RegistryItemAction, RegistryItemButton } from './styles';

import { Currency } from 'types';
import { stripePromise } from 'pages/registry';
import { toast } from 'react-toastify';
import { useMemo } from 'react';
import { useSubmitContributionContext } from 'context/submitContribution';

interface IActionProps {
  amount: number;
  currency: Currency;
  name: string;
  slug: string;
  total: number;
}

export function Action({
  amount,
  currency,
  name,
  slug,
  total,
}: IActionProps): JSX.Element {
  const { submitting, toggleSubmitting } = useSubmitContributionContext();

  const disableActions = useMemo((): boolean => amount >= total || submitting, [
    amount,
    submitting,
    total,
  ]);

  async function contributeToCashGift(): Promise<void> {
    toggleSubmitting();

    try {
      const { error, success } = await fetch(`/api/create-cash-gift`, {
        body: JSON.stringify({
          amount,
          currency: currency.name,
          name,
          slug,
        }),
        method: `POST`,
      }).then((response) => response.json());

      if (error) {
        throw new Error(error);
      }

      const stripe = await stripePromise;

      const checkoutResponse = await stripe.redirectToCheckout({
        sessionId: success,
      });

      if (checkoutResponse.error) {
        throw new Error(checkoutResponse.error.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      toggleSubmitting();
    }
  }

  return (
    <RegistryItemAction>
      <RegistryItemButton
        color="primary"
        disabled={disableActions}
        variant="extended"
        onClick={contributeToCashGift}
      >
        {disableActions ? `Fully funded!` : `Contribute`}
      </RegistryItemButton>
    </RegistryItemAction>
  );
}
