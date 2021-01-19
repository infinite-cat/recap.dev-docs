---
id: function-level-tracing
title: Setting up a Function-level Tracing
sidebar_label: Function-level Tracing
slug: /tracing/function-level-tracing
---

**Function-level** tracing enriches your timeline with timings of individual function and method calls.

Depending on your build process, there are several ways of setting up the function-level tracing.

### Babel Plugin

One way of setting a function-level tracing up is using a recap.dev Babel plugin.

#### 1. Install The Babel Plugin


```bash
yarn add --dev @recap.dev/babel-plugin
```

or

```bash
npm i --save-dev @recap.dev/babel-plugin
```

#### 2. Add The Plugin to Your `.babelrc` File

```json
  "plugins": ["@recap.dev/babel-plugin"]
```

Check the complete source code of an example ExpressJS project traced with recap.dev Babel plugin [here](https://github.com/infinite-cat/recap.dev-example-express-project)

### TypeScript Transformer

One way of setting a function-level tracing up is using a recap.dev TypeScript transformer.
This is probably the easiest way to set it up for projects built with just a `tsc` command.

#### 1. Install Transformer Typescript (`ttypescript`) Wrapper for Your Typescript Compiler

Read more on the `ttypescript` package [here](https://github.com/cevek/ttypescript)


```bash
yarn add --dev ttypescript
```

or

```bash
npm i --save-dev ttypescript
```

#### 2. Install the Recap.Dev Typescript Transformer


```bash
yarn add --dev @recap.dev/ts-transformer
```

or

```bash
npm i --save-dev @recap.dev/ts-transformer
```

#### 3. Add the Transformer to Your `tsconfig.json` File


```json
{
  "compilerOptions": {
    ...
    "plugins": [{
      "transform": "@recap.dev/ts-transformer"
    }]
  }
}
```

#### 4. Modify Your Build Script to Use `ttsc` Instead of `tsc`

Use the `ttsc` and `ttserver` commands instead of `tsc` and `tserver` respectively to automatically apply the recap.dev TypeScript transformer.

Check the complete source code of an example ExpressJS project traced with recap.dev TypeScript transformer [here](https://github.com/infinite-cat/recap.dev-example-tsc-express-project)
