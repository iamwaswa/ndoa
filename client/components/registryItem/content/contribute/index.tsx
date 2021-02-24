import { ChangeEvent, useMemo } from 'react';
import { Currency, FunctionType } from 'types';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { RegistryItemContribute } from './styles';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
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

  return (
    <RegistryItemContribute disabled={disableActions}>
      <FormControl variant="outlined">
        <InputLabel id="currency">Currency</InputLabel>
        <Select
          labelId="currency"
          label="Currency"
          value={currency.name}
          onChange={updateCurrency}
        >
          {currencies.map(
            ({ description, name }: Currency): JSX.Element => (
              <MenuItem key={name} value={name}>
                {description}
              </MenuItem>
            )
          )}
        </Select>
      </FormControl>
      <TextField
        label="Amount"
        type="number"
        variant="outlined"
        value={amount}
        onChange={updateAmount}
      />
    </RegistryItemContribute>
  );
}
