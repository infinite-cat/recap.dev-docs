---
id: tracing-express-application
title: Tracing an ExpressJS Application
sidebar_label: ExpressJS-based Application
slug: /tracing/express-application
---

Recap.dev provides two levels of tracing: **basic tracing** and **function-level** tracing

**Basic tracing** collects request, response and error information, logs and provides a timeline of external resource access (databases, http endpoints, external services) of your unit (basically, endpoint or handler).

**Function-level** tracing also adds timings of the individual function calls to the timeline.

## Setting up a Basic Tracing

#### 1. Install recap.dev client library

```shell
yarn add @recap.dev/client
```

or

```shell
npm i --save @recap.dev/client
```


#### 2. Wrap your express application with recap.dev tracing

```js
import { traceExpress, tracer, captureConsoleLogs } from '@recap.dev/client'
import express from 'express'

traceExpress(express)
captureConsoleLogs()

const app = express()
const port = 3000

app.get('/trace-http-request', async (req, res) => {
  tracer.setUnitName('dev-get-cat-facts')
  const fact = await catFactsService.getFact()
  res.json(fact)
})
```

Note the `captureConsoleLogs()` call which will automatically collect `console.log` logs for your trace.

#### 3. Add `tracer.setUnitName` calls inside your handlers with appropriate names of your handlers.

#### 4. Set the `RECAP_DEV_SYNC_ENDPOINT` environment variable to point at your recap.dev server's sync endpoint, for example:

```
http://recap-dev.company.com:8080/traces
```

Check out an example project [here](https://github.com/infinite-cat/recap.dev-example-express-project).

## Setting up a Function-level Tracing

Click [here](/docs/tracing/function-level-tracing) to learn how to set up the function-level tracing for your application.
