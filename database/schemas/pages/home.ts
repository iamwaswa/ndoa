export const homePageSchema = {
  fields: [
    {
      of: [
        {
          type: `picture`,
        },
      ],
      name: `pictures`,
      title: `Pictures`,
      type: `array`,
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
