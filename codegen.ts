import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      'https://cms-partisipasiku.bphn.go.id/graphql/': {
        headers: {
          Authorization: `Bearer ef2cff60c0aeac71af30738ca377bd919f449ae046d17afe91f4d2ed556076c5e129f051660bb5f7997acc44781d6a09c0b7266f37237723d824b3889424c279f48e6430e75f76a3abc044afe81766c4125a2bc14ba61b6bc6eea8916c22bda5441db61f391e8cc7019363b6c120319177508d40a1f9ddcb6092a34431c03ad0`,
        },
      },
    },
  ],
  documents: ['src/**/*.tsx', 'src/**/*.ts'],
  generates: {
    'src/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
