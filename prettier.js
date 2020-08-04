module.exports = {
  extends: [
    'plugin:prettier/recommended',
  ],
  rules: {
    // Turn off react styling rules
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-wrap-multilines': 'off',
  },
};
