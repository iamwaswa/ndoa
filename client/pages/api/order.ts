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

    const { client_secret } = await stripe.paymentIntents.create({
      amount: api.getProductPrice(),
      currency: `cad`,
      // * Verify your integration in this guide by including this parameter
      metadata: { integration_check: `accept_a_payment` },
    });

    return res.status(200).json({ success: client_secret });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}
