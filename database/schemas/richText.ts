export const richTextSchema = {
  title: `Rich Text`,
  name: `richText`,
  type: `array`,
  of: [
    {
      type: `content`,
    },
    {
      type: `picture`,
    },
  ],
};
