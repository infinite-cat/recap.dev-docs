---
id: slack-integration
title: Integrating Slack and recap.dev
sidebar_label: Slack
slug: /integrations/slack
---

Slack integration sends various notification messages to a specified Slack channel

### Setup

#### 1. Go to [Slack Apps](https://api.slack.com/apps)

#### 2. Create a new App

#### ![Creating a new Slack App](/img/docs/slack/slack-create-app.png "Creating a new Slack App")

Give it a name, something like recap.dev will work. Choose your workspace where you want to get the messages as a development workspace.

#### 3. Go to OAuth & Permissions and add two scopes to the Bot Token scopes section: `chat:write` and `chat:write.customize`

![Adding OAuth Scopes](/img/docs/slack/slack-scopes.png "Adding OAuth Scopes")

#### 4. Now it's time to install the bot to your workspace. In the same OAuth & Permissions section click Install App to Workspace

#### 5. After you've successfully installed the bot to your workspace, you will get a bot token. Copy it.

![Copying slack bot token](/img/docs/slack/slack-bot-token.png "Copying slack bot token")

#### 6. Invite the bot to the channel by typing `/invite @recapdev`

#### 7. Go to your recap.dev server settings page, then to integrations tab. Find Slack settings there. Paste your bot token and write the name of the channel where you want your notifications to go.

![Setting up your recap.dev and Slack integration](/img/docs/slack/recap-slack-settings.png "Setting up your recap.dev and Slack integration")

#### 8. Click Test to make sure integration works. This should send a message to the channel that looks like this:

![Slack Test Message](/img/docs/slack/slack-test-message.png "Slack Test Message")

#### 9. Don't forget to click save.
