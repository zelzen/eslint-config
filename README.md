# @zelz/eslint-config

Zelzen Eslint Config  

Common eslint config with optional support for [React](https://reactjs.org/), [JSX Accessibility](https://github.com/reactjs/react-a11y), [Typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html), and [Prettier](https://prettier.io/)

## Install

```sh
yarn add -D @zelz/eslint-config
```

## Usage

eslint config

```js
{
  "extends": [
    "@zelz/eslint-config", // Base file w/ Typescript Support (if used). This should be included at the top.
    "@zelz/eslint-config/react", // Add if you're using react.
    "@zelz/eslint-config/prettier", // Add if you want prettier to format your code (recommended)
  ],
  "rules": {
    // Add custom rules and overrides here
  }
}
```
