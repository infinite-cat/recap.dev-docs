---
slug: tracing-system-as-an-application-operations-log
title: Tracing System as an Application Operations Log
author: Arseny Yankovski
author_title: Lead Architect @ eMarketeer
author_url: https://github.com/ArsenyYankovsky
author_image_url: https://avatars0.githubusercontent.com/u/1508345?s=460&u=3f36532a8ad64bd1d110c00a4eb438600d60cb92&v=4
image: /img/blog/2021-01-27-tracing-system-as-an-application-operations-log/hero.png
tags: [recap.dev, logging, debugging, devops, tracing, monitoring, alerting]
---

Imagine you have a big backend system. It performs a lot of operations each day. 
Let's face the inevitable — some of them will result in an error. 
Some of them you can ignore, some you'll learn about too late, and some might result in a loss of important data or system downtime.

Let's talk about different kinds of operations and errors and how a tracing system helps developers with all of them.

<!--truncate-->

**Tracing**, to define broadly, is recording information about a program's execution. 
Since we're talking about a backend system, let's imagine a tracing solution 
similar to the real ones. I'm basically going to describe what recap.dev does.

It will record and store logs, and the request and response information. 
The solution will also record if the operation succeeded or resulted in an error.
Our tracing system assigns a unique id to each operation and organizes the data in a searchable way.
Most importantly, it will allow us to find and understand what happened during each operation.
Of course, it's only natural that the system will alert when some 
operations fail with a new error or have an error rate higher than a configured threshold.

![A log of operations stored in recap.dev](/img/blog/2021-01-27-tracing-system-as-an-application-operations-log/traces.png "A log of operations stored in recap.dev")

Let's talk about types of operations in our backend system. 
If you're familiar with CQRS or the command-query separation principle you'd say there are queries and commands.

**Queries** are operations of reading the data. Queries are free of side effects and don't change the state of the system.
For example, an endpoint that returns a list of users for the UI to show.
There are a couple of reasons it could fail, like a database being down, or just an edge case input parameter. 
Alerts will immediately let you know that something is wrong, and the recorded request payload will 
help a developer find the cause. If the tracing system records external operations, as recap.dev does, 
it will also make it easier to understand exactly which operation fails and why. 

**Commands**, on the other hand, are operations that change the state of the system. 
Some commands have defined rules for error handling. For example, if we're sending an email we will retry three times on
a soft bounce and send it to the dead letter queue where the messages could be reviewed later.
Most of the time though the commands in a backend system would not have these rules, and they cannot be retried automatically.
In these cases having commands and their results recorded in the tracing system allows engineers 
to see exactly what happened and manually fix, revert or retry the operation partially.

![An SQL query failing visible on a timeline](/img/blog/2021-01-27-tracing-system-as-an-application-operations-log/timeline.png "An SQL query failing visible on a timeline")

Some commands could be highly destructive. Deleting blog posts before a specific date, for example. 
It's easy for a user to input a wrong date and delete all of them. Besides implementing a soft delete rather than
just deleting database records, it's also useful to have commands recorded in the tracing system. This way engineers 
could always look up a specific invocation of the command and see what exactly was the input and understand if 
the cause of the data loss was a bug or a user input. 

Having a tracing system will not only allow developers to react to errors faster and debug them easier. It will
also keep an archive of all the operations in your system, so you could look up a specific one.
