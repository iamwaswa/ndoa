import { NextApiRequest, NextApiResponse } from 'next';

import { Registry } from 'types/database';
import SanityClient from '@sanity/client';

const client = SanityClient({
  dataset: process.env.SANITY_DATASET,
  projectId: process.env.SANITY_PROJECT_ID,
  useCdn: true,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const {
    object: {
      metadata: { amount, currency, name },
    },
  } = JSON.parse(req.body);

  try {
    const { _id, slugs } = await client.fetch<
      Pick<Registry, '_id'> & { slugs: Array<string> }
    >(
      `*[_type == 'registry'][0]{ 
        _id,
        'slugs':gifts[]{
          slug
        }
      }`
    );

    const cashGiftToUpdate = slugs.find(
      (slug: string): boolean => name === slug
    );

    if (!cashGiftToUpdate) {
      res.status(422).json({ error: `Unknown cash gift name: ${name}` });
    }

    client.patch(_id);

    res.status(200).json(req.body);
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
}
