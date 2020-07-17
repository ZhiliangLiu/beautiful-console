module.exports = {
  parser: '@typescript-eslint/parser',
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['@typescript-eslint', 'prettier']
}
