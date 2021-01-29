import { contentSchema } from './content';
import createSchema from 'part:@sanity/base/schema-creator';
import { homePageSchema } from './pages/home';
import { itemSchema } from './item';
import { pictureSchema } from './picture';
import { registryPageSchema } from './pages/registry';
import { richTextSchema } from './richText';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import { storyPageSchema } from './pages/story';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    contentSchema,
    homePageSchema,
    itemSchema,
    pictureSchema,
    registryPageSchema,
    richTextSchema,
    storyPageSchema,
  ]),
});
