module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx']
      }
    ],
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'react/forbid-prop-types': 1,
    'react/no-did-mount-set-state': 0,
    'react/prefer-stateless-function': 1,
    'react/jsx-uses-vars': [2],
    'jsx-a11y/anchor-is-valid': 0,
    'no-underscore-dangle': 0,
    'arrow-body-style': 0,
    'no-shadow': 0,
    'consistent-return': 0,
    'no-nested-ternary': 0,
    'no-console': 1,
    'no-case-declarations': 0,
    'import/prefer-default-export': 0
  },
  settings: {
    'import/core-modules': [
      'react',
      // "prop-types",
      'react-router-dom'
    ]
  },
  globals: {
    graphql: true
  },
  plugins: ['prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    browser: true,
    node: true
  }
}
