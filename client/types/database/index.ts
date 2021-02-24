import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
} from 'sanity-codegen';

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
};

/**
 * Home
 *
 *
 */
export interface Home extends SanityDocument {
  _type: 'home';

  /**
   * Cover picture — `picture`
   *
   *
   */
  picture: Picture;
}

/**
 * Registry
 *
 *
 */
export interface Registry extends SanityDocument {
  _type: 'registry';

  /**
   * Gifts — `array`
   *
   *
   */
  gifts: Array<SanityKeyed<Item>>;
}

/**
 * Story
 *
 *
 */
export interface Story extends SanityDocument {
  _type: 'story';

  /**
   * Text — `richText`
   *
   *
   */
  text: RichText;
}

export type Item = {
  _type: 'item';
  /**
   * This is a cash gift — `boolean`
   *
   *
   */
  cashGift: boolean;

  /**
   * Description — `array`
   *
   *
   */
  description: Array<SanityKeyed<SanityBlock>>;

  /**
   * Picture — `picture`
   *
   *
   */
  picture: Picture;

  /**
   * Name — `string`
   *
   *
   */
  name: string;

  /**
   * Slug — `string`
   *
   *
   */
  slug: string;

  /**
   * Price — `number`
   *
   *
   */
  price?: number;

  /**
   * This item has been purchased — `boolean`
   *
   *
   */
  purchased?: boolean;

  /**
   * Contribution — `number`
   *
   *
   */
  contribution?: number;

  /**
   * External link — `url`
   *
   *
   */
  link: string;
};

export type Picture = {
  _type: 'picture';
  asset: SanityAsset;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;
};

export type RichText = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: 'image';
      asset: SanityAsset;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
>;

export type Documents = Home | Registry | Story;
