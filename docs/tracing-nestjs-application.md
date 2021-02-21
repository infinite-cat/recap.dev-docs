---
id: tracing-nestjs-application
title: Tracing a NestJS Application
sidebar_label: NestJS Application
slug: /tracing/nestjs-application
---

Recap.Dev provides two levels of tracing: **basic tracing** and **function-level** tracing.

**Basic tracing** collects request, response and error information, logs, and provides a timeline of external resource access (databases, HTTP endpoints, external services) of your unit (basically, endpoint or handler).

**Function-level** tracing also adds timings of the individual function calls to the timeline.

## Setting up a Basic Tracing

#### 1. Install the Recap.Dev Client Library

```shell
yarn add @recap.dev/client
```

or

```shell
npm i --save @recap.dev/client
```

#### 2. Enable the NestJS Tracing

Call the `initNestJsTracing` function before creating your NestJS app.

```js
import { initNestJsTracing } from '@recap.dev/client';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

initNestJsTracing();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}

bootstrap();
```

You may also pass these options to the `initNestJsTracing` function:

- **captureLogs** - Enables or disables capture of logs from global console object. Defaults to true.
- **disableAutomaticUnitNames** - Disables default `environment-injectable.methodName` unit names. Defaults to false.
- **ignoreUnnamedUnits** - Ignore traces without a unit name.
  Useful if you want to ignore requests to static assets or only trace particular modules. Defaults to true.
- **assignUnitName** - Defines a unit name for a trace. 
  The default strategy creates a unit name using a first injectable method appearing in the chain and an environment.
  An example of the unit name generated is `local-CatFactsResolver.catFacts`


#### 3. Wrap NestJS Modules to Trace Them

Wrap a NestJS module with `wrapNestJsModule` function exported from the `@recap.dev/client` to trace it with Recap.Dev.


```js
import { initNestJsTracing, wrapNestJsModule } from '@recap.dev/client';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

initNestJsTracing();

async function bootstrap() {
  const app = await NestFactory.create(wrapNestJsModule(AppModule));

  await app.listen(3000);
}

bootstrap();
```

#### 4. Set the `RECAP_DEV_SYNC_ENDPOINT` environment variable to point at your Recap.Dev server's sync endpoint, for example:

```
http://recap-dev.company.com:8080/traces
```

Check the complete source code of an example NestJS project traced with Recap.Dev [here](https://github.com/infinite-cat/recap.dev-example-nestjs-project).

## Setting up a Function-level Tracing

Click [here](/docs/tracing/function-level-tracing) to learn how to set up the function-level tracing for your application.
