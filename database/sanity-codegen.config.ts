import { SanityCodegenConfig } from 'sanity-codegen';

const config: SanityCodegenConfig = {
  schemaPath: `./schemas`,
  outputPath: `../client/types/database/index.ts`,
};

export default config;
