---
id: upgrade-server
title: Upgrading Your Recap.Dev Server
sidebar_label: Upgrading Your Recap.Dev Server
slug: upgrade-server
---

Recap.Dev server is shipped as a docker image or as an AWS AMI.

If you're running a **docker image**, modify your `docker-compose.yml` to use the desired version of the image from our [DockerHub repository](https://hub.docker.com/repository/docker/recapdev/server).

If you're running an **AWS AMI** version of recap.dev server then do the following:

1. SSH into your Recap.Dev server, default user is **ec2-user**

2. `cd recap.dev` to go into the Recap.Dev working directory

3. Edit the `docker-compose.yml` file with your favorite command-line editor (vi, vim, nano).

Under the `recap_dev_ui_server`, `recap_dev_tracing_server` and `recap_dev_jobs` sections find the `image` property, set it to be the image you want and save the file.

4. Run `docker-compose up -d` to start the new version of Recap.Dev server.
