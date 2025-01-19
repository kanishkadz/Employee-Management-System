import React from 'react'


export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [userData, setuserData] = useState(second)



  return (
    <div>
        <AuthContext.provider value={"Kanishka"}>
            {children}
        </AuthContext.provider>
    </div>
  )
}

export default AuthProvider