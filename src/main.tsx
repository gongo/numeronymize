import React from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, createTheme } from 'smarthr-ui'

import 'smarthr-ui/smarthr-ui.css'
import App from './App.tsx'

const container = document.getElementById('root')!
const root = createRoot(container)
const theme = createTheme()

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
