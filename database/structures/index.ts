import StructureBuilder from "@sanity/desk-tool/structure-builder";

type Page = {
  documentId: string;
  schemaType: string;
  title: string;
};

const pages: Array<Page> = [
  {
    documentId: `home`,
    schemaType: `home`,
    title: `Home`,
  },
  {
    documentId: `story`,
    schemaType: `story`,
    title: `Story`,
  },
  {
    documentId: `registry`,
    schemaType: `registry`,
    title: `Registry`,
  },
];

const pageSchemaTypes: Array<string> = pages.map(
  ({ schemaType }) => schemaType
);

export default function buildStructure() {
  return StructureBuilder.list()
    .title("Pages")
    .items([
      ...pages.map(({ documentId, schemaType, title }) =>
        StructureBuilder.listItem()
          .title(title)
          .child(
            StructureBuilder.document()
              .documentId(documentId)
              .schemaType(schemaType)
          )
      ),
      ...StructureBuilder.documentTypeListItems().filter(
        (listItem: { getId: () => string }) =>
          !pageSchemaTypes.includes(listItem.getId())
      ),
    ]);
}
