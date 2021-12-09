import React from "react"
import { useIdentityContext } from "react-netlify-identity"
import { Login } from "./Login"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { isConfirmedUser } = useIdentityContext()
  if (
    !isConfirmedUser &&
    (location.pathname === `/app/profile` ||
      location.pathname === `/app/dashboard`)
  ) {
    return (
      <>
        <h2>You must be logged in to see this content</h2>
        <Login />
      </>
    )
  }
  return <Component {...rest} />
}
export default PrivateRoute
