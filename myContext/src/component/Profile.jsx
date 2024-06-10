import React, { useContext } from 'react'
import userContext from '../context/UserContext'

const Profile = () => {
    const {user}=useContext(userContext)
    if(!user) return <div>Please Login</div>
    return <div><p>Welcome {user.username}</p><p>Your Password is {user.password}</p></div>
    
}

export default Profile