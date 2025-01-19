import React from 'react'
import App from '../App'

const AuthProvider = ({children}) => {
  return (
    <div>
        <AuthProvider>
            <App />
        </AuthProvider>
    </div>
  )
}

export default AuthProvider