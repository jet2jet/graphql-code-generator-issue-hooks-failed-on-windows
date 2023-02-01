import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "schema.graphql",
  documents: "document.graphql",
  hooks: {
    afterAllFileWrite: ["prettier --write"],
  },
  generates: {
    "types.ts": { plugins: ["typescript"] },
    "./": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.ts",
        baseTypesPath: "types.ts",
      },
      plugins: ["typescript-operations"],
    },
  },
};

export default config;
