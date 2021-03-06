import BlockContent from '@sanity/block-content-to-react';
import { Content } from 'types';
import { serializers } from './serializers';

interface ISanityBlockContentProps {
  content: Content;
  linkColor?: string;
}

export function SanityBlockContent({
  content,
  linkColor,
}: ISanityBlockContentProps): JSX.Element {
  return (
    <BlockContent blocks={content} serializers={serializers({ linkColor })} />
  );
}
