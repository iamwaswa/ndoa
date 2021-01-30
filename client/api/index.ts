import { Picture, Registry, SanityKeyed, Story } from 'types/database';

import { API } from 'types';
import SanityClient from '@sanity/client';

export const SanityClientService = SanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: false,
});

export const api: API = {
  getHomePageAsync(): Promise<Array<SanityKeyed<Picture>>> {
    return SanityClientService.fetch(`*[_type == 'home'][0].pictures`);
  },
  getStoryPageAsync(): Promise<Story> {
    return SanityClientService.fetch(`*[_type == 'story'][0]`);
  },
  getRegistryPageAsync(): Promise<Registry> {
    return SanityClientService.fetch(`*[_type == 'registry'][0]`);
  },
};
