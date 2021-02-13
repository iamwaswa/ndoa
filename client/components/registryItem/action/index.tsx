/* eslint-disable @typescript-eslint/ban-ts-comment */
import { RegistryItemAction, RegistryItemButton } from './styles';

import { Currency } from 'types';
import { Item } from 'types/database';
import { sessionStorageKey } from '@constants';
import { stripePromise } from 'pages/registry';
import { toast } from 'react-toastify';
import { useMemo } from 'react';
import { useSubmitContributionContext } from 'context/submitContribution';

export function Action({
  amount,
  currency,
  cashGift,
  link,
  name,
  purchased,
}: Pick<Item, 'cashGift' | 'link' | 'name' | 'purchased'> & {
  amount: number;
  currency: Currency;
}): JSX.Element {
  const { submitting, toggleSubmitting } = useSubmitContributionContext();

  const disableActions = useMemo((): boolean => purchased || submitting, [
    purchased,
    submitting,
  ]);

  async function contributeToCashGift(): Promise<void> {
    toggleSubmitting();

    try {
      const { error, success } = await fetch(`/api/cash-gift`, {
        body: JSON.stringify({
          amount,
          currency: currency.name,
          name: name.toLowerCase().replace(/\s/g, ``),
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

  function openLink() {
    sessionStorage.setItem(sessionStorageKey, ``);

    window.open(
      link,
      name,
      `location,menubar,noopener,noreferrer,resizable,scrollbars,status,toolbar`
    );
  }

  return (
    <RegistryItemAction>
      {cashGift ? (
        <RegistryItemButton
          color="primary"
          disabled={disableActions}
          variant="extended"
          onClick={contributeToCashGift}
        >
          {purchased ? `Fully funded!` : `Contribute`}
        </RegistryItemButton>
      ) : (
        <RegistryItemButton
          color="primary"
          disabled={disableActions}
          variant="extended"
          onClick={openLink}
        >
          {purchased ? `Purchased!` : `Buy`}
        </RegistryItemButton>
      )}
    </RegistryItemAction>
  );
}
