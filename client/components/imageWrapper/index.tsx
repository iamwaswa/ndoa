import Image, { ImageProps } from 'next/image';

import { Picture } from 'types/database';
import { SanityClientService } from 'api';
import { useNextSanityImage } from 'next-sanity-image';

type IImageWrapperProps = Omit<ImageProps, 'layout' | 'src'> & {
  layout: 'fill' | 'fixed' | 'intrinsic' | 'responsive';
  picture: Picture;
};

export function ImageWrapper({
  layout,
  picture,
  ...props
}: IImageWrapperProps): JSX.Element {
  const imageProps = useNextSanityImage(SanityClientService, picture);

  return <Image quality={100} {...imageProps} {...props} />;
}
