---
id: function-level-tracing
title: Setting up a Function-level Tracing
sidebar_label: Function-level Tracing
slug: /tracing/function-level-tracing
---

**Function-level** tracing enriches your timeline with timings of individual function and method calls.

To setup a function-level tracing you need to add a recap.dev babel plugin

#### 1. Install babel plugin


`yarn add --dev @recap.dev/babel-plugin`

or

`npm i --save-dev @recap.dev/babel-plugin`

#### 2. Add plugin to your .babelrc

```json
  "plugins": ["@recap.dev/babel-plugin"]
```

