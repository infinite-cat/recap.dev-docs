---
id: tracing-netlify-functions
title: Tracing Netlify Functions
sidebar_label: Netlify Functions
slug: /tracing/netlify-functions
---

Recap.dev provides two levels of tracing for Netlify functions: **basic tracing** and **function-level** tracing

**Basic tracing** collects request, response and error information, logs, and provides a timeline of external resource access (databases, HTTP endpoints, external services) of your unit (basically, endpoint or handler).

**Function-level** tracing also adds timings of the individual function calls to the timeline.

## Setting up a Basic Tracing

Recap.dev currently supports tracing of Netlify Functions out of the box.

#### 1. Install Recap.Dev Client Library

```bash
yarn add @recap.dev/client
```

or

```bash
npm i --save @recap.dev/client
```

#### 2. Wrap Your Handler Functions with Recap.Dev Tracing

```js
import { wrapNetlifyHandler } from '@recap.dev/client'

export const handler = wrapNetlifyHandler(async (event, context) => {
  return {
    statusCode: 200,
    body: "Hello, World"
  };
});
```

#### 3. Add `RECAP_DEV_SYNC_ENDPOINT` environment variable

Please refer to the [official environment variables documentation entry](https://docs.netlify.com/configure-builds/environment-variables/) on Netlify.

It should point to your recap.dev server installation. For example:

```yml
  RECAP_DEV_SYNC_ENDPOINT: http://recap-dev.company.com:8080/traces
```

After doing this and redeploying you should start getting tracing data with basic details.

Check out a complete example project [here](https://github.com/infinite-cat/netlify-functions-example).

## Unit Name

A unit is a minimal tracked component in recap.dev. 
By configuring unit names you can select a granularity of your data to your liking.

The default unit name strategy for Netlify Functions is concatenating a site name and the handler URL path. For example:

```
reverent-feynman-06886b/.netlify/functions/index
```

Which will result in a unit being a handler in a specific environment.

You can always modify the name of the unit in the current trace by calling `tracer.setUnitName` like this:

```js
import { tracer } from '@recap.dev/client'

tracer.setUnitName('dev-get-cat-facts')
```

## Setting up a Function-level Tracing

Recap.dev currently supports function-level tracing of Netlify Functions with a babel plugin.
If you already have babel set up in your project please refer to the [generic Babel function-level setup guide](/docs/tracing/function-level-tracing#babel-plugin).

Please follow this guide if you haven't configured Babel for your Netlify Functions project yet. 

#### 1. Install Dev Dependencies and the Recap.Dev Babel Plugin

```bash
yarn add --dev @babel/plugin-transform-runtime @babel/preset-env @babel/runtime @recap.dev/babel-plugin
```

or

```bash
npm i --save-dev @babel/plugin-transform-runtime @babel/preset-env @babel/runtime @recap.dev/babel-plugin
```

#### 2. Create a Minimal `.babelrc` File in Your Project Root with the Following Content

```json
{
  "presets": [
    [
      "@babel/preset-env", {
      "modules": false
    }
    ]
  ],
  "plugins": [
    ["@babel/plugin-transform-runtime",
      {
        "regenerator": true
      }
    ],
    "@recap.dev/babel-plugin"
  ]
}
```
