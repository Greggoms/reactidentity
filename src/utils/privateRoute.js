import React from "react"
import { useIdentityContext } from "react-netlify-identity"
import { Login } from "./Login"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { isLoggedIn, isConfirmedUser } = useIdentityContext()
  if (
    !isLoggedIn &&
    (location.pathname === `/app/profile` ||
      location.pathname === `/app/dashboard`)
  ) {
    return (
      <>
        <h2>You must be logged in to see this content</h2>
        <Login />
      </>
    )
  } else if (isLoggedIn && !isConfirmedUser) {
    return (
      <>
        <h2>You must verify your email to see this content</h2>
        <p>
          You're logged in, but not verified. Please click the link sent to the
          email used to register.
        </p>
      </>
    )
  }
  return <Component {...rest} />
}
export default PrivateRoute
