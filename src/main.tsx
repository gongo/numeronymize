import React from 'react'
import { createRoot } from 'react-dom/client'
import 'smarthr-ui/smarthr-ui.css'
import App from './App.tsx'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
