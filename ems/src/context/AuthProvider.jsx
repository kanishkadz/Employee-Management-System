import React from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'


export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [userData, setUserData] = useState(null)

    useEffect(() => {
      setLocalStorage()
      const {employees} = getLocalStorage()
      setUserData({employees})
    }, [])
    


  return (
    <div>
        <AuthContext.provider value={userData}>
            {children}
        </AuthContext.provider>
    </div>
  )
}

export default AuthProvider