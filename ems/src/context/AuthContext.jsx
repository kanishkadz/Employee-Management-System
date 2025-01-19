import React from 'react'
import { getLocalStorage } from '../utils/localStorage'

const AuthContext = ({children}) => {

  useEffect(() => {
    getLocalStorage()
  },)
  
  return (
    <div>
        {children}
    </div>
  )
}

export default AuthContext