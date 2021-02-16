import { Item, Registry } from 'types/database';
import { NextApiRequest, NextApiResponse } from 'next';

import SanityClient from '@sanity/client';
import cheerio from 'cheerio';
import { createGiftRegistry } from 'utils/getRegistryAsync';

const client = SanityClient({
  dataset: process.env.SANITY_DATASET,
  projectId: process.env.SANITY_PROJECT_ID,
  useCdn: false,
});

const giftTitles = [`calendar`, `cutlery`, `duvet`, `sheets`, `wine`, `wok`];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    // * Fetch website as text
    const website = await fetch(
      `https://www.myregistry.com/wedding-registry/waswa-olunga-and-clare-anne-queenan-vancouver-bc/2719347/giftlist`
    ).then((data) => data.text());

    // * Scrape website
    const $ = cheerio.load(website);

    // * Identify all gift containers
    const giftContainers = $(`#pnlGiftVisitorList`)
      .children(`.itemGiftVisitorList`)
      .toArray();

    // * Determine purchased and unpurchased gifts
    const gifts = giftContainers.reduce<Map<string, boolean>>(
      (
        gifts: Map<string, boolean>,
        container: unknown
      ): Map<string, boolean> => {
        const giftTitle = (container as Element)
          .getElementsByClassName(`gift-title`)[0]
          .textContent.trim()
          .toLowerCase();

        const currentGiftTitle = giftTitles.find((title: string): boolean =>
          giftTitle.includes(title)
        );

        if (currentGiftTitle) {
          gifts.set(
            currentGiftTitle,
            (container as Element).getAttribute(`ispurchased`).toLowerCase() ===
              `true`
          );
        }

        return gifts;
      },
      new Map<string, boolean>()
    );

    // * Fetch current registry
    const registry = await client.fetch<Registry>(`*[_type == 'registry'][0]`);

    // * Update current registry
    const updatedRegistry = await client
      .patch(registry._id, {
        set: {
          gifts: registry.gifts.map((gift: Item & { _key: string }): Item & {
            _key: string;
          } => {
            return gifts.has(gift.slug)
              ? {
                  ...gift,
                  purchased: gifts.get(gift.slug),
                }
              : gift;
          }),
        },
      })
      .commit<Registry>({
        returnDocuments: true,
      });

    res
      .status(200)
      .json({ success: createGiftRegistry(client, updatedRegistry) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}
