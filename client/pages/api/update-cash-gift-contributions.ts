import { Item, Registry } from 'types/database';
import { NextApiRequest, NextApiResponse } from 'next';

import { API } from 'utils/api';
import { ExchangeRateCurrencyResponse } from 'types';
import SanityClient from '@sanity/client';

const client = SanityClient({
  dataset: process.env.SANITY_DATASET,
  projectId: process.env.SANITY_PROJECT_ID,
  token: process.env.SANITY_READ_WRITE_TOKEN,
  useCdn: false,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const api = new API(req);

  if (!api.isPostRequest()) {
    return res.status(405).json({ error: `Method not allowed!` });
  }

  try {
    const {
      object: {
        metadata: { amount, currency, name },
      },
    } = JSON.parse(req.body);

    // * Get currencies
    const { data }: ExchangeRateCurrencyResponse = await fetch(
      `https://api.coinbase.com/v2/exchange-rates?currency=${currency.toUpperCase()}`
    ).then((res) => res.json());

    // * Fetch current registry
    const registry = await client.fetch<Registry>(`*[_type == 'registry'][0]`);

    // * Update current registry
    await client
      .patch(registry._id, {
        set: {
          gifts: registry.gifts.map((gift: Item & { _key: string }): Item & {
            _key: string;
          } => {
            if (gift.slug === name) {
              gift.contribution += applyStripeFee(
                Number(amount) * Number(data.rates.CAD)
              );
            }

            return gift;
          }),
        },
      })
      .commit<undefined>({
        returnDocuments: false,
      });

    res
      .status(200)
      .json({ success: `Updated ${name} cash gift contributions` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

function applyStripeFee(amount: number): number {
  const percentageDeducted = 2.9 / 100;
  const fixedAmountCharged = 0.3;

  return amount - amount * percentageDeducted - fixedAmountCharged;
}
