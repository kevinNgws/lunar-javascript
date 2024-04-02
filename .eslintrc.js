module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
    // "es6": true
  },
  extends: 'eslint:recommended',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    // indent: ['error', 2, ],
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    semi: ['error', 'always'],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    'quote-props': ['error', 'as-needed'],
    'object-curly-spacing': ['error', 'always'],
    'max-len': ['error', { code: 150 }],
    'no-restricted-globals': ['error', 'name', 'length'],
    'prefer-arrow-callback': 'error',
  },
};
