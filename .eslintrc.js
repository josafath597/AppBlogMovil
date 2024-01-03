module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 'off',
    'no-use-before-define': ['error', { variables: false }],
    'linebreak-style': 0,
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
  },
};
