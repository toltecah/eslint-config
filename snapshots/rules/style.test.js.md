# Snapshot report for `rules/style.test.js`

The actual snapshot is saved in `style.test.js.snap`.

Generated by [AVA](https://avajs.dev).

## style.js

> eslint style configuration

    {
      env: {
        browser: true,
        es6: true,
        node: true,
      },
      extends: [
        'plugin:prettier/recommended',
        'prettier/react',
        'prettier/@typescript-eslint',
        'plugin:jest/style',
      ],
      plugins: [
        'prettier',
        'jest',
      ],
      rules: {
        'prettier/prettier': [
          'error',
          {
            arrowParens: 'avoid',
            jsxSingleQuote: true,
            printWidth: 80,
            quoteProps: 'consistent',
            semi: false,
            singleQuote: true,
            trailingComma: 'none',
          },
        ],
      },
    }