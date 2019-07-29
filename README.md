# @zelz/eslint-config

Zelzen Eslint Config

## Install

```sh
yarn add -D @zelz/eslint-config
```

## Usage

eslint config

```js
{
  "extends": [
    "@zelz/eslint-config", // Base file. This should be included at the top.
    "@zelz/eslint-config/react", // Add if you're using react.
    "@zelz/eslint-config/typescript", // Add if you're using typescript.
    "@zelz/eslint-config/prettier", // Add if you want prettier to format your code (recommended)
    "prettier/@typescript-eslint", // Helpful if you are using prettier and typescript, but not required.
  ],
  "rules": {
    // Add custom rules and overrides here
  }
}
```
