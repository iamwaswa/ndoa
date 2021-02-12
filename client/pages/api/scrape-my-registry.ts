import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(_: NextApiRequest, res: NextApiResponse): void {
  // * Client side render registry page
  // * Have sanity real time listeners for the registry backend content

  // * When a user clicks "Buy" -> record this in the device storage
  // * When user regains focus on our site tab -> Show loading state
  // * (Need to check how to detect the user has lost focus then regained)
  // * Trigger this scrape function
  // * After the function completes remove loading state

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
