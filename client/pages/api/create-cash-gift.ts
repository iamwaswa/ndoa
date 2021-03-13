import { NextApiRequest, NextApiResponse } from 'next';

import { API } from 'utils/api';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_API_KEY, {
  apiVersion: `2020-08-27`,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const api = new API(req);

    if (!api.isPostRequest()) {
      return res.status(405).json({ error: `Method not allowed!` });
    }

    const { amount, currency, name, slug } = JSON.parse(req.body);

    const session = await stripe.checkout.sessions.create({
      billing_address_collection: `required`,
      payment_method_types: [`card`],
      line_items: [
        {
          amount: amount * 100,
          currency: currency,
          name,
          quantity: 1,
        },
      ],
      metadata: { amount, currency, name, slug },
      mode: `payment`,
      submit_type: `pay`,
      success_url: `${process.env.BASE_URL}/registry?success=true&currency=${currency}&amount=${amount}`,
      cancel_url: `${process.env.BASE_URL}/registry`,
    });

    return res.status(200).json({ success: session.id });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}
