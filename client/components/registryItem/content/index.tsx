import Autocomplete, {
  AutocompleteRenderInputParams,
} from '@material-ui/lab/Autocomplete';
import { ChangeEvent, useMemo } from 'react';
import { FunctionType, SelectOption } from 'types';
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { RegistryItemContent, RegistryItemContribute } from './styles';
import {
  SupportedCurrenciesDescriptionEnum,
  SupportedCurrenciesEnum,
  SupportedCurrenciesSymbolEnum,
} from 'enums';

import Image from 'next/image';
import { Item } from 'types/database';
import { SanityBlockContent } from 'components/blockContent';
import TextField from '@material-ui/core/TextField';
import { useSubmitContributionContext } from 'context';

export function Content({
  amount,
  currency,
  description,
  image,
  cashGift,
  purchased,
  updateAmount,
  updateCurrency,
}: Pick<Item, 'cashGift' | 'description' | 'purchased'> & {
  amount: number;
  currency: SupportedCurrenciesEnum;
  image: { id: string; url: string };
  updateAmount: FunctionType<{ target: { value: string } }, void>;
  updateCurrency: FunctionType<[ChangeEvent, SelectOption], void>;
}): JSX.Element {
  const { submitting } = useSubmitContributionContext();

  const disableActions = useMemo((): boolean => purchased || submitting, [
    purchased,
    submitting,
  ]);

  return (
    <RegistryItemContent>
      <section className="content">
        <Image
          layout="responsive"
          height={200}
          width={275}
          priority={true}
          src={image.url}
        />
        <SanityBlockContent content={description} />
      </section>
      {cashGift ? (
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
            renderInput={(
              params: AutocompleteRenderInputParams
            ): JSX.Element => (
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
      ) : null}
    </RegistryItemContent>
  );
}
