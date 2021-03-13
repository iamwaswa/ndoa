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
  amount: string;
  contribution: number;
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
  contribution,
  currency,
  total,
  updateAmount,
  updateCurrency,
}: IContributeProps): JSX.Element {
  const { submitting } = useSubmitContributionContext();

  const disableActions = useMemo(
    (): boolean => contribution >= total || submitting,
    [contribution, submitting, total]
  );

  return (
    <RegistryItemContribute disabled={disableActions}>
      <FormControl>
        <StyledLabel htmlFor="currency">Currency</StyledLabel>
        <StyledSelect
          id="currency"
          value={currency.name}
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
          type="text"
          value={amount}
          onChange={updateAmount}
        />
      </FormControl>
    </RegistryItemContribute>
  );
}
