---
id: tracing-vercel-functions
title: Tracing Vercel Serverless Functions
sidebar_label: Vercel Serverless Functions
slug: /tracing/vercel-serverless-functions
---

Recap.dev currently only provides **basic tracing** for the Vercel Serverless Functions.

**Basic tracing** collects request, response and error information, logs, and provides a timeline of external resource access (databases, HTTP endpoints, external services) of your unit (basically, endpoint or handler).

## Setting up a Basic Tracing

Recap.dev currently provides a wrapper for Vercel Functions out of the box.

#### 1. Install Recap.Dev Client Library

```bash
yarn add @recap.dev/client
```

or

```bash
npm i --save @recap.dev/client
```

#### 2. Wrap Your Handler Functions with Recap.Dev Tracing

Use `wrapVercelHandler` provided by the `@recap.dev/client` package

```js
import { wrapVercelHandler } from '@recap.dev/client'
import fetch from 'node-fetch'

module.exports = wrapVercelHandler(async (req, res) => {
  const response = await fetch('https://cat-fact.herokuapp.com/facts')
  const json = await response.json()

  res.status(200).send(json)
}, process.env.VERCEL_ENV + '/api/hello')
```

#### 3. Add `RECAP_DEV_SYNC_ENDPOINT` environment variable

Please refer to the [official environment variables documentation entry](https://vercel.com/docs/environment-variables) on Vercel.

It should point to your recap.dev server installation. For example:

```yml
  RECAP_DEV_SYNC_ENDPOINT: http://recap-dev.company.com:8080/traces
```

After doing this and redeploying you should start getting tracing data with basic details.

Check out a complete example project [here](https://github.com/infinite-cat/vercel-lambda-example).

## Unit Name

A unit is a minimal tracked component in recap.dev.
By configuring unit names, you can select a granularity of your data to your liking.

Unfortunately, there is currently no way of providing a per-endpoint name automatically for Vercel Functions.

The strategy used in the example project is concatenating an environment name and the hardcoded handler URL path. 
Which will give a unit name like this:

```
preview/api/hello
```

Which will result in a unit being a handler in a specific environment.

You can always modify the name of the unit in the current trace by calling the `tracer.setUnitName` method like this:

```js
import { tracer } from '@recap.dev/client'

tracer.setUnitName('dev-get-cat-facts')
```
