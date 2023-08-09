import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home/index.tsx'

import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
		  <GlobalStyles/>
      <Home />
		</ThemeProvider>
  </React.StrictMode>,
)
