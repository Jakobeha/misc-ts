[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

# misc-ts

Various utilities for TypeScript and JavaScript.

Requires `string-width` for some string utilities.

## Installing

misc-ts can be installed using [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/).

```shell
pnpm install @raycenity/misc-ts
```

Alternatively you can just download the built code directly [here](https://github.com/Jakobeha/misc-ts/releases/latest). The code is an unminified ES module (learn about ES modules [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules))

## Repository info (e.g. for contributing)

misc-ts is built using [esbuild](https://esbuild.org/). The package manager used is [pnpm](https://pnpm.io/). Linting is done by [standard](https://standardjs.com/), however we use a *slightly* modified version removing some warnings which is run through `pnpm run lint` (specifically `node ts-standardx.mjs`).
