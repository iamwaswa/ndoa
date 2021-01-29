export const itemSchema = {
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
      name: `picture`,
      title: `Picture`,
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
      const cashGiftBalance = cashGift ? price - contribution : 0;

      return {
        media: picture,
        subtitle: cashGift
          ? `$${cashGiftBalance} left to pay${
              cashGiftBalance === 0 ? `!!!` : ``
            }`
          : `${purchased ? `Purchased!!!` : `$${price}`}`,
        title,
      };
    },
  },
};
