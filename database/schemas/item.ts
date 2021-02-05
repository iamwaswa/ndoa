export const itemSchema = {
  fields: [
    {
      codegen: { required: true },
      layout: `checkbox`,
      name: `cashGift`,
      title: `This is a cash gift`,
      type: `boolean`,
      validation: Rule => Rule.required(),
    },
    {
      codegen: { required: true },
      name: `description`,
      title: `Description`,
      type: `array`,
      of: [{ type: `block` }],
      validation: Rule => Rule.required(),
    },
    {
      codegen: { required: true },
      name: `picture`,
      title: `Picture`,
      type: `picture`,
      validation: Rule => Rule.required(),
    },
    {
      codegen: { required: true },
      name: `name`,
      title: `Name`,
      type: `string`,
      validation: Rule => Rule.required(),
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
      codegen: { required: true },
      name: `link`,
      title: `External link`,
      type: `url`,
      validation: Rule => Rule.required(),
    },
  ],
  name: `item`,
  title: `Item`,
  type: `object`,
  preview: {
    select: {
      title: `name`,
      picture: `picture`,
      price: `price`,
      cashGift: `cashGift`,
      contribution: `contribution`,
      purchased: `purchased`,
    },
    prepare({ title, picture, price, cashGift, contribution, purchased }) {
      const showLeftToPay = price !== undefined;

      const cashGiftBalance =
        cashGift && showLeftToPay ? price - contribution : 0;

      return {
        media: picture,
        subtitle: showLeftToPay
          ? cashGift
            ? `$${cashGiftBalance} left to pay${
                cashGiftBalance === 0 ? `!!!` : ``
              }`
            : `${purchased ? `Purchased!!!` : `$${price}`}`
          : null,
        title,
      };
    },
  },
};
