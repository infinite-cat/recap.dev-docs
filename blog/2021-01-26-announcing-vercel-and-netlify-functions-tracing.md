---
slug: announcing-vercel-and-netlify-functions-tracing
title: Recap.Dev Now Supports Tracing Vercel Functions and Netlify Functions
author: Arseny Yankovski
author_title: Lead Architect @ eMarketeer
author_url: https://github.com/ArsenyYankovsky
author_image_url: https://avatars0.githubusercontent.com/u/1508345?s=460&u=3f36532a8ad64bd1d110c00a4eb438600d60cb92&v=4
image: /img/blog/2021-01-26-announcing-vercel-and-netlify-functions-tracing/hero.png
tags: [recap.dev, vercel, netlify, serverless, jamstack, tracing, monitoring, integration, support]
---

We just released a new 1.12.0 version of the [recap.dev JavaScript client](https://www.npmjs.com/package/@recap.dev/client) which exports two new wrapper functions: `wrapNetlifyHandler` and `wrapVercelHandler`. 
This allows tracing the [Netlify Functions](https://www.netlify.com/products/functions/), and the [Vercel Functions](https://vercel.com/docs/serverless-functions/introduction) serverless providers respectively.

Tracing your serverless functions with recap.dev provides you with essential information when debugging, especially a production issue. 
Recap.dev also provides automatic alerts for the errors happening in your functions so if something goes wrong you're the first one to know.
Adding recap.dev to your application won't take more than 5 minutes.

[Click here to learn how to get started with recap.dev](/docs)
