import React, { forwardRef, useState } from 'react'
import { useAsyncFn } from 'react-use'
import { Box, TextField } from '@material-ui/core'
import styled from '@emotion/styled'
import { Button } from './button'
import {
  FeatureBlock,
  FeatureDescription,
  FeatureLeftBlock,
  FeatureTitle,
  WhiteBackgroundFeature,
} from './landing'

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const SubscribeButton = styled(Button)`
  height: 45px;
`
const Input = styled(TextField)`
  width: 270px;
`
const SuccessMessage = styled.div`
  text-align: center;
`

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const SaasSubscribe = forwardRef((props, ref: React.ForwardedRef<HTMLDivElement>) => {
  const [email, setEmail] = useState('')
  const [{ loading, error, value }, onSubmit] = useAsyncFn(
    async (e) => {
      e.preventDefault()

      if (!EMAIL_REGEX.test(email)) {
        return Promise.reject(new Error('Invalid email address'))
      }

      const url =
        'https://forms.zohopublic.eu/arseny/form/RecapDevSaaSBetaSignup/formperma/EjwdP3dJRAdme62WfMnsBV7uqXCw5hk4y-_EmXqD_C4/htmlRecords/submit'

      const formData = new FormData()
      formData.append('Email', email)

      const response = await fetch(url, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      const result = await response.text()

      console.log(result)
      console.log(formData.get('Email'))
      return result
    },
    [email],
  )

  return (
    <WhiteBackgroundFeature ref={ref}>
      <FeatureBlock>
        <FeatureLeftBlock>
          <FeatureTitle>Recap.Dev SaaS Beta Signup</FeatureTitle>
          <FeatureDescription>
            We'll contact you when we're ready to provide the Recap.Dev as a service
          </FeatureDescription>
        </FeatureLeftBlock>
        {!value && (
          <Form onSubmit={onSubmit}>
            <Input
              label="Email"
              variant="outlined"
              size="small"
              error={Boolean(error)}
              helperText={error?.message}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Box mt={1} mb={2} />
            <SubscribeButton disabled={loading} type="submit">
              Subscribe!
            </SubscribeButton>
            <Box mt={1} mb={3} />
          </Form>
        )}
        {value && (
          <SuccessMessage>
            <h3>HOORAY!</h3>
            <p>You’re now subscribed to our SAAS news and will hear from us soon.</p>
          </SuccessMessage>
        )}
      </FeatureBlock>
    </WhiteBackgroundFeature>
  )
})
