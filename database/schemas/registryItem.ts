export const registryItemSchema = {
  fields: [
    {
      layout: `checkbox`,
      name: `cashGift`,
      title: `This is a cash gift`,
      type: `boolean`,
    },
    {
      name: `description`,
      title: `Description`,
      type: `array`,
      of: [{ type: `block` }],
    },
    {
      name: `photo`,
      title: `Image`,
      type: `picture`,
    },
    {
      name: `name`,
      title: `Name`,
      type: `string`,
    },
    {
      name: `price`,
      title: `Price`,
      type: `number`,
    },
    {
      layout: `checkbox`,
      name: `purchased`,
      title: `This item has been purchased`,
      type: `boolean`,
    },
    {
      name: `contribution`,
      title: `Contribution`,
      type: `number`,
    },
    {
      name: `link`,
      title: `External link`,
      type: `url`,
    },
  ],
  name: `registryItem`,
  title: `Registry Item`,
};
