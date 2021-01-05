---
slug: announcing-mongodb-tracing
title: Recap.Dev Now Traces MongoDB
author: Arseny Yankovski
author_title: Lead Architect @ eMarketeer
author_url: https://github.com/ArsenyYankovsky
author_image_url: https://avatars0.githubusercontent.com/u/1508345?s=460&u=3f36532a8ad64bd1d110c00a4eb438600d60cb92&v=4
image: /img/blog/2021-01-03-announcing-mongodb-tracing/hero.png
tags: [recap.dev, mongodb, tracing, monitoring, integration, support]
---

We're happy to announce that starting from version 1.8.2 [recap.dev JavaScript client](https://www.npmjs.com/package/@recap.dev/client) will record any MongoDB operations.

![A recap.dev timeline with MongoDB operations](/img/blog/2021-01-03-announcing-mongodb-tracing/timeline.png "A recap.dev timeline with MongoDB operations")

<!--truncate-->

Using MongoDB's [Application Performance Monitoring](https://mongodb.github.io/node-mongodb-native/2.0/reference/management/apm/)
recap.dev will now record all the MongoDB operations happening while handling a request and put it on a timeline. 
It will work if you're using Mongoose ODM or any other package that relies on the `mongodb` npm driver.

Recap.dev client will also record the query and response payloads.

![A recap.dev client recording MongoDB query and response payloads](/img/blog/2021-01-03-announcing-mongodb-tracing/find-request-payload.png "A recap.dev client recording MongoDB query and response payloads")

Adding recap.dev to your application won't take more than 5 minutes.

[Click here to learn how to get started with recap.dev](/docs)
