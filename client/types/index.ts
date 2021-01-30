import { Picture, Registry, SanityKeyed, Story } from './database';

import { ReactNode } from 'react';

export type ChildrenProps = {
  children: ReactNode;
};

export type FunctionType<TArgs = void, TReturn = void> = (
  ...args: TArgs extends Array<unknown> ? TArgs : [TArgs]
) => TReturn;

export type API = {
  getHomePageAsync: FunctionType<[], Promise<Array<SanityKeyed<Picture>>>>;
  getStoryPageAsync: FunctionType<[], Promise<Story>>;
  getRegistryPageAsync: FunctionType<[], Promise<Registry>>;
};

export type PageProps<TExtraProps = void> = TExtraProps & {
  title: string;
};

export type ApplicationRoute = {
  href: string;
  text: string;
};

export type TimeToGo = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export type GiftRegistryItem = {
  cashGift: boolean;
  description: string;
  id: string;
  image: string;
  name: string;
  price: number;
  purchased: boolean;
  contributed?: number;
  link?: string;
};
