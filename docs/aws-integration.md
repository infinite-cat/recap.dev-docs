---
id: aws-integration
title: Integrating AWS and recap.dev
sidebar_label: AWS
slug: /integrations/aws
---

Integrating AWS and recap.dev allows pulling CloudWatch logs and analyzing the costs of your Lambdas.

### Setup

#### 1. Provide recap.dev with AWS credentials. 

recap.dev will automatically search for AWS credentials. The easiest way to provide them is to create and assign IAM role with the following policy to your instance or container:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Action": [
                "logs:Describe*",
                "logs:Get*",
                "logs:List*",
                "logs:StartQuery",
                "logs:StopQuery",
                "logs:TestMetricFilter",
                "logs:FilterLogEvents",
                "ce:getCostAndUsage",
                "pricing:GetProducts"
            ],
            "Effect": "Allow",
            "Resource": "*"
        }
    ]
}
```

#### 2. Go to settings in your recap.dev server and enable the integration.

### Setting up a cross-account access

If you have two AWS accounts (different environments, for example) and want to use one recap.dev server for both accounts, please do the following.

Assuming you have 

**Account A** - account where your recap.dev server is started.

**Account B** - account to which recap.dev server should also have access.

Do the following:

In the **account A**

#### 1. Create an IAM role called `recap-dev-role` 

#### 2. Add following policies to the `recap-dev-role`:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Action": [
                "logs:Describe*",
                "logs:Get*",
                "logs:List*",
                "logs:StartQuery",
                "logs:StopQuery",
                "logs:TestMetricFilter",
                "logs:FilterLogEvents",
                "ce:getCostAndUsage",
                "pricing:GetProducts"
            ],
            "Effect": "Allow",
            "Resource": "*"
        }
    ]
}
```

```json
{
    "Version": "2012-10-17",
    "Statement": {
        "Effect": "Allow",
        "Action": "sts:AssumeRole",
        "Resource": "arn:aws:iam::Account B:role/recap-dev-delegation"
    }
}
```

Please replace Account B in the last policy with an appropriate account number.

#### 3. Assign `recap-dev-role` IAM role to your recap.dev server

In the **Account B**

#### 4. Create an IAM role called `recap-dev-delegation` with the following trust policy, replacing **Account A** with an appropriate account number:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::Account A:role/recap-dev-role"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
```


#### 5. Add the following permission policy to the `recap-dev-delegation` role:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Action": [
                "logs:Describe*",
                "logs:Get*",
                "logs:List*",
                "logs:StartQuery",
                "logs:StopQuery",
                "logs:TestMetricFilter",
                "logs:FilterLogEvents",
                "ce:getCostAndUsage",
                "pricing:GetProducts"
            ],
            "Effect": "Allow",
            "Resource": "*"
        }
    ]
}
```

Read more on the topic from AWS [here](https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html).
