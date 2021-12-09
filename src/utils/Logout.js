import React from "react"
import { useIdentityContext } from "react-netlify-identity"

// log out user
export const Logout = () => {
  const { logoutUser } = useIdentityContext()
  return <button onClick={logoutUser}>You are signed in. Log Out</button>
}
