import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(_: NextApiRequest, res: NextApiResponse): void {
  // * Instantiate a headless browser session
  // * Go to  https://www.myregistry.com/wedding-registry/waswa-olunga-and-clare-anne-queenan-vancouver-bc/2719347/giftlist
  // * Search for the gifts container with id pnlGiftVisitorList
  // * Select all .itemGiftVisitorList within the container above
  // * Check for the ispurchased property and read whether "true" or "false"
  // * For each item select the .gift-title and read its inner content
  // * For each title search for a slug from the backend
  // * After finding the slug update the purchased status
  res.status(404).json({ error: `TODO! Build this man!!!!` });
}
