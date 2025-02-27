import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ThemeProvider from './components/ThemeProvider.tsx'
import './index.css'
import './utils/colors.css'
import '@fontsource-variable/lexend'
import './utils/icons.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
