module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
  parser: '@typescript-eslint/parser', // 定义ESLint的解析器
  parserOptions: {
    ecmaVersion: 'latest',
    project: ['./tsconfig.json'], // 告诉 eslint：tsconfig 在哪
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-dynamic-delete': 0,
    'no-void': 0,
    '@typescript-eslint/space-before-function-paren': 0,
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/semi': 0,
    '@typescript-eslint/comma-dangle': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/prefer-readonly': 0,
    '@typescript-eslint/no-unused-expressions': 0,
    '@typescript-eslint/no-confusing-void-expression': 0,
    '@typescript-eslint/restrict-plus-operands': 0,
  },
};
