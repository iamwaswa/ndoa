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
  preview: {
    select: {
      imageUrl: `asset.url`,
      subtitle: `asset.originalFilename`,
      title: `asset.mimeType`,
    },
    prepare({ imageUrl, subtitle, title }) {
      return {
        imageUrl,
        subtitle,
        title,
      };
    },
  },
};
