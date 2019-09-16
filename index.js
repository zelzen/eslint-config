/**
 * Base Eslint Config
 */
module.exports = {
  extends: require.resolve('eslint-config-airbnb-base'),
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  globals: {
    document: true,
    history: true,
    window: true,
  },
  rules: {
    // Standard Indentation of 2 spaces
    indent: ['error', 2, {
      SwitchCase: 1,
    }],
    'max-len': ['warn', 100, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'comma-dangle': ['warn', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore',
    }],
    // Sometimes this is useful to give meaning to private props
    'no-underscore-dangle': 'off',
    'prefer-destructuring': ['error', {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      // Forcing Destructuring for assignment expressions
      // can lead to un-cleaner/messier code so we turn this off.
      /* Example
          // With On
          const [_, name] = this.props.data.field.split('.')
          this.name = name;
          // With Off
          this.name = this.props.data.field.split('.')[1];
      */
      AssignmentExpression: {
        array: false,
        object: false,
      },
    }],
    'import/prefer-default-export': 'warn',
    'import/extensions': 'off',
    // Always wrap arrow functions in parens. No x => x
    'arrow-parens': ['error', 'always'],
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true,
    }],
    'no-unused-vars': ['error', {
      // Allow "unused" underscore.
      // const isOld = (_name, age) => age > 1;
      'argsIgnorePattern': '^_',
    }],
    'no-plusplus': ['error', {
      allowForLoopAfterthoughts: true,
    }],
    // It is useful to add comments into invocation occasionally.
    'function-paren-newline': 'off',
    // Should use a common logger for logs
    // This could even be a wrapper around `console.log`
    'no-console': 'warn',
    // Inline requires can be useful in node for
    // dynamically loading a module.
    'global-require': 'off',
    // Use prettier if you want something this strict
    'lines-between-class-members': 'off',
    // Running eslint --fix with this on removes
    // comments inside of line break
    'implicit-arrow-linebreak': 'off',
    // Require consistent line-break or no line-breaks
    'object-curly-newline': ['error', {
      ObjectExpression: { consistent: true },
      ObjectPattern: { consistent: true },
      ImportDeclaration: { consistent: true },
      ExportDeclaration: { consistent: true },
    }],
    // Should be using something like prettier for strict formatting
    'operator-linebreak': 'off',
    // Shadow variables can be confusing but shouldn't be errors
    'no-shadow': 'warn',
    // Turn off Airbnb restricted syntax
    // We don't have the same restrictions.
    'no-restricted-syntax': 'off',
    // Use what makes sense.
    // Such as: Camel case for vars, snake-case for constants
    'camelcase': 'off',
    // This is fine an can lead to clearer code
    // Should be case by case in a code review.
    'no-param-reassign': 'off',
    // Throwing errors is preferred but not required
    'no-throw-literal': 'off',
    'prefer-promise-reject-errors': 'off',
    // Choice to use `const` if var isn't reassigned.
    'prefer-const': ['error', {
      // Destructuring is excluded from this since you only get one keyword.
      destructuring: 'all',
    }],
    // Use Typescript to catch return types.
    'consistent-return': 'off',
  },
};
