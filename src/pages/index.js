import React from 'react'
import Layout from '@theme/Layout'

import {
  ActionsRow,
  BlueBackgroundFeature,
  CallToActionButton,
  CommunityHeader,
  Email,
  FeatureBlock,
  FeatureDescription,
  FeatureDescriptionWhite,
  FeatureIcon,
  FeatureIconOnBlue,
  FeatureLeftBlock,
  Features,
  FeaturesBlock,
  FeatureTitle,
  FeatureTitleWhite,
  NoUnderlineLink,
  ProjectDescription,
  ProjectName,
  SocialButton,
  SocialButtons,
  Stars,
  TitleBlock,
  TitleBlockContent,
  WhiteBackgroundFeature,
} from '../components/landing'
import { Providers } from '../components/providers'

function Home() {
  return (
    <div className="landing">
      <Layout description="Open-source tracing for modern JavaScript backends">
        <Providers>
          <TitleBlock>
            <TitleBlockContent>
              <Stars />
              <ProjectName variant="h2">recap.dev</ProjectName>

              <ProjectDescription variant="h4">
                Open-source tracing for modern JavaScript backends
              </ProjectDescription>

              <ActionsRow>
                <CallToActionButton variant="extended">Quick Start</CallToActionButton>
                <NoUnderlineLink
                  href="https://forms.zoho.eu/arseny/form/recapdevdemorequest"
                  target="_blank"
                >
                  <CallToActionButton variant="extended">Request A Demo</CallToActionButton>
                </NoUnderlineLink>
              </ActionsRow>
            </TitleBlockContent>
          </TitleBlock>
          <FeaturesBlock>
            <Features>Features</Features>
            <FeatureBlock>
              <FeatureLeftBlock>
                <FeatureTitle>Easy to setup and integrate</FeatureTitle>
                <FeatureDescription>
                  Tracing your application requires minimal to no code changes. recap.dev server is
                  shipped as a docker image so it can easily be started wherever you host your
                  applications.
                </FeatureDescription>
              </FeatureLeftBlock>
              <FeatureIcon src="/setup.png" />
            </FeatureBlock>
          </FeaturesBlock>
          <BlueBackgroundFeature>
            <Stars />
            <FeatureBlock>
              <FeatureLeftBlock>
                <FeatureTitleWhite>Detect errors and debug with ease</FeatureTitleWhite>
                <FeatureDescriptionWhite>
                  recap.dev automatically collects errors and notifies you about new ones. Detailed
                  tracing makes it easier for devs to understand them.
                </FeatureDescriptionWhite>
              </FeatureLeftBlock>
              <FeatureIconOnBlue src="/error.png" />
            </FeatureBlock>
          </BlueBackgroundFeature>
          <WhiteBackgroundFeature>
            <FeatureBlock>
              <FeatureLeftBlock>
                <FeatureTitle>Optimize performance and identify bottlenecks</FeatureTitle>
                <FeatureDescription>
                  Timeline provided by recap.dev makes it easy to understand and optimize
                  bottlenecks and performance issues.
                </FeatureDescription>
              </FeatureLeftBlock>
              <FeatureIcon src="/timeline.png" />
            </FeatureBlock>
          </WhiteBackgroundFeature>
          <BlueBackgroundFeature>
            <Stars />
            <FeatureBlock>
              <FeatureLeftBlock>
                <FeatureTitleWhite>Overview of your system</FeatureTitleWhite>
                <FeatureDescriptionWhite>
                  recap.dev dashboard provides you with an overall overview of your system and the
                  unusual things happening in it.
                </FeatureDescriptionWhite>
              </FeatureLeftBlock>
              <FeatureIconOnBlue src="/dashboard.png" />
            </FeatureBlock>
          </BlueBackgroundFeature>
          <WhiteBackgroundFeature>
            <CommunityHeader>Join the community</CommunityHeader>
            <SocialButtons>
              <SocialButton
                icon="/slack.svg"
                url="https://join.slack.com/t/recapdev/shared_invite/zt-i5tq580i-TVvjpHsu35qVVSfbUL1V3Q"
              />
              <SocialButton
                icon="/discord.svg"
                url="https://discord.gg/qSZZ9HN"
              />
              <SocialButton icon="/twitter.svg" url="https://twitter.com/BlocksDirectory" />
              <SocialButton icon="/github.svg" url="https://github.com/infinite-cat" />
            </SocialButtons>
            <Email>
              Have more questions? Contact us at{' '}
              <a href="mailto:contact@recap.dev">contact@recap.dev</a>
            </Email>
          </WhiteBackgroundFeature>
        </Providers>
      </Layout>
    </div>
  )
}

export default Home
