---
id: tracing
title: Tracing Your Application
sidebar_label: Tracing Your Application
slug: /tracing
---

Setting a recap.dev tracing up depends on what kind of technology your application is made with.

Here's a list of currently supported technologies:

- [Serverless](/docs/tracing/serverless-application). You can easily trace most of the serverless applications no matter what kind of technology it is made with.
- [ExpressJS](/docs/tracing/express-application). That includes any technologies based on ExpressJS.
- [NestJS](/docs/tracing/nestjs-application). NestJS is based on ExpressJS but recap.dev goes a step further and provides an even deeper integration for the NestJS-based applications.
- [Netlify Functions](/docs/tracing/netlify-functions). Recap.dev provides a handler wrapper for Netlify Functions with a default unit name that results in a per-endpoint per-environment tracking. It is also possible to set up a function-level tracing for the Netlify Functions.
- [Vercel Functions](/docs/tracing/vercel-serverless-functions). Recap.dev provides a handler wrapper for Vercel Serverless Functions with basic tracing. 

If your favorite technology is not supported please [contact us](/contact-us), and we'll see what we could do.
