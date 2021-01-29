export const storyPageSchema = {
  fields: [
    {
      name: `text`,
      title: `Text`,
      type: `richText`,
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
