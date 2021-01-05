---
slug: improved-nestjs-tracing
title: Improved NestJS Tracing with Recap.Dev
author: Arseny Yankovski
author_title: Lead Architect @ eMarketeer
author_url: https://github.com/ArsenyYankovsky
author_image_url: https://avatars0.githubusercontent.com/u/1508345?s=460&u=3f36532a8ad64bd1d110c00a4eb438600d60cb92&v=4
image: /img/blog/2021-01-05-improved-nestjs-tracing/hero.png
tags: [recap.dev, nestjs, nest, tracing, monitoring, integration, support]
---

We just released a new 1.9.0 version of the [recap.dev JavaScript client](https://www.npmjs.com/package/@recap.dev/client) which exports a new `wrapNestJsModule` function. Which when used like this: 


```js
import { NestFactory } from '@nestjs/core';
import { wrapNestJsModule } from '@recap.dev/client';

const app = await NestFactory.create(wrapNestJsModule(AppModule));
```

will record calls and their timings of the controllers and injectables in the NestJS module.

![A recap.dev timeline with NestJS module wrapped](/img/blog/2021-01-05-improved-nestjs-tracing/timeline.png "A recap.dev timeline with NestJS module wrapped")

<!--truncate-->

We decided to make it a function that wraps a module to allow you to trace your application to your liking.

Tracing individual functions allows for different unit naming strategies. 
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

Adding recap.dev to your application won't take more than 5 minutes.

[Click here to learn how to get started with recap.dev](/docs)
