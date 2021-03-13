import { CurrencyNameEnum, CurrencySymbol } from 'enums';
import styled, { css } from 'styled-components';
import { useCallback, useEffect } from 'react';

import { Typography } from '@material-ui/core';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

export function useRegistryContributionSuccess(): void {
  const router = useRouter();

  const reloadRegistryPage = useCallback((): void => {
    router.replace(`/registry`);
  }, [router]);

  useEffect((): void => {
    const { amount, currency, success } = router.query;

    if (amount && currency && success) {
      toast.success(
        <SuccessfulContributionMessage
          amount={amount as string}
          currency={currency as string}
        />,
        {
          autoClose: false,
          onClose: reloadRegistryPage,
        }
      );
    }
  }, [router, reloadRegistryPage]);
}

const StyledTypography = styled(Typography)`
  ${({ theme }) => css`
    font-size: ${theme.typography.h6.fontSize};
    text-align: center;
  `}
`;

const StyledAmountTypography = styled(StyledTypography)`
  font-weight: bold;
`;

interface ISuccessfulContributionMessageProps {
  amount: string;
  currency: string;
}

function SuccessfulContributionMessage({
  amount,
  currency,
}: ISuccessfulContributionMessageProps): JSX.Element {
  return (
    <section>
      <StyledTypography gutterBottom={true}>
        You successfully contributed:
      </StyledTypography>
      <StyledAmountTypography gutterBottom={true}>
        <span aria-label="celebration" rightMargin={true} role="img">
          🥳
        </span>{' '}
        {currencyNameToSymbol(currency as CurrencyNameEnum)} {amount}{' '}
        <span aria-label="smirk" leftMargin={true} role="img">
          😏
        </span>
      </StyledAmountTypography>
      <StyledTypography gutterBottom={true}>
        Once your payment has been processed the contribution bar for the item
        will get updated.
      </StyledTypography>
      <StyledTypography gutterBottom={true}>
        You will shortly receive a receipt in the email your provided.
      </StyledTypography>
    </section>
  );
}

function currencyNameToSymbol(name: CurrencyNameEnum): CurrencySymbol {
  switch (name) {
    case CurrencyNameEnum.AUSTRALIA: {
      return CurrencySymbol.AUSTRALIA;
    }
    case CurrencyNameEnum.CANADA: {
      return CurrencySymbol.CANADA;
    }
    case CurrencyNameEnum.GREAT_BRITAIN: {
      return CurrencySymbol.GREAT_BRITAIN;
    }
    case CurrencyNameEnum.KENYA: {
      return CurrencySymbol.KENYA;
    }
    case CurrencyNameEnum.SOUTH_AFRICA: {
      return CurrencySymbol.SOUTH_AFRICA;
    }
    case CurrencyNameEnum.UNITED_STATES: {
      return CurrencySymbol.UNITED_STATES;
    }
    case CurrencyNameEnum.ZAMBIA: {
      return CurrencySymbol.ZAMBIA;
    }
    default: {
      throw new Error(`Unknown currency: ${name}`);
    }
  }
}
