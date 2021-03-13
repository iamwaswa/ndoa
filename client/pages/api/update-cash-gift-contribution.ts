import { NextApiRequest, NextApiResponse } from 'next';

import { API } from 'utils/api';
import { CurrencyNameEnum } from 'enums';
import { Registry } from 'types/database';
import SanityClient from '@sanity/client';

const client = SanityClient({
  dataset: process.env.SANITY_DATASET,
  projectId: process.env.SANITY_PROJECT_ID,
  useCdn: false,
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

    const { amount, currency, slug } = JSON.parse(req.body);

    const { _id, gifts } = await client.fetch<
      Pick<Registry, 'gifts'> & { _id: string }
    >(
      `*[_type == 'registry'][0]{
        _id,
        gifts,
      }`
    );

    const updatedGifts = await Promise.all(
      gifts.map(async (gift) =>
        slug === gift.slug
          ? {
              ...gift,
              contribution:
                gift.contribution +
                (await convertToCADAsync(Number(amount), currency)),
            }
          : gift
      )
    );

    await client
      .patch(_id)
      .set({
        gifts: updatedGifts,
      })
      .commit();

    return res.status(200).json({ success: `Cash gift successfully updated` });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}

async function convertToCADAsync(
  amount: number,
  currency: CurrencyNameEnum
): Promise<number> {
  return Promise.resolve(amount);
}
