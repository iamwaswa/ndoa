import Autocomplete, {
  AutocompleteRenderInputParams,
} from '@material-ui/lab/Autocomplete';
/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  RegistryItemAction,
  RegistryItemButton,
  RegistryItemContainer,
  RegistryItemContent,
  RegistryItemContribute,
  RegistryItemHeader,
  RegistryItemProgressMeter,
} from './styles';

import Image from 'next/image';
import { Item } from 'types/database';
import { SanityBlockContent } from 'components/blockContent';
import { SelectOption } from 'types';
import { SupportedCurrenciesEnum } from 'enums';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { stripePromise } from 'pages/registry';
import { toast } from 'react-toastify';
import { useCashGiftAmount } from './hooks/cashGiftAmount';
import { useRegistryItem } from './hooks';

export function RegistryItem({
  contribution,
  description,
  image,
  cashGift,
  link,
  name,
  price,
  purchased,
}: Omit<Item, 'picture'> & {
  image: { id: string; url: string };
}): JSX.Element {
  const {
    amount,
    currency,
    updateAmount,
    updateCurrency,
  } = useCashGiftAmount();

  const purchasedPercentage = useRegistryItem({
    contribution,
    price,
  });

  async function contributeToCashGift(): Promise<void> {
    if (amount) {
      try {
        const { error, success } = await fetch(`/api/cash-gift`, {
          body: JSON.stringify({
            amount,
            currency,
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
      }
    }
  }

  return (
    <>
      <RegistryItemContainer>
        <section>
          <RegistryItemHeader
            title={
              <section className="title">
                <Typography>{name}</Typography>
                {cashGift ? null : <Typography>${price}</Typography>}
              </section>
            }
            subheader={
              cashGift && price !== undefined ? (
                <RegistryItemProgressMeter progress={purchasedPercentage}>
                  <Typography>
                    {`${Math.floor(purchasedPercentage)}% contributed${
                      purchasedPercentage === 100 ? `!!!` : ``
                    }`}
                  </Typography>
                </RegistryItemProgressMeter>
              ) : null
            }
          />
          <RegistryItemContent>
            <Image
              layout="responsive"
              height={200}
              width={275}
              priority={true}
              src={image.url}
            />
            <SanityBlockContent content={description} />
            {cashGift ? (
              <RegistryItemContribute disabled={purchased}>
                <Autocomplete
                  options={Object.values(SupportedCurrenciesEnum).map(
                    (value: SupportedCurrenciesEnum) => ({
                      label: value,
                      value,
                    })
                  )}
                  value={{ label: currency, value: currency }}
                  getOptionLabel={(option: SelectOption): string =>
                    option.label
                  }
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
                      variant="outlined"
                    />
                  )}
                  onChange={updateCurrency}
                />
                <TextField
                  type="number"
                  variant="outlined"
                  value={amount}
                  onChange={updateAmount}
                />
              </RegistryItemContribute>
            ) : null}
          </RegistryItemContent>
        </section>
        <RegistryItemAction>
          {cashGift ? (
            <RegistryItemButton
              color="primary"
              disabled={purchased || !amount}
              variant="extended"
              onClick={contributeToCashGift}
            >
              {purchased ? `Fully funded!` : `Contribute`}
            </RegistryItemButton>
          ) : (
            <RegistryItemButton
              color="primary"
              disabled={purchased}
              href={link}
              //@ts-ignore
              rel="noopener noreferrer"
              target="_blank"
              variant="extended"
            >
              {purchased ? `Purchased!` : `Buy`}
            </RegistryItemButton>
          )}
        </RegistryItemAction>
      </RegistryItemContainer>
    </>
  );
}
