module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'prettier/prettier': ['error', {bracketSpacing: true}],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-bitwise': 'off',
        'no-console': ['warn', {allow: ['warn', 'error']}],
        // 'simple-import-sort/imports': 'error',
        // if we need configure groups
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              ['^react'],
              ['^react-native'],
              ['^antd'],
              ['^@?\\w'],
              ['@/(.*)'],
              ['^[./]'],
            ],
          },
        ],
      },
    },
  ],
};
