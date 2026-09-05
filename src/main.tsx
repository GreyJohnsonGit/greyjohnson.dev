import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import './index.css'
import { theme } from './Theme.ts'
import { AppMenu } from './AppMenu.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <AppMenu />
        <App />
      </CssBaseline>
    </ThemeProvider>
  </StrictMode>,
)
