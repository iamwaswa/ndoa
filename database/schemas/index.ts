import createSchema from 'part:@sanity/base/schema-creator';
import { homePageSchema } from './pages/home';
import { itemSchema } from './item';
import { livestreamPageSchema } from './pages/livestream';
import { pictureSchema } from './picture';
import { registryPageSchema } from './pages/registry';
import { richTextSchema } from './richText';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import { storyPageSchema } from './pages/story';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    homePageSchema,
    itemSchema,
    livestreamPageSchema,
    pictureSchema,
    registryPageSchema,
    richTextSchema,
    storyPageSchema,
  ]),
});
