import React from 'react'
import { getLocalStorage } from '../utils/localStorage'


export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [userData, setUserData] = useState(null)

    useEffect(() => {
      const {employee, admin} = getLocalStorage()
      setUserData({employee, admin})
    }, [])
    


  return (
    <div>
        <AuthContext.provider value={"Kanishka"}>
            {children}
        </AuthContext.provider>
    </div>
  )
}

export default AuthProvider