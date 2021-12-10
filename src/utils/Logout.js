import React from "react"
import { useIdentityContext } from "react-netlify-identity"

// log out user
export const Logout = () => {
  const { logoutUser, user } = useIdentityContext()
  console.log(user)
  return (
    <p style={{ marginBottom: 0 }}>
      Welcome {"user"}
      <button onClick={logoutUser}>Log Out</button>
    </p>
  )
}
