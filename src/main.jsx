import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
// 1000839091634-5io7s2q9kamj6fgmohvh7l3vao9csh1v.apps.googleusercontent.com 
    // secret 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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1000839091634-5io7s2q9kamj6fgmohvh7l3vao9csh1v.apps.googleusercontent.com"> <App /> </GoogleOAuthProvider>;
    
  </React.StrictMode>,
)
