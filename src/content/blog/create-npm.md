---
publishDate: 2023-05-12
title: 用 TypeScript 和 rollup.js 创建一个 npm 包模板
excerpt: 创建一个npm仓库，快速构建个人或开源仓库
image: /images/blog/a-1.png
readingTime: 8
tags:
  - npm
  - github
---

## 设置模板项目

> 首先，我们需要为包模板创建一个文件夹并运行 yarn init 或者 npm init。

```
$ mkdir mypackagetemplate
$ cd mypackagetemplate
$ yarn init or npm init
```

参考 package.json

```
{
  "name": "paces",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "rollup -c",
    "lint": "eslint --fix 'src/**/*.ts'",
    "test": "jest"
  },
  "type": "module",
  "types": "index.d.ts",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.21.8",
    "@babel/preset-env": "^7.21.5",
    "@rollup/plugin-babel": "^6.0.3",
    "@rollup/plugin-commonjs": "^24.1.0",
    "@rollup/plugin-json": "^6.0.0",
    "@rollup/plugin-node-resolve": "^15.0.2",
    "@rollup/plugin-terser": "^0.4.1",
    "@rollup/plugin-typescript": "^11.1.0",
    "@types/jest": "^29.5.1",
    "@typescript-eslint/eslint-plugin": "^5.59.5",
    "@typescript-eslint/parser": "^5.59.5",
    "add": "^2.0.6",
    "eslint": "^8.40.0",
    "jest": "^29.5.0",
    "rollup": "^3.21.6",
    "rollup-plugin-auto-external": "^2.0.0",
    "ts-jest": "^29.1.0",
    "tslib": "^2.5.0",
    "typescript": "^5.0.4"
  },
  "jest": {
    "moduleFileExtensions": [
      "ts",
      "js"
    ],
    "transform": {
      "^.+\\.ts$": "ts-jest"
    },
    "globals": {
      "ts-jest": {
        "tsconfig": "tsconfig.json"
      }
    },
    "testMatch": [
      "**/test/**/*.test.ts"
    ]
  },
  "dependencies": {
    "-": "^0.0.1"
  }
}

```

## 为模板安装包

在这一步中，我们为模板安装一些包。

```
$ yarn add typescript --dev

# generate tsconfig.json

$ yarn tsc --init
```

像下面这样更新生成的 tsconfig.json。

```
{
  "compilerOptions": {
    /* Projects */
    /* Language and Environment */
    "target": "esnext" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,

    /* Modules */
    "module": "esnext" /* Specify what module code is generated. */,

    /* Interop Constraints */
    "esModuleInterop": true /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */,
    "forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */,

    /* Type Checking */
    "strict": true /* Enable all strict type-checking options. */,
    "skipLibCheck": true /* Skip type checking all .d.ts files. */
  }
}
```

## 写代码

```
$ mkdir src
$ cd src
$ touch index.ts
$ touch odd_even.ts
```

- odd_even.ts
  代码超级简单。只需传递一个数字，如果数字是偶数，它将返回 true。

```
export default (value: number): boolean => {
  return value %2 ==0 ? true : false;
}
```

- index.ts
  以下代码允许我们导入如下代码。

```
import { odd_even } from 'package-name'
import odd_even from './odd_even';

export default {
  odd_even: odd_even,
}
```

## 添加 ESLint

在这一步中，我们将设置 eslint 和 Jest。

我们将安装 eslint 和 jest。
yarn run eslint --init 命令允许我们有吸引力地创建配置文件。

```
$ yarn add eslint jest ts-jest -D
$ yarn run eslint --init
# settings for this
# ❯ To check syntax and find problems
# ❯ JavaScript modules (import/export)
# ❯ None of these
# ? Does your project use TypeScript? › No / ❯ Yes
# ✔ Browser
# ✔ Node
# ❯ JavaScript
# ? Would you like to install them now with npm? › No / ❯ Yes
```

.eslintrc.js 您将在项目文件夹中看到

```
module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
    }
};
```

我们需要修改 package.json 才能运行 eslint。

