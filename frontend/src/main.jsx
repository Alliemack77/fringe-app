import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { A11yProvider } from './context/a11y-context.jsx'
import './sass/main.scss'
import App from './App.jsx'
import {Toaster} from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <A11yProvider>
      <App />
      <Toaster />
    </A11yProvider>
  </StrictMode>,
)
