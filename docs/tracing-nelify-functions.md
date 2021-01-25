---
id: tracing-netlify-functions
title: Tracing Netlify Functions
sidebar_label: Netlify Functions
slug: /tracing/netlify-functions
---

Recap.dev provides two levels of tracing: **basic tracing** and **function-level** tracing

**Basic tracing** collects request, response and error information, logs and provides a timeline of external resource access (databases, http endpoints, external services) of your unit (basically, endpoint or handler).

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

#### 4. Add `RECAP_DEV_SYNC_ENDPOINT` environment variable

It should point to your recap.dev server installation.

```yml
provider:
  environment:
    RECAP_DEV_SYNC_ENDPOINT: http://recap-dev.company.com:8080/traces
```

After doing this and redeploying you should start getting tracing data with basic details.

Check out an example project [here](https://github.com/infinite-cat/recap.dev-example-serverless-project).


### Applications Not Using Serverless Framework

Almost any serverless application can be easily traced with recap.dev even when not using Serverless Framework.

#### 1. Install recap.dev client library

```bash
yarn add @recap.dev/client
```

or

```bash
npm i --save @recap.dev/client
```


#### 2. Wrap Your Handler Function with Recap.Dev

Use `wrapLambdaHandler` exported from the `@recap.dev/client` package like this:

```js
import { wrapLambdaHandler } from '@recap.dev/client'

export const handler = wrapLambdaHandler(async () => {
  const response = await fetch('https://cat-fact.herokuapp.com/facts')
  return response.json()
})
```

#### 3. Add `RECAP_DEV_SYNC_ENDPOINT` environment variable

It should point to your recap.dev server installation.

```yml
provider:
  environment:
    RECAP_DEV_SYNC_ENDPOINT: http://recap-dev.company.com:8080/traces
```

## Setting up a Function-level Tracing

Click [here](/docs/tracing/function-level-tracing) to learn how to set up the function-level tracing for your application.
