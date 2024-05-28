import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Analytics } from '@vercel/analytics/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="475635029325-2flucvefmt5ak1ajujng19aqvh70raqj.apps.googleusercontent.com">
      <Analytics/>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
