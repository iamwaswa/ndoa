import createSchema from "part:@sanity/base/schema-creator";
import { homePageSchema } from "./pages/home";
import { pictureSchema } from "./picture";
import { registryItemSchema } from "./registryItem";
import { registryPageSchema } from "./pages/registry";
import { richTextSchema } from "./richText";
import schemaTypes from "all:part:@sanity/base/schema-type";
import { storyPageSchema } from "./pages/story";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    homePageSchema,
    pictureSchema,
    registryItemSchema,
    registryPageSchema,
    richTextSchema,
    storyPageSchema,
  ]),
});
