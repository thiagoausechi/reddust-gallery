/** @type {import('prettier').Config} */
module.exports = {
  plugins: [
    require('prettier-plugin-tailwindcss'),
    require('prettier-plugin-tailwind-styled-components'),
  ],
  tailwindFunctions: ['tw'],

  trailingComma: 'all',
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  bracketSameLine: false,
  arrowParens: 'always',
}
