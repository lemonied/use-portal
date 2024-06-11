module.exports = {
  extends: [
    require.resolve('@umijs/lint/dist/config/eslint'),
    'plugin:react-hooks/recommended',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    'semi': 'error',
    'object-curly-spacing': ['error', 'always'],
    'no-console': 'warn',
    'quotes': ['error', 'single'],
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'keyword-spacing': 'error',
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    'camelcase': ['error', {
      'properties': 'never',
    }],
    'space-infix-ops': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'key-spacing': ['error', {
      'beforeColon': false,
      'afterColon': true,
    }],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'no-debugger': 'warn',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
  },
};
