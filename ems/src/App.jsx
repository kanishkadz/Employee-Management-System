import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/localStorage'

const App = () => {

  const [user, setUser] = useState(null)   

  const handleLogin = (email, password) => {
    if(email == 'admin@me.com' && password == '123'){
      console.log("This is Admin")
    } else {
      alert("Invalid Credentials")
    }
  }

  handleLogin()

  return (
    <>
      {!user ? <Login /> : ' '}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  )
}

export default App
