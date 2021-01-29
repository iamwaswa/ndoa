export const storyPageSchema = {
  fields: [
    {
      codegen: { required: true },
      name: `text`,
      title: `Text`,
      type: `richText`,
      validation: Rule => Rule.required(),
    },
  ],
  name: `story`,
  title: `Story`,
  type: `document`,
  preview: {
    select: {},
    prepare() {
      return {
        title: `Story page`,
      };
    },
  },
};
