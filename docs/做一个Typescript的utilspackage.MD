# 做一个 TypeScript 的 utils 类 package

做一个 npm 模块 需要关注这几个点：可靠性，代码约束，通俗易懂的文档。
其中：

1. 可靠性需要单元测试支持(覆盖率)
2. 代码约束需要 Typescript 支持
3. 文档可读性需要写好 markdown

## devDependencies

用到的依赖大概来讲分为: ts 核心依赖、eslint 相关、UT 相关、代码压缩相关：

- typescript
- eslint
- @typescript-eslint/parser
- @typescript-eslint/eslint-plugin
- @types/jest
- ts-jest
- jest
- microbundle/rollup

其中：parser 和 eslint-plugin 要同版本号，@types/jest 中包含了 jest 中没有的类型定义，需要在 ts 项目中使用。microbundle 是封装过的 rollup 酌情使用。

```sh
yarn add -D typescript eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin @types/jest ts-jest jest microbundle
```

## tsconfig.json

这边遇到最多的问题就是 commonJS 和 es6 冲突问题，简单来说就是加上:

```json
{
  "module": "es2015",
  "allowSyntheticDefaultImports": true,
  "esModuleInterop": true
}
```

举个例子：

```tsx
import React from "react";

console.log(React);
```

因为 React 是 commonJS 导出，所以报错

```txt
Module '"react"' has no default export.
```

ts 转换成 commonJS 代码会多出很多，所以一般都用 es2015，利于 webpack tree shaking

