import React, { memo, useCallback, useContext, useState } from 'react'
import { Toolbar, Container, useMediaQuery, Box } from '@material-ui/core'
import { Helmet } from 'react-helmet'

import { ElevationScroll } from './elevation-scroll.component'
import {
  Wrapper,
  Content,
  Divider,
  Flex,
  HeaderList,
  StyledAppBar,
  StyledToolbar,
  Drawer,
  mediaQuery,
  MenuButton,
} from './app-bar-layout.styles'
import { Stars } from '../landing'
import { OpacityAppear } from '../opacity-appear.component'
import { InitialLoadContext } from '../../contexts/initial-load.context'

interface ToolbarLayoutProps {
  children?: JSX.Element | JSX.Element[]
  title?: string
  fullPageContent?: boolean
}

export const AppBarLayout = memo(
  ({ children, title = '', fullPageContent }: ToolbarLayoutProps) => {
    const [isOpen, setOpen] = useState(false)
    const isMobile = useMediaQuery(`(${mediaQuery})`)

    const { initialLoadComplete } = useContext(InitialLoadContext)
    const openSidebar = useCallback(() => setOpen(true), [setOpen])
    const closeSidebar = useCallback(() => setOpen(false), [setOpen])

    return (
      <Wrapper>
        <Helmet>
          <title>{title ? `${title} | recap.dev` : 'recap.dev'}</title>
        </Helmet>
        <ElevationScroll elevation={0}>
          <StyledAppBar
            position={fullPageContent && !isMobile ? 'absolute' : 'fixed'}
            transparent={fullPageContent}
            isMobile={isMobile}
          >
            {!fullPageContent && <Stars />}
            <Container>
              <OpacityAppear visible={initialLoadComplete}></OpacityAppear>
            </Container>
          </StyledAppBar>
        </ElevationScroll>
        <Drawer open={isMobile && isOpen} onClose={closeSidebar}>
          <Divider />
        </Drawer>
        <Content>
          <Container>
            <Toolbar />
            {!fullPageContent && children}
          </Container>
          {fullPageContent && children}
        </Content>
      </Wrapper>
    )
  },
)
