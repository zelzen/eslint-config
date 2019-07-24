module.exports = {
  extends: require.resolve('eslint-config-airbnb'),
  rules: {
    // Standard Indentation of 2 spaces
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    // This is up the user, and code reviews.
    // Single lookups shouldn't require an intermediate variable
    'react/destructuring-assignment': 'off',
    // This could lead to react no rerendering when it should.
    // index should be used if nothing else unique is available.
    'react/no-array-index-key': 'warn',
    'react/require-default-props': 'off',
    // You can use jsx outside of a file.jsx file
    'react/jsx-filename-extension': 'off',
    // You would need componentDidMount setState for Server Side Rendering
    'react/no-did-mount-set-state': 'off',
    // This is fine for simple text.
    // Use prettier to strict format your code
    'react/jsx-one-expression-per-line': 'off',
    // The JSX A11y Docs explain that Static elements such as <div> and <span>
    // should not have mouse/keyboard event listeners.
    // Instead use something more semantic, such as a button or a link.
    // However, there are often times when you truly do need to interact with
    // the layout and things like inputs and buttons are not suitable.
    // (e.g. - drag and drop elements in an admin panel, loosing focus on a modal or popover, etc.)
    'jsx-a11y/no-static-element-interactions': 'off',
    // Allowing special link prop "to" not to throw error. (https://github.com/ReactTraining/react-router/issues/5598)
    // TODO: Remove once https://github.com/airbnb/javascript/pull/1648 has been released
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['to'],
      aspects: ['noHref', 'invalidHref', 'preferButton'],
    }],
  },
};
