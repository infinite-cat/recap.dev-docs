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

Vercel and Netlify functions are some of the most popular solutions when it comes to the Jamstack backend.

In a survey conducted by [O'Reilly](https://www.oreilly.com/radar/oreilly-serverless-survey-2019-concerns-what-works-and-what-to-expect/)
in June 2019, 30% of the respondents named harder debugging, and 25% named observability to be the biggest challenges in adopting serverless technologies.
In the same report, about 17% mentioned a lack of tools.
It's not always easy to debug serverless applications.

If you're using Vercel or Netlify functions, 
it's even more challenging because there are even fewer tools available.
No tracing tool supports these serverless platforms out of the box.

That's why we just released a new 1.12.0 version of the [Recap.Dev JavaScript client](https://www.npmjs.com/package/@recap.dev/client), which exports two new wrapper functions: `wrapNetlifyHandler` and `wrapVercelHandler`.w
This allows tracing the [Netlify Functions](https://www.netlify.com/products/functions/) and the [Vercel Functions](https://vercel.com/docs/serverless-functions/introduction) serverless providers, respectively.

<!--truncate-->

Existing solutions and integrations only allow for log analysis.
Don't get me wrong, it's a great and non-intrusive technique, but sometimes seeing logs is just not enough. 

### Easier Debugging

Log analysis tools are good at collecting errors and alerting on them. 
What they're not good at is cases when you don't immediately see the root cause.
Something is undefined or null when it's not supposed to be, but what has that SQL query that runs before returned?

That's what Recap.Dev excels at. 
It will always provide request and response payloads, so it's easier to reproduce the issue. 
Recap.Dev also records all external operations like database queries or API calls and their 
results, so you might not even need to reproduce the issue and immediately make out how to fix it.

Being the first to know about production errors and being faster at fixing them means happier customers. 
It's also good for engineers to spend less time fixing bugs and doing the actual work.

### Easier Performance Optimizations

Performance optimizations, for example, are painful when your only instrument is logging.
Usually, you'll be adding some code ad-hoc to measure a specific piece of code.
This approach doesn't work if you want to know which part of the code was slow during a request that already happened.
An alternative is to always have some instrumentation logging, which will obviously clutter the logs.

Knowing which part of the code is slow becomes even more important in the serverless environment. 
Both Vercel and Netlify functions use AWS Lambda, which currently has a maximum timeout of 15 minutes.

Recap.Dev gathers timings of all your external resource calls and timings of individual functions and methods and compiles it
into an easy-to-understand timeline. 

![Recap.Dev timeline showing a performance bottleneck](/img/blog/2021-01-26-announcing-vercel-and-netlify-functions-tracing/timeline.png "Recap.Dev timeline showing a performance bottleneck")
<p align="center">It's easy to find a bottleneck with the Recap.Dev timeline</p>

Tracing your serverless functions with Recap.Dev provides you with essential information when debugging, especially a production issue.
Recap.Dev also provides automatic alerts for the errors happening in your functions, so you're the first to know if something goes wrong.
Adding Recap.Dev to your application won't take more than 5 minutes.

[Click here to learn more about Recap.Dev features](/blog/5-reasons-to-use-recap.dev)
