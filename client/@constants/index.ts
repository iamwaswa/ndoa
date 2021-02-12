import { CurrencyDescriptionEnum, CurrencyNameEnum } from 'enums';

import { Currency } from 'types';

export const currencies: Array<Currency> = [
  {
    description: CurrencyDescriptionEnum.AUSTRALIA,
    name: CurrencyNameEnum.AUSTRALIA,
  },
  {
    description: CurrencyDescriptionEnum.CANADA,
    name: CurrencyNameEnum.CANADA,
  },
  {
    description: CurrencyDescriptionEnum.GREAT_BRITAIN,
    name: CurrencyNameEnum.GREAT_BRITAIN,
  },
  {
    description: CurrencyDescriptionEnum.KENYA,
    name: CurrencyNameEnum.KENYA,
  },
  {
    description: CurrencyDescriptionEnum.SOUTH_AFRICA,
    name: CurrencyNameEnum.SOUTH_AFRICA,
  },
  {
    description: CurrencyDescriptionEnum.UNITED_STATES,
    name: CurrencyNameEnum.UNITED_STATES,
  },
  {
    description: CurrencyDescriptionEnum.ZAMBIA,
    name: CurrencyNameEnum.ZAMBIA,
  },
];
