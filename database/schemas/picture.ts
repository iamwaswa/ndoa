export const pictureSchema = {
  accept: `image/*`,
  name: `picture`,
  storeOriginalFilename: true,
  title: `Picture`,
  type: `image`,
  options: {
    hotspot: true,
    metadata: [`exif`, `location`, `lqip`, `palette`],
  },
};
