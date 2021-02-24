export const livestreamPageSchema = {
  fields: [
    {
      codegen: { required: true },
      name: `text`,
      title: `Text`,
      type: `richText`,
      validation: Rule => Rule.required(),
    },
  ],
  name: `livestream`,
  title: `Livestream`,
  type: `document`,
  preview: {
    select: {},
    prepare() {
      return {
        title: `Livestream page`,
      };
    },
  },
};
