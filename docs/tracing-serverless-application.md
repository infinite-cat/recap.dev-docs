---
id: tracing-serverless-application
title: Tracing Serverless Application
sidebar_label: Serverless Application
slug: /tracing/serverless-application
---

Recap.dev provides two levels of tracing: **basic tracing** and **function-level** tracing

**Basic tracing** collects request, response and error information, logs and provides a timeline of external resource access (databases, http endpoints, external services) of your unit (basically, endpoint or handler).

**Function-level** tracing also adds timings of the individual function calls to the timeline.

## Setting up a Basic Tracing

Recap.dev currently supports tracing of Serverless Framework out of the box. 
It's also easy to setup tracing for [applications not using Serverless Framework](/docs/tracing/serverless-application#applications-not-using-serverless-framework).

### Serverless Framework

To use recap.dev with the Serverless Framework all you need to do is to add recap.dev
serverless plugin and configure it.

#### 1. Install recap.dev serverless plugin

```bash
yarn add --dev @recap.dev/serverless-plugin
```

or

```bash
npm i --save-dev @recap.dev/serverless-plugin
```

#### 2. Install recap.dev client library

```bash
yarn add @recap.dev/client
```

or

```bash
npm i --save @recap.dev/client
```

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
