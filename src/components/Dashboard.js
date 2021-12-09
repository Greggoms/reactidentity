import React from "react"
import { useIdentityContext } from "react-netlify-identity"

// check if user has confirmed their email
// use authedFetch API to make a request to Netlify Function with the user's JWT token,
// letting your function use the `user` object
export const Dashboard = () => {
  const { isConfirmedUser } = useIdentityContext()
  return (
    <div>
      <h3>This is a Protected Dashboard!</h3>
      {!isConfirmedUser && (
        <pre style={{ backgroundColor: "papayawhip" }}>
          You have not confirmed your email. Please confirm it before accessing
          this page.
        </pre>
      )}
    </div>
  )
}
