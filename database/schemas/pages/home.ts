export const homePageSchema = {
  fields: [
    {
      codegen: { required: true },
      of: [
        {
          type: `picture`,
        },
      ],
      name: `pictures`,
      title: `Pictures`,
      type: `array`,
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
