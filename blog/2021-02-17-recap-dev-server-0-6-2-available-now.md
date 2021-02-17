---
slug: recap-dev-server-0-6-2-available-now
title: Recap.Dev Server 0.6.2 Available Now
author: Arseny Yankovski
author_title: Lead Architect @ eMarketeer
author_url: https://github.com/ArsenyYankovsky
author_image_url: https://avatars0.githubusercontent.com/u/1508345?s=460&u=3f36532a8ad64bd1d110c00a4eb438600d60cb92&v=4
image: /img/blog/2021-02-17-recap-dev-server-0-6-2-available-now/hero.png
tags: [Recap.Dev, releases, server]
---

We're happy to announce that Recap.Dev server 0.6.2 was released today.

Notable changes include:

- **Performance and stability improvements**. We fixed a couple of bugs that will make your Recap.Dev server faster and more reliable.

- **Bugfixes**. Fixed a notable bug where AWS Lambda timeout errors won't be reported to your Slack and a couple of smaller ones.

- **Fully anonymized usage statistics tracking**. To understand our users better, we added fully anonymized and GDPR-compliant usage tracking. 
  It doesn't collect any personal, private or sensitive information. 
  You can still opt-out and completely disable it for your Recap.Dev server by setting the `DISABLE_USAGE_ANALYTICS` environment variable to `'true'` on your Recap.Dev server installation.

[Click here to learn how to upgrade your Recap.Dev server](/docs/upgrade-server)
