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
 * Credits
 *
 *
 */
export interface Credits extends SanityDocument {
  _type: 'credits';

  /**
   * Text — `richText`
   *
   *
   */
  text: RichText;
}

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
 * Livestream
 *
 *
 */
export interface Livestream extends SanityDocument {
  _type: 'livestream';

  /**
   * Text — `richText`
   *
   *
   */
  text: RichText;
}

/**
 * Registry
 *
 *
 */
export interface Registry extends SanityDocument {
  _type: 'registry';

  /**
   * Text — `richText`
   *
   *
   */
  text: RichText;

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
   * Contribution — `number`
   *
   *
   */
  contribution?: number;

  /**
   * Goal — `number`
   *
   *
   */
  goal: number;
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

export type Documents = Credits | Home | Livestream | Registry | Story;
