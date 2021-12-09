import React from "react"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (
    location.pathname === `/app/profile` ||
    location.pathname === `/app/dashboard`
  ) {
    return <h2>You must be logged in to see this content</h2>
  }
  return <Component {...rest} />
}
export default PrivateRoute
