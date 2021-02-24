export const itemSchema = {
  fields: [
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
      codegen: { required: true },
      name: `slug`,
      title: `Slug`,
      source: `name`,
      type: `string`,
      validation: Rule => Rule.required(),
    },
    {
      name: `contribution`,
      title: `Contribution`,
      type: `number`,
    },
    {
      codegen: { required: true },
      name: `goal`,
      title: `Goal`,
      type: `number`,
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
      goal: `goal`,
      contribution: `contribution`,
    },
    prepare({ title, picture, contribution, goal }) {
      const cashGiftBalance = goal - (contribution ?? 0);

      return {
        media: picture,
        subtitle: `$${cashGiftBalance} left to pay${
          cashGiftBalance === 0 ? `!!!` : ``
        }`,
        title,
      };
    },
  },
};
