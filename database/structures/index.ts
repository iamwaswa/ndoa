import { GrBook, GrGift, GrHome } from 'react-icons/gr';

import { IconType } from 'react-icons';
import StructureBuilder from '@sanity/desk-tool/structure-builder';

type Page = {
  documentId: string;
  Icon: IconType;
  schemaType: string;
  title: string;
};

const pages: Array<Page> = [
  {
    documentId: `home`,
    Icon: GrHome,
    schemaType: `home`,
    title: `Home`,
  },
  {
    documentId: `story`,
    Icon: GrBook,
    schemaType: `story`,
    title: `Story`,
  },
  {
    documentId: `registry`,
    Icon: GrGift,
    schemaType: `registry`,
    title: `Registry`,
  },
];

const pageSchemaTypes: Array<string> = pages.map(
  ({ schemaType }) => schemaType
);

export default function buildStructure() {
  return StructureBuilder.list()
    .title('Pages')
    .items([
      ...pages.map(({ documentId, Icon, schemaType, title }) =>
        StructureBuilder.listItem()
          .icon(Icon)
          .title(title)
          .child(
            StructureBuilder.document()
              .documentId(documentId)
              .schemaType(schemaType)
          )
      ),
      ...StructureBuilder.documentTypeListItems().filter(
        (listItem: { getId: () => string }) => {
          return ![...pageSchemaTypes, `media.tag`].includes(listItem.getId());
        }
      ),
    ]);
}
