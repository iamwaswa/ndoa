import BlockContent from '@sanity/block-content-to-react';
import { Content } from 'types';
import { serializers } from './serializers';

interface ISanityBlockContentProps {
  content: Content;
}

export function SanityBlockContent({
  content,
}: ISanityBlockContentProps): JSX.Element {
  return <BlockContent blocks={content} serializers={serializers} />;
}
