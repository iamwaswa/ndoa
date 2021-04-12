import { CurrencyDescriptionEnum, CurrencyNameEnum } from 'enums';

import { Currency } from 'types';

const currencyDescriptions = Object.values(CurrencyDescriptionEnum);

const currencyNames = Object.values(CurrencyNameEnum);

export const currencies: Array<Currency> = currencyDescriptions.map(
  (description, index): Currency => ({
    description,
    name: currencyNames[index],
  })
);

export const showedWelcomeCardKey = `showedWelcomeCard`;
