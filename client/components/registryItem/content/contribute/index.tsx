import { ChangeEvent, useMemo } from 'react';
import { Currency, FunctionType } from 'types';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { Item } from 'types/database';
import MenuItem from '@material-ui/core/MenuItem';
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { RegistryItemContribute } from './styles';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { currencies } from '@constants';
import { useSubmitContributionContext } from 'context/submitContribution';

export function Contribute({
  amount,
  currency,
  cashGift,
  purchased,
  updateAmount,
  updateCurrency,
}: Pick<Item, 'cashGift' | 'purchased'> & {
  amount: number;
  currency: Currency;
  updateAmount: FunctionType<{ target: { value: string } }, void>;
  updateCurrency: FunctionType<
    [ChangeEvent<{ name?: string; value: unknown }>],
    void
  >;
}): JSX.Element {
  const { submitting } = useSubmitContributionContext();

  const disableActions = useMemo((): boolean => purchased || submitting, [
    purchased,
    submitting,
  ]);

  return cashGift ? (
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
  ) : null;
}
