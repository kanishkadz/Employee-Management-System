import React from 'react'


export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  return (
    <div>
        <AuthContext.provider value={"Kanishka"}>
            {children}
        </AuthContext.provider>
    </div>
  )
}

export default AuthProvider