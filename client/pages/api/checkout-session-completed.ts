import { NextApiRequest, NextApiResponse } from 'next';

import SanityClient from '@sanity/client';
import { SanityDocument } from 'sanity-codegen';

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
    const { _id } = await client.fetch<Pick<SanityDocument, '_id'>>(
      `*[_type == 'registry'][0]{ 
        _id 
      }`
    );

    client.patch(_id);

    res.status(200).json(req.body);
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
}
