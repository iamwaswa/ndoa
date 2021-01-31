import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import { SanityClient } from '@sanity/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import imageUrlBuilder from '@sanity/image-url';

export function buildImageUrl(
  client: SanityClient,
  source: SanityImageSource
): ImageUrlBuilder {
  return imageUrlBuilder(client).image(source);
}
