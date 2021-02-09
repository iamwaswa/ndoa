import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import {
  CheckoutActionButton,
  CheckoutActions,
  CheckoutContainer,
  CheckoutContent,
  CheckoutFieldset,
  CheckoutForm,
  CheckoutTitle,
  Row,
} from './styles';
import { Typography, useMediaQuery } from '@material-ui/core';

import { FormEvent } from 'react';
import { FunctionType } from 'types';
import { Product } from 'utils/api';
import { ProductPriceEnum } from 'enums';
import TextField from '@material-ui/core/TextField';
import { theme } from 'theme';
import { toast } from 'react-toastify';
import { useCheckout } from './hooks';

interface ICheckoutProps {
  product: Product;
  showCheckout: boolean;
  title: string;
  closeCheckout: FunctionType<unknown, void>;
}

export function Checkout({
  product,
  showCheckout,
  title,
  closeCheckout,
}: ICheckoutProps): JSX.Element {
  const {
    submitting,
    toggleSubmitting,
    data,
    updateCheckoutData,
  } = useCheckout();

  const elements = useElements();

  const mobile = useMediaQuery(theme.breakpoints.down(`xs`));

  const stripe = useStripe();

  async function handleSubmit(event: FormEvent): Promise<void> {
    if (!elements || !stripe) {
      return;
    }

    event.preventDefault();

    toggleSubmitting();

    try {
      const response = await fetch(`/api/order`, {
        method: `POST`,
        body: JSON.stringify({ name: product.name, quantity: data.quantity }),
      });

      const { error, success } = await response.json();

      if (error || !success) {
        throw new Error(error || `Missing client_secret`);
      }

      const result = await stripe.confirmCardPayment(success, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            address: {
              city: data.city,
              country: data.country,
              line1: data.addressLine1,
              line2: data.addressLine2,
              postal_code: data.postalCode,
              state: data.state,
            },
            email: data.email,
            name: data.name,
            phone: data.phoneNumber,
          },
        },
      });

      if (result.error) {
        throw new Error(result.error.message);
      } else {
        toast.success(`Your contribution was successful!!!`);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      toggleSubmitting();
    }
  }

  return (
    <CheckoutContainer
      aria-labelledby="checkout"
      open={showCheckout}
      fullScreen={mobile}
      fullWidth={true}
      maxWidth="sm"
      onClose={closeCheckout}
    >
      <CheckoutTitle>{title}</CheckoutTitle>
      <CheckoutForm onSubmit={handleSubmit}>
        <CheckoutFieldset disabled={submitting}>
          <CheckoutContent>
            <Typography gutterBottom={true}>
              Fields marked with * are required
            </Typography>
            <Row>
              <TextField
                autoComplete="name"
                label="Name on card"
                name="name"
                required={true}
                value={data.name}
                variant="outlined"
                onChange={updateCheckoutData}
              />
              <TextField
                autoComplete="email"
                label="Email"
                name="email"
                required={true}
                value={data.email}
                variant="outlined"
                onChange={updateCheckoutData}
              />
            </Row>
            <TextField
              autoComplete="tel"
              label="Phone number"
              name="phoneNumber"
              value={data.phoneNumber}
              variant="outlined"
              onChange={updateCheckoutData}
            />
            <Row>
              <TextField
                autoComplete="country-name"
                label="Country or region"
                name="country"
                required={true}
                value={data.country}
                variant="outlined"
                onChange={updateCheckoutData}
              />
              <TextField
                label="City"
                name="city"
                required={true}
                value={data.city}
                variant="outlined"
                onChange={updateCheckoutData}
              />
            </Row>
            <TextField
              autoComplete="address-line1"
              label="Address line 1"
              name="addressLine1"
              required={true}
              value={data.addressLine1}
              variant="outlined"
              onChange={updateCheckoutData}
            />
            <TextField
              autoComplete="address-line2"
              label="Address line 2"
              name="addressLine2"
              value={data.addressLine2}
              variant="outlined"
              onChange={updateCheckoutData}
            />
            <Row>
              <TextField
                autoComplete="postal-code"
                label="Postal code"
                name="postalCode"
                required={true}
                value={data.postalCode}
                variant="outlined"
                onChange={updateCheckoutData}
              />
              <TextField
                autoComplete="address-level1"
                label="State or province"
                name="state"
                required={true}
                value={data.state}
                variant="outlined"
                onChange={updateCheckoutData}
              />
            </Row>
            <TextField
              label="How many gift cards would you like to buy?"
              name="quantity"
              required={true}
              type="number"
              value={data.quantity}
              variant="outlined"
              onChange={updateCheckoutData}
            />
            <CardElement />
          </CheckoutContent>
        </CheckoutFieldset>
        <CheckoutActions>
          <CheckoutActionButton
            color="primary"
            disabled={submitting}
            variant="outlined"
            onClick={closeCheckout}
          >
            Cancel
          </CheckoutActionButton>
          <CheckoutActionButton
            color="primary"
            disabled={submitting}
            type="submit"
            variant="contained"
          >
            Contribute ${ProductPriceEnum[product.name] * data.quantity}
          </CheckoutActionButton>
        </CheckoutActions>
      </CheckoutForm>
    </CheckoutContainer>
  );
}
