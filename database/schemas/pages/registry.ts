export const registryPageSchema = {
  fields: [
    {
      of: [
        {
          type: `item`,
        },
      ],
      name: `gifts`,
      title: `Gifts`,
      type: `array`,
    },
  ],
  name: `registry`,
  title: `Registry`,
  type: `document`,
  preview: {
    select: {},
    prepare() {
      return {
        title: `Registry page`,
      };
    },
  },
};