```
  "scripts": {
    "build": "rollup -c",
    "lint": "eslint --fix 'src/**/*.ts'",
    "test": "jest"
  },
```

现在我们可以对 src.

```
yarn lint
```

然后，将 jest 的配置添加到 package.json

```
"jest": {
    "moduleFileExtensions": [
      "ts",
      "js"
    ],
    "transform": {
      "^.+\\.ts$": "ts-jest"
    },
    "globals": {
      "ts-jest": {
        "tsconfig": "tsconfig.json"
      }
    },
    "testMatch": [
      "**/test/**/*.test.ts"
    ]

```

## 写测试

首先，创建一个测试文件夹

```
$ mkdir test
test/odd_even.test.ts
```

测试代码也很简单 odd_even.ts。该代码测试 2 种情况，奇数 (1) 和偶数 (2)。

```
import odd_even from '../src/odd_even';

describe('test odd_even', (): void => {
  test('odd', (): void => {
    const resp: boolean = odd_even(1);
    expect(resp).toBe(false);
  });

  test('even', (): void => {
    const resp: boolean = odd_even(2);
    expect(resp).toBe(true);
  });
});
```

现在我们可以使用以下命令运行测试

```
$ yarn test
```

## 设置 rollup.js

最后一步是设置 rollup.js（包括 Babel）

```
$ yarn add @rollup/plugin-terser @rollup/plugin-json @rollup/plugin-typescript @rollup/plugin-commonjs @rollup/plugin-node-resolve @rollup/plugin-babel -D
```

Add .babelrc.js

```
module.exports = {
  presets: [
    [
      "@babel/preset-env",
    ],
  ],
};
```

参考

```
import terser from "@rollup/plugin-terser"; // 将 JavaScript 代码压缩为更小的文件
import json from "@rollup/plugin-json"; // 将 JSON 格式的模块作为 ES6 模块导入
import rollupTypescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";

import autoExternal from "rollup-plugin-auto-external"; // 自动将所有的依赖包排除在打包之外

const outputFileName = "paces";
const name = "paces";
const namedInput = "src/index.ts";
const currentVersion = "v1.0.0";
const authName = "yud";
const defaultInput = "lib/paces.ts";

const extensions = [".ts"];

const buildConfig = ({ es5, browser = true, ...config }) => {
  return [
    {
      input: namedInput,
      ...config,

      plugins: [
        json(),
        resolve({ browser }),
        commonjs(),
        rollupTypescript({ tsconfig: "./tsconfig.json" }),
        terser(),
        ...(es5
          ? [
              babel({
                babelHelpers: "bundled",
                presets: ["@babel/preset-env"],
              }),
            ]
          : []),
        ...(config.plugins || []),
      ],
    },
  ];
};

export default async () => {
  const year = new Date().getFullYear();
  const banner = `// Axios Min v${currentVersion} Copyright (c) ${year} ${authName} and contributors`;

  return [
    // browser ESM bundle for CDN
    ...buildConfig({
      input: namedInput,
      output: {
        file: `dist/esm/${outputFileName}.js`,
        format: "esm",
        preferConst: true,
        exports: "named",
        banner,
      },
    }),
    // Browser UMD bundle for CDN
    ...buildConfig({
      input: defaultInput,
      es5: true,
      output: {
        file: `dist/${outputFileName}.js`,
        name,
        format: "umd",
        exports: "default",
        banner,
      },
    }),
    // Browser CJS bundle
    ...buildConfig({
      input: defaultInput,
      es5: false,
      output: {
        file: `dist/browser/${name}.cjs`,
        name,
        format: "cjs",
        exports: "default",
        banner,
      },
    }),
    // Node.js commonjs bundle
    {
      input: defaultInput,
      output: {
        file: `dist/node/${name}.cjs`,
        format: "cjs",
        preferConst: true,
        exports: "default",
        banner,
      },
      plugins: [
        rollupTypescript({ tsconfig: "./tsconfig.json" }),
        autoExternal(),
        resolve({ extensions }),
        commonjs(),
      ],
    },
  ];
};
```

## 最后

```
$ yarn build
```

后续会写一个模板