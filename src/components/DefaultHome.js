import React, { useContext } from 'react'
import UserContext from './context/UserContext'
import Home from './Home'
import Login from './Login'

const DefaultHome = () => {

    const {loggedIn} = useContext(UserContext)
  return (
    <div>
    {
        !loggedIn ? (
            {/* <Login/> */}
        ): (
            <>
                <Home/>
            </>
        )
    }
      
    </div>
  )
}

export default DefaultHome
