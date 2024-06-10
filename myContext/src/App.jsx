import React from 'react'
import './App.css'
import UserProvider from './context/UserProvider'
import Login from './component/Login'
import Profile from './component/Profile'
const App = () => {
  return (
    <UserProvider>
     <h1>React with Context Api</h1> 
     <Login/>
     <Profile/>
    </UserProvider>
  )
}

export default App