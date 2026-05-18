import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Disable copy-paste dan context menu
document.addEventListener('contextmenu', (e) => e.preventDefault(), false)
document.addEventListener('copy', (e) => e.preventDefault(), false)
document.addEventListener('cut', (e) => e.preventDefault(), false)
document.addEventListener('paste', (e) => e.preventDefault(), false)

// Disable developer tools shortcuts
document.addEventListener('keydown', (e) => {
  // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
  if (
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && e.key === 'I') ||
    (e.ctrlKey && e.shiftKey && e.key === 'J') ||
    (e.ctrlKey && e.shiftKey && e.key === 'C')
  ) {
    e.preventDefault()
  }
}, false)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
