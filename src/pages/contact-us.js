import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

import {
  CommunityHeader,
  SocialButton,
  SocialButtons,
} from '../components/landing'
import { ContactUsBlock, Email } from '../components/contact-us'
import { Providers } from '../components/providers'

function ContactUs() {
  const { siteConfig } = useDocusaurusContext()

  return (
    <div>
      <Layout
        title={siteConfig.tagline}
        description="Open-source tracing for modern JavaScript backends"
      >
        <Providers>
          <ContactUsBlock>
            <CommunityHeader>Contact Us</CommunityHeader>
            <Email>
              For any questions and suggestions please contact us at{' '}
              <a href="mailto:contact@recap.dev">contact@recap.dev</a> or a social platform of your choice.
            </Email>
            <SocialButtons>
              <SocialButton
                icon="/slack.svg"
                url="https://join.slack.com/t/recapdev/shared_invite/zt-i5tq580i-TVvjpHsu35qVVSfbUL1V3Q"
              />
              <SocialButton icon="/discord.svg" url="https://discord.gg/qSZZ9HN" />
              <SocialButton icon="/twitter.svg" url="https://twitter.com/recap_dev" />
              <SocialButton icon="/github.svg" url="https://github.com/infinite-cat" />
            </SocialButtons>
          </ContactUsBlock>
        </Providers>
      </Layout>
    </div>
  )
}

export default ContactUs
