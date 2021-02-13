import { GiftRegistry } from 'types';
import { Registry } from 'types/database';
import { SanityClient } from '@sanity/client';
import { buildImageUrl } from 'utils/buildImageUrl';

export async function getRegistryAsync(
  client: SanityClient
): Promise<GiftRegistry> {
  try {
    const { gifts } = await client.fetch<Pick<Registry, 'gifts'>>(
      `*[_type == 'registry'][0]{
        gifts
      }`
    );

    return gifts.map(({ picture, ...gift }) => ({
      ...gift,
      image: {
        id: gift._key,
        url: buildImageUrl(client, picture).maxHeight(200).maxWidth(275).url(),
      },
    }));
  } catch (error) {
    throw new Error(error);
  }
}
