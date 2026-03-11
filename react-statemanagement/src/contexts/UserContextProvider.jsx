import React, { useState } from 'react'
import { UserContext } from './UserContext'

function UserContextProvider({ children }) {
  const [user, setUser] = useState({ name: "ravi", age: 20, email: "ravi@gmail.com" })

  const onChangeUser = () => {
    const newUser = { name: "rakesh", age: 21, email: "rakesh@gmail.com" }
    setUser(newUser)
  }

  return (
    <UserContext.Provider value={{ user, onChangeUser }}>
      {children} 
    </UserContext.Provider>
  )
}
 {/* here children refers to it can Provide to all its children */}

export default UserContextProvider