# Snapshot report for `rules/jest.test.js`

The actual snapshot is saved in `jest.test.js.snap`.

Generated by [AVA](https://avajs.dev).

## jest.js

> eslint jest configuration

    {
      extends: [
        'plugin:jest/recommended',
      ],
      plugins: [
        'jest',
      ],
      rules: {
        'jest/no-large-snapshots': [
          'warn',
          {
            inlineMaxSize: 6,
            maxSize: 60,
          },
        ],
      },
    }