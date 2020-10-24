---
id: tracing
title: Tracing Your Application
sidebar_label: Tracing Your Application
slug: /tracing
---

recap.dev provides two levels of tracing: **basic tracing** and **function-level** tracing

**Basic tracing** collects request, response and error information, logs and provides a timeline of external resource access (databases, http endpoints, external services) of your unit (basically, endpoint or handler).

**Function-level** tracing also adds timings of the individual function calls to the timeline.

## Setting up a basic tracing

recap.dev currently supports tracing of Serverless and Express frameworks out of the box.

Please submit a request to support your favorite framework [here](https://github.com/infinite-cat/recap.dev-server/issues).

### Serverless Framework

To use recap.dev with the Serverless Framework all you need to do is to add recap.dev
serverless plugin and configure it.

#### 1. Install recap.dev serverless plugin

`yarn add --dev @recap.dev/serverless-plugin`

or

`npm i --save-dev @recap.dev/serverless-plugin`

#### 2. Install recap.dev client library

`yarn add @recap.dev/client`

or

`npm i --save @recap.dev/client`

#### 3. Add recap.dev plugin to your serverless.yml

Please note that recap.dev plugin should be the first plugin in the list.

```yml
plugins:
  - "@recap.dev/serverless-plugin"
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

### Express Framework

#### 1. Install recap.dev client library

`yarn add @recap.dev/client`

or

`npm i --save @recap.dev/client`


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

## Setting up a function-level tracing

To add a **function-level** tracing you need to add a recap.dev babel plugin

#### 1. Install babel plugin


`yarn add --dev @recap.dev/babel-plugin`

or

`npm i --save-dev @recap.dev/babel-plugin`

#### 2. Add plugin to your .babelrc

```json
  "plugins": ["@recap.dev/babel-plugin"]
```

