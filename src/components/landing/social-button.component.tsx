import * as React from 'react'
import { Fab } from '@material-ui/core'
import styled from '@emotion/styled'

const StyledFab = styled(Fab)`
  background: #ffffff;
  width: 48px;
  height: 48px;
  margin: 0 10px;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.1);
  &:active {
    box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.1);
  }
`

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-bottom: 0;
`

export interface SocialButtonProps {
  icon: string
  url: string
}

export const SocialButton = ({ icon, url }: SocialButtonProps) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <StyledFab>
      <Icon src={icon} />
    </StyledFab>
  </a>
)
