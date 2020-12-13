---
slug: arm-vs-x86-on-servers-benchmarked
title: EC2 ARM-backed instances are 30% faster and 10% cheaper - benchmarked.
author: Arseny Yankovski
author_title: Lead Architect @ eMarketeer
author_url: https://github.com/ArsenyYankovsky
author_image_url: https://avatars0.githubusercontent.com/u/1508345?s=460&u=3f36532a8ad64bd1d110c00a4eb438600d60cb92&v=4
image: /img/blog/2020-11-10-case-study-debugging-with-recap-dev/hero.png
tags: [recap.dev, ARM, x86, EC2, AWS, Graviton2]
---

This year Apple changed the game of the desktop CPUs with their announcement of the Apple Silicon. 
A similar thing happened a year ago in the world of cloud computing. 
AWS released a new type of instance backed by their custom-built ARM processors called AWS Graviton2.
They're supposed to have up to 40% better price-performance than their x86 counterparts. Another huge update is Graviton-based Amazon RDS instances.
Let's run a couple of benchmarks and load-test a real-world backend application to see how good ARM servers are and how easy they are to use.

# Performance

I compared a t4g.small (ARM) instance to a t3.small (x86) EC2 instance. 
Currently, the on-demand hourly cost in the eu-east-1 region for t3.small (x86) is $0.0208 and t4g.small (ARM) is $0.0168.
The ARM-backed instance is already around 20% cheaper.

First, I ran a load-test on a fresh recap.dev setup with wrk.

It's a docker-compose template running 4 processes.
A handler process puts every request into a RabbitMQ.
A separate process inserts traces in batches of 1000 into a PostgreSQL database.

{/* Add schema image */}

I ran wrk on a t3.2xlarge instance in the same region using the following command:

```bash
wrk -t24 -c1000 -d300s -s ./post.lua <hostname>
```

It bombarded the target instance with trace requests for 5 minutes using 24 threads and 1000 HTTP connections.

This is the result I got for t4g.small (ARM) instance:

```bash
  24 threads and 1000 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   473.53ms   53.06ms   1.96s    81.33%
    Req/Sec   115.83     96.65   494.00     71.32%
  620751 requests in 5.00m, 85.84MB read
  Socket errors: connect 0, read 0, write 0, timeout 225
Requests/sec:   2068.48
Transfer/sec:    292.90KB
```

For the t3.small (x86) instance:

```bash
  24 threads and 1000 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   600.28ms   70.23ms   2.00s    72.53%
    Req/Sec    92.77     82.25   404.00     70.26%
  488218 requests in 5.00m, 67.51MB read
  Socket errors: connect 0, read 0, write 0, timeout 348
Requests/sec:   1626.87
Transfer/sec:    230.37KB
```

ARM-backed instance served 27% more requests per second 26% faster (on average).

![A recap.dev error message saying the database table doesn't exists](/img/blog/2020-12-08-arm-vs-x86-on-servers/rps_graph.png "A recap.dev error message saying the database table doesn't exists")

{/* Add a graph here comparing rps and latency? */}

Then I ran a couple of benchmarks from the Phoronix Test Suite. 
[pts/compress-7zip-1.7.1](https://openbenchmarking.org/test/pts/compress-7zip) gave 6833 MIPS on t4g.small (ARM) versus 5029 MIPS on t3.small (x86). A 35% higher result on an ARM processor.

{/* MIPS graph */}

ARM-backed server finished [pts/c-ray](https://openbenchmarking.org/test/pts/c-ray) almost 2 times faster on average. 958 seconds for x84 versus just 458 for ARM.

{/* c-ray graph */}

I also ran a bunch of RAM speed tests from [pts/ramspeed](pts/ramspeed) that measure RAM throughput on different operations.

| Benchmark Type         | t4g.small (ARM) | t3.small (x86) |
|------------------------|-----------------|----------------|
| Add/Integer            | 50000 MB/s      | 13008 MB/s     |
| Copy/Integer           | 58650 MB/s      | 11772 MB/s     |
| Scale/Integer          | 31753 MB/s      | 11989 MB/s     |
| Triad/Integer          | 36869 MB/s      | 12818 MB/s     |
| Average/Integer        | 44280 MB/s      | 12314 MB/s     |
| Add/Floating Point     | 49775 MB/s      | 12750 MB/s     |
| Copy/Floating Point    | 58749 MB/s      | 11694 MB/s     |
| Scale/Floating Point   | 58721 MB/s      | 11765 MB/s     |
| Triad/Floating Point   | 49667 MB/s      | 12809 MB/s     |
| Average/Floating Point | 54716 MB/s      | 12260 MB/s     |

{/* ramspeed graph */}

In short, the memory on the t4g.small equipped with a Graviton2 processor was 3 to 5 times faster.

Just looking at the performance and the instance price the conclusion is that the switch to the ARM-based instances is a no-brainer. You get more power for less money.

# Compatibility

The big question when switching processor architectures is compatibility.

I found that a lot of things were already recompiled for the ARM processors. 
Mainly, Docker was available as .rpm and .deb and so were most of the images (yes, they need to be built for different architectures).
Docker-compose, however, wasn't. Which was a huge bummer for me. 
I had to jump through some hoops building several dependencies from source code to make it work. 
The situation will hopefully improve in the future as the ARM adoption on the servers grows more, 
but right now you might pay more in working hours than you save by migrating.

The RDS (AWS managed RDBMS service) on Graviton2 is where I think the real win-win is. 
You don't have to do any setup and get all the benefits of an ARM processor on your server.
