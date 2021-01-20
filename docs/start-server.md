---
id: start-server
title: Start a Recap.Dev Server
sidebar_label: Start a Recap.Dev Server
slug: start-server
---

recap.dev server is available as a [docker image](https://hub.docker.com/repository/docker/recapdev/server) so it's easy to start it wherever you host your applications. 
It's also available as an AMI so it's easier to start using recap.dev on AWS.

## Using a Docker Image

Recap.Dev server is available as a [docker image at Docker Hub](https://hub.docker.com/repository/docker/recapdev/server).

There are only two prerequisites to start a recap.dev docker image on your server:

- docker
- docker-compose

We recommend starting with the latest [docker-compose.yml](https://github.com/infinite-cat/recap.dev-server/blob/master/docker-compose.yml) published in the recap.dev server repository.

To start your recap.dev server just type in two following commands:

```bash
curl -o docker-compose.yaml https://raw.githubusercontent.com/infinite-cat/recap.dev-server/master/docker-compose.yml
```
This command will download recommended `docker-compose.yml` to your current directory


```bash
docker-compose up -d
```

This command will start a recap.dev server in a detached mode. 

Default UI port is **8081** and default tracing port is **8080**.

## Using AWS AMI

1. Go to AWS console

2. Go to EC2

3. Click launch and search community AMIs for the latest recap.dev AMI

4. Default UI port is **8081** and default tracing port is **8080**. Make them available through a security group settings to your team and your applications.

Next step is [tracing your application](/docs/tracing)
