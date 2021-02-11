import Autocomplete, {
  AutocompleteRenderInputParams,
} from '@material-ui/lab/Autocomplete';
import { ChangeEvent, useMemo } from 'react';
import { FunctionType, SelectOption } from 'types';
import {
  SupportedCurrenciesDescriptionEnum,
  SupportedCurrenciesEnum,
  SupportedCurrenciesSymbolEnum,
} from 'enums';

import { Item } from 'types/database';
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { RegistryItemContribute } from './styles';
import TextField from '@material-ui/core/TextField';
import { useSubmitContributionContext } from 'context';

export function Contribute({
  amount,
  currency,
  cashGift,
  purchased,
  updateAmount,
  updateCurrency,
}: Pick<Item, 'cashGift' | 'purchased'> & {
  amount: number;
  currency: SupportedCurrenciesEnum;
  updateAmount: FunctionType<{ target: { value: string } }, void>;
  updateCurrency: FunctionType<[ChangeEvent, SelectOption], void>;
}): JSX.Element {
  const { submitting } = useSubmitContributionContext();

  const disableActions = useMemo((): boolean => purchased || submitting, [
    purchased,
    submitting,
  ]);

  return cashGift ? (
    <RegistryItemContribute disabled={disableActions}>
      <Autocomplete
        disableClearable={true}
        options={Object.values(SupportedCurrenciesEnum).map(
          (value: SupportedCurrenciesEnum) => ({
            label: `${SupportedCurrenciesDescriptionEnum[value]}`,
            value,
          })
        )}
        value={{
          label: `${SupportedCurrenciesSymbolEnum[currency]}`,
          value: currency,
        }}
        getOptionLabel={(option: SelectOption): string => option.label}
        getOptionSelected={(
          option: SelectOption,
          selected: SelectOption
        ): boolean => option.value === selected.value}
        renderInput={(params: AutocompleteRenderInputParams): JSX.Element => (
          <TextField
            {...params}
            inputProps={{
              ...params.inputProps,
            }}
            label="Currency"
            variant="outlined"
          />
        )}
        onChange={updateCurrency}
      />
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
