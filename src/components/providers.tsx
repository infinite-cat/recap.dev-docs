import React from 'react'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import { ThemeProvider as MuiProvider } from '@material-ui/styles'
import { StylesProvider } from '@material-ui/core'

import { InitialLoadProvider } from '../contexts/initial-load.context'
import { UseImageProvider } from '../contexts/use-image.context'

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: { main: '#1D4E89' },
    secondary: { main: '#1D4E89' },
    text: {
      primary: '#000000',
      secondary: '#1D4E89',
    },
  },
  overrides: {
    MuiCard: {
      root: {
        borderRadius: '10px',
        boxShadow: '0px 10px 20px rgba(31, 32, 65, 0.1);',
      },
    },
    MuiInput: {
      root: {
        background: '#F3F4F5',
        borderRadius: '10px',
        padding: '2px 12px',
      },
    },
  },
  typography: {
    fontFamily: ['Quicksand', 'Segoe UI', '"sans-serif normal"'].join(','),
    caption: {
      fontSize: '16px',
      lineHeight: '20px',
      color: 'rgba(0, 0, 0, 0.6)',
    },
    h2: {
      fontWeight: 'bold',
      fontSize: '32px',
      textTransform: 'uppercase',
    },
    h4: {
      fontWeight: 500,
      fontSize: '32px',
    },
    h5: {
      fontWeight: 'bold',
      fontSize: '24px',
    },
  },
})

export const Providers = ({ children }: any) => (
  <MuiProvider theme={theme}>
    <StylesProvider injectFirst>
      <InitialLoadProvider>
        <UseImageProvider>{children}</UseImageProvider>
      </InitialLoadProvider>
    </StylesProvider>
  </MuiProvider>
)
