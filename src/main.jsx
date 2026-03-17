import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CookieConsentProvider } from './contexts/CookieConsentContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CookieConsentProvider>
      <App />
    </CookieConsentProvider>
  </StrictMode>
)
