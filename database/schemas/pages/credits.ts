export const creditsPageSchema = {
  fields: [
    {
      codegen: { required: true },
      name: `text`,
      title: `Text`,
      type: `richText`,
      validation: Rule => Rule.required(),
    },
  ],
  name: `credits`,
  title: `Credits`,
  type: `document`,
  preview: {
    select: {},
    prepare() {
      return {
        title: `Credits page`,
      };
    },
  },
};
