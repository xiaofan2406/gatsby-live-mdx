module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 9,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },
  plugins: ['react'],
  extends: ['airbnb', 'prettier', 'prettier/react'],
  rules: {
    'no-console': 0,
    'global-require': 0,
    'no-param-reassign': [2, { props: false }],
    'no-nested-ternary': 0,
    'import/prefer-default-export': 0,
    'react/sort-comp': 0,
    'react/jsx-filename-extension': 0, // enforce all .js extension
    'react/require-default-props': 0,
    'react/jsx-one-expression-per-line': 0, // prettier takes care of it
    'react/jsx-wrap-multilines': 0, // prettier takes care of it
    'react/destructuring-assignment': 0, // cannot init state with props
  },
};
