module.exports = {
  extends: require.resolve('eslint-config-airbnb'),
  parser: 'babel-eslint',
  env: {
    browser: true,
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
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'max-len': ['warn', 120, 4, {
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
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    // Always wrap arrow functions in parens. No x => x
    'arrow-parens': ['error', 'always'],
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true,
    }],
    'no-plusplus': ['error', {
      allowForLoopAfterthoughts: true,
    }],
    // It is useful to add comments into invocation occasionally.
    'function-paren-newline': 'off',
    // Use a custom logger for logs
    'no-console': 'error',
    // Inline requires are actually useful for not wasting a
    // variable name on a `import [image] from [imageDir]`;
    'global-require': 'off',
    // This is up the user, and code reviews
    // Single lookups shouldn't require an intermediate variable
    'react/destructuring-assignment': 'off',
    'react/no-array-index-key': 'warn',
    'react/require-default-props': 'off',
    // You can use jsx outside of a file.jsx file
    'react/jsx-filename-extension': 'off',
    // We need componentDidMount setState for Server Side Rendering
    'react/no-did-mount-set-state': 'off',
    // This is fine for simple text.
    // Use prettier to strict format your code
    'react/jsx-one-expression-per-line': 'off',
    // The JSX A11y Docs explain that Static elements such as <div> and <span> should not have mouse/keyboard event listeners.
    // Instead use something more semantic, such as a button or a link.
    // However, there are often times when you truly do need to interact with the layout and things like inputs and buttons are not suitable.
    // (e.g. - drag and drop elements in an admin panel, loosing focus on a modal or popover, etc.)
    'jsx-a11y/no-static-element-interactions': 'off',
    // Allowing special link prop "to" not to throw error. (https://github.com/ReactTraining/react-router/issues/5598)
    // TODO: Remove once https://github.com/airbnb/javascript/pull/1648 has been released
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['to'],
      aspects: ['noHref', 'invalidHref', 'preferButton'],
    }],
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
  }
};
