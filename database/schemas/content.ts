export const contentSchema = {
  lists: [{ title: `Bullet`, value: `bullet` }],
  marks: {
    annotations: [
      {
        fields: [
          {
            name: `href`,
            title: `URL`,
            type: `url`,
          },
        ],
        name: `link`,
        title: `URL`,
        type: `object`,
      },
    ],
    decorators: [
      { title: `Emphasis`, value: `em` },
      { title: `Strong`, value: `strong` },
    ],
  },
  name: `content`,
  styles: [
    { title: `Normal`, value: `normal` },
    { title: `H1`, value: `h1` },
    { title: `H2`, value: `h2` },
    { title: `H3`, value: `h3` },
    { title: `H4`, value: `h4` },
    { title: `Quote`, value: `blockquote` },
  ],
  title: `Content`,
  type: `block`,
};
