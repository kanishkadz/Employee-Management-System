import React from 'react'


export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [userData, setUserData] = useState(null)



  return (
    <div>
        <AuthContext.provider value={"Kanishka"}>
            {children}
        </AuthContext.provider>
    </div>
  )
}

export default AuthProvider