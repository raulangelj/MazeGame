module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'html',
  ],
  rules: {
    // eslint-disable-next-line quote-props
    'semi': ['error', 'never'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
  },
  globals: {
    // eslint-disable-next-line quote-props
    'React': 'readonly',
    // eslint-disable-next-line quote-props
    'ReactDOM': 'readonly',
  },
};
