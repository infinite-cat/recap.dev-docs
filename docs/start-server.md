---
id: start-server
title: Start a recap.dev server
sidebar_label: Start a recap.dev server
slug: start-server
---

recap.dev server is available as a [docker image](https://hub.docker.com/repository/docker/recapdev/server) so it's easy to start it wherever you host your applications. 
It's also available as an AMI so it's easier to start using recap.dev on AWS.

## Using a docker image

There are only two prerequisites to start a recap.dev docker image on your server:

- docker
- docker-compose

We recommend starting with the latest [docker-compose.yml](https://github.com/infinite-cat/recap.dev-server/blob/master/docker-compose.yml) published in the recap.dev server repository.

To start your recap.dev server just type in two following commands:

```
curl -o docker-compose.yaml https://raw.githubusercontent.com/infinite-cat/recap.dev-server/master/docker-compose.yml
```
This command will download recommended `docker-compose.yml` to your current directory


```
docker-compose up -d
```

This command will start a recap.dev server in a detached mode.
