---
id: tracing-sailsjs-application
title: Tracing Sails.js Application
sidebar_label: Sails.js Application
slug: /tracing/sailsjs-application
---

Recap.dev provides two levels of tracing: **basic tracing** and **function-level** tracing.

**Basic tracing** collects request, response and error information, logs, and provides a timeline of external resource access (databases, HTTP endpoints, external services) of your unit (basically, endpoint or handler).

**Function-level** tracing also adds timings of the individual function calls to the timeline.

## Setting up a Basic Tracing

Thanks to the Sails' hooks system, it's really easy to set the tracing up. 

1. Install the Recap.Dev Hook

```shell
yarn add sails-hook-recap-dev
```

or 

```shell
npm i --save sails-hook-recap-dev
```

2. Configure the Sync Endpoint

In your `config/env/production.js` or other environments you'd like to trace your application on, add the following:
```javascript
  'recap-dev': {
    syncEndpoint: 'https://tracing.recap.dev/traces'
  },
```

Read the official Sails.js documentation on the hooks configuration [here](https://sailsjs.com/documentation/concepts/extending-sails/hooks/using-hooks#?configuring-a-hook)

At this point, you should start getting tracing data with basic details.

Available configuration options:

- **syncEndpoint** - Required, points to your Recap.Dev installation tracing endpoint.
- **filterRequest** - Optional, function that accepts a request and returns true to trace the request or false to ignore it. Useful to ignore requests to assets. Default is:

```javascript
filterRequest: (request) => request.originalUrl.startsWith('/api/')
```

- **disableAutomaticUnitNames** - Optional, if set to true, no unit names will be created automatically.
  Note that you will need to call `tracer.setUnitName` to provide a unit name, otherwise it will be set as a current hostname.

Check the complete source code of an example NestJS project traced with recap.dev [here](https://github.com/infinite-cat/recap.dev-example-nestjs-project)

## Unit Name

A unit is a minimal tracked component in Recap.Dev.
By configuring unit names, you can select a granularity of your data to your liking.

The Recap.Dev Sails.js hook provides a default unit name strategy that concatenates the environment and the endpoint's routing URL, so the resulting unit name looks like the following:

```shell
development/api/v1/entrance/login
```

You can always modify the unit's name in the current trace by setting `disableAutomaticUnitNames` to `true` and calling `tracer.setUnitName` like this:

```js
import { tracer } from '@recap.dev/client'

const handler = (...) => {
  tracer.setUnitName('dev-get-cat-facts')
}
```


## Setting up a Function-level Tracing

Click [here](/docs/tracing/function-level-tracing) to learn how to set up the function-level tracing for your application.
