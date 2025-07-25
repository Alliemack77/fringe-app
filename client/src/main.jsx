import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './scss/main.scss'
import App from './App.jsx'
import { A11yProvider } from "./context/a11y-context.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <A11yProvider>
      <App/>
    </A11yProvider>
  </StrictMode>,
)
