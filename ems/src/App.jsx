import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/localStorage'

const App = () => {

  const [user, setUser] = useState(null)   

  const handleLogin = (email, password) => {
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
    } else if(email == 'user@me.com' && password == 123) {
      setUser('employee')
    } else {
      alert("Invalid Credentials")
    }
  }

  handleLogin()

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ' '}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  )
}

export default App
