---
slug: announcing-express-support
title: Recap.dev now supports Express!
author: Arseny Yankovski
author_title: Lead Architect @ eMarketeer
author_url: https://github.com/ArsenyYankovsky
author_image_url: https://avatars0.githubusercontent.com/u/1508345?s=460&u=3f36532a8ad64bd1d110c00a4eb438600d60cb92&v=4
tags: [recap.dev, express, integration, support]
---

We're happy to announce that starting from version 1.7.0 of [recap.dev JavaScript client](https://www.npmjs.com/package/@recap.dev/client) you can fully trace your Express application. 

With the power of async hooks recap.dev traces individual requests and captures its response, request, and an error if there's any. 
Just like our recap.dev for Serverless Framework it will also capture and build a timeline of database queries, HTTP requests, and various SDK calls.
You can also capture logs and enable a function-level tracing to see a timeline of individual lambda calls.

![A recap.dev trace of an example Express application](/img/blog/2020-10-27-announcing-express-support/express-trace.png "A recap.dev trace of an example Express application")


Adding recap.dev to your application won't take more than 5 minutes. 

[Click here to learn how to get started with recap.dev](/docs)
