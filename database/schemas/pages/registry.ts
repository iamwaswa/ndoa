export const registryPageSchema = {
  fields: [
    {
      codegen: { required: true },
      name: `text`,
      title: `Text`,
      type: `richText`,
      validation: Rule => Rule.required(),
    },
    {
      codegen: { required: true },
      of: [
        {
          type: `item`,
        },
      ],
      name: `gifts`,
      title: `Gifts`,
      type: `array`,
      validation: Rule => Rule.required(),
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
