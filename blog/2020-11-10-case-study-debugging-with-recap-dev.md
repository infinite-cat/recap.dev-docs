---
slug: debugging-with-recap-dev
title: Debugging with Recap.Dev - a Case Study
author: Arseny Yankovski
author_title: Lead Architect @ eMarketeer
author_url: https://github.com/ArsenyYankovsky
author_image_url: https://avatars0.githubusercontent.com/u/1508345?s=460&u=3f36532a8ad64bd1d110c00a4eb438600d60cb92&v=4
image: /img/blog/2020-11-10-case-study-debugging-with-recap-dev/hero.png
tags: [recap.dev, debug, tracing, serverless]
---

We created the recap.dev out of our need for better tracing tools. 
I personally use it in both personal and professional projects. 
Here's an example of how I used recap.dev to fix a bug in an experimental feature in one of my personal projects.

It all started when I was routinely going through error notifications recap.dev sent to my Slack.
![A recap.dev error message saying the database table doesn't exists](/img/blog/2020-11-10-case-study-debugging-with-recap-dev/slack-error.png "A recap.dev error message saying the database table doesn't exists")

The database table is missing, and it sounds like a blocker and a significant oversight. The error rate, however, was around 39%.
How come it doesn't 100% error rate, though? It cannot really do any work if there is no table.

![My lambda stats - 39% of invocations failed with errors](/img/blog/2020-11-10-case-study-debugging-with-recap-dev/error-rate.png "My lambda stats - 39% of invocations failed with errors")

Upon further investigation, I found that success calls finished in mere milliseconds, while the error calls took much more time.

![Error invocations take much longer time](/img/blog/2020-11-10-case-study-debugging-with-recap-dev/traces.png "Error invocations take much longer time")

Analyzing logs in the success calls, I found that they were finished early without doing any actual work due to debouncing. Basically, if the Lambda gets triggered more than once in an hour for the same partition of data, it exits early to avoid hitting the database too often.

![Logs saying that the Lambda exited early due to debouncing](/img/blog/2020-11-10-case-study-debugging-with-recap-dev/logs.png "Logs saying that the Lambda exited early due to debouncing")

So the Lambda didn't really do any work, and the error was a blocker after all. 
I later found that the table wasn't created because there was no database migration, and it was created manually in dev environment.
And that's why you always create a database table in the migration and not manually.

[Click here to learn how to get started with recap.dev](/docs)
