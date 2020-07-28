module.exports = {
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    // Disables rules handled by Typescript
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // Typescript handles module resolutions
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    // Turn off default and use @typescript's no-unused-vars.
    // Default causes false positives in ts files.
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {
      // Ignore variables that start with underscores
      varsIgnorePattern: '^_',
      argsIgnorePattern: '^_',
    }],
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': ['error', {
      default: 'generic',
    }],
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/triple-slash-reference': 'error',
  },
};
