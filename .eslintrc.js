module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
  ],
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'no-console': 'warn',
    'prefer-destructuring': 'error',
    'arrow-body-style': ['error', 'as-needed'],
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
    react: {
      version: 'detect',
    },
  },
};
