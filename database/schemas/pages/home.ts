export const homePageSchema = {
  fields: [
    {
      codegen: { required: true },
      name: `picture`,
      title: `Cover picture`,
      type: `picture`,
      validation: Rule => Rule.required(),
    },
  ],
  name: `home`,
  title: `Home`,
  type: `document`,
  preview: {
    select: {},
    prepare() {
      return {
        title: `Home page`,
      };
    },
  },
};
