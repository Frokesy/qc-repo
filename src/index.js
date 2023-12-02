import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'react-notifications/lib/notifications.css'
import 'react-responsive-modal/styles.css'
import { AppProvider } from './Context/Context'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
