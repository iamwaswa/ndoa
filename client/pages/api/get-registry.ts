import { NextApiRequest, NextApiResponse } from 'next';

import SanityClient from '@sanity/client';
import { getRegistryAsync } from 'utils/getRegistryAsync';

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
    // * Instantiate a headless browser session
    // * Go to  https://www.myregistry.com/wedding-registry/waswa-olunga-and-clare-anne-queenan-vancouver-bc/2719347/giftlist
    // * Search for the gifts container with id pnlGiftVisitorList
    // * Select all .itemGiftVisitorList within the container above
    // * Check for the ispurchased property and read whether "true" or "false"
    // * For each item select the .gift-title and read its inner content
    // * For each title search for a slug from the backend
    // * After finding the slug update the purchased status
    res.status(200).json({ success: await getRegistryAsync(client) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}
