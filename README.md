[actions-badge]: https://img.shields.io/github/workflow/status/jimmy-guzman/comparto-eslint-config/cicd?label=actions&logo=github-actions&style=flat-square
[version-badge]: https://img.shields.io/npm/v/@comparto/eslint-config.svg?logo=npm&style=flat-square
[package]: https://www.npmjs.com/package/@comparto/eslint-config
[downloads-badge]: https://img.shields.io/npm/dm/@comparto/eslint-config.svg?logo=npm&style=flat-square
[npmtrends]: http://www.npmtrends.com/@comparto/eslint-config
[semantic-release]: https://github.com/semantic-release/semantic-release
[semantic-release-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square
[coverage-badge]: https://img.shields.io/codecov/c/github/jimmy-guzman/comparto-eslint-config.svg?style=flat-square
[coverage]: https://codecov.io/github/jimmy-guzman/comparto-eslint-config
[prettier-badge]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[prettier]: https://github.com/prettier/prettier
[prettier-config]: https://prettier.io/docs/en/configuration.html
[eslint-import-resolver-webpack]: https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers/webpack#eslint-import-resolver-webpack
[eslint-parser-options]: https://eslint.org/docs/user-guide/configuring#specifying-parser-options
[ts-eslint-naming-conventions-so]: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md#selector-options

![actions][actions-badge]
[![version][version-badge]][package] [![downloads][downloads-badge]][npmtrends]
[![Code Coverage][coverage-badge]][coverage]
[![semantic-release][semantic-release-badge]][semantic-release]
[![code style: prettier][prettier-badge]][prettier]

# @comparto/eslint-config

This package provides a shareable ESLint configuration with rules for react, typescript, javascript, jest, and @testing-library.

## Usage:

This will enable `jest`, `react`, `typescript` or `@testing-library` rules if their respective dependency exists.

1. Install stuff:

   ```sh
   npx install-peerdeps --dev @comparto/eslint-config
   ```

   or if you wish this to be a common dependency in a yarn workspaces monorepo:

   ```sh
   # -Y --yarn, -x --extra-args, -W --ignore-workspace-root-check
   npx install-peerdeps @comparto/eslint-config --dev -Y -x -W
   ```

1. Add `"extends": "@comparto/eslint-config"` to your `.eslintrc`

## Prettier:

```sh
yarn add -D @comparto/prettier-config
```

Add `"prettier": "@comparto/prettier-config"` to your `package.json` or any [configuration][prettier-config] of your choice.

## Using webpack aliases?

This config uses [eslint-import-resolver-webpack][eslint-import-resolver-webpack] with a default setting of:

```yml
settings:
  import/resolver:
    webpack:
      config: 'webpack.dev.config.js' # or {} if not found
```

This can be overridden exactly the same as the [eslint-import-resolver-webpack][eslint-import-resolver-webpack] configuration.

## Using typescript?

This config uses some rules that require type information like [naming-convention][ts-eslint-naming-conventions-so], so `@typescript-eslint/parser`'s [parserOptions.project][eslint-parser-options] is set to `"./tsconfig.json"`. Override this value if your `tsconfig.json` is located somewhere else.
