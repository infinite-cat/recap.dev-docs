---
id: tracing-nestjs-application
title: Tracing NestJS Application
sidebar_label: NestJS Application
slug: /tracing/nestjs-application
---

Recap.dev provides two levels of tracing: **basic tracing** and **function-level** tracing.

**Basic tracing** collects request, response and error information, logs, and provides a timeline of external resource access (databases, http endpoints, external services) of your unit (basically, endpoint or handler).

**Function-level** tracing also adds timings of the individual function calls to the timeline.

## Setting up a Basic Tracing

Since NestJS uses Express setting up basic tracing with NestJS application is essentially setting up ExpressJS tracing.
Click [here](/docs/tracing/express-application) to learn how to setup basic tracing with ExpressJS

Beyond that recap.dev provides additional integration for NestJS applications. 
Wrapping your NestJS module with `wrapNestJsModule` function exported from the `@recap.dev/client` package will record calls and their timings of the controllers and injectables in the NestJS module.

Wrapping your module like this:

```js
import { NestFactory } from '@nestjs/core';
import { wrapNestJsModule } from '@recap.dev/client';

const app = await NestFactory.create(wrapNestJsModule(AppModule));
```

Will add the following information to the timeline:

![A recap.dev timeline with NestJS module wrapped](/img/docs/tracing/nestjs/timeline.png "A recap.dev timeline with NestJS module wrapped")

Doing so also allows automatic naming if your recap.dev units if you wish to split and track your application on a per-endpoint basis.
One example is making the unit name a combination of an environment, controller name, and a controller method name.
We can write a middleware to do that automatically.

```js
app.use((req, res, next) => {
  res.prependListener('finish', () => {
    tracer.setUnitName(`${process.env.environment}-${tracer.getCurrentTrace()?.functionCallEvents[1]?.functionName}`);
  });

  next();
});
```

This will result in a unit name like this: `local-AppController.getHello`

Check the complete source code of an example NestJS project traced with recap.dev [here](https://github.com/infinite-cat/recap.dev-example-nestjs-project)

## Setting up a Function-level Tracing

Click [here](/docs/tracing/function-level-tracing) to learn how to set up the function-level tracing for your application.
