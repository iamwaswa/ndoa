import { ChangeEvent, useMemo } from 'react';
import { Currency, FunctionType } from 'types';
import {
  RegistryItemContribute,
  StyledInput,
  StyledLabel,
  StyledSelect,
} from './styles';

import FormControl from '@material-ui/core/FormControl';
import { currencies } from '@constants';
import { useSubmitContributionContext } from 'context/submitContribution';

interface IContributeProps {
  amount: number;
  currency: Currency;
  total: number;
  updateAmount: FunctionType<{ target: { value: string } }, void>;
  updateCurrency: FunctionType<
    [ChangeEvent<{ name?: string; value: unknown }>],
    void
  >;
}

export function Contribute({
  amount,
  currency,
  total,
  updateAmount,
  updateCurrency,
}: IContributeProps): JSX.Element {
  const { submitting } = useSubmitContributionContext();

  const disableActions = useMemo((): boolean => amount >= total || submitting, [
    amount,
    submitting,
    total,
  ]);

  // * Necessary to avoid eslint a11y error no-onchange
  function handleBur(): void {
    return;
  }

  return (
    <RegistryItemContribute disabled={disableActions}>
      <FormControl>
        <StyledLabel htmlFor="currency">Currency</StyledLabel>
        <StyledSelect
          id="currency"
          value={currency.name}
          onBlur={handleBur}
          onChange={updateCurrency}
        >
          {currencies.map(
            ({ description, name }: Currency): JSX.Element => (
              <option key={name} value={name}>
                {description}
              </option>
            )
          )}
        </StyledSelect>
      </FormControl>
      <FormControl>
        <StyledLabel htmlFor="amount">Amount</StyledLabel>
        <StyledInput
          id="amount"
          type="number"
          value={amount}
          onChange={updateAmount}
        />
      </FormControl>
    </RegistryItemContribute>
  );
}
