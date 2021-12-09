import React, { useState } from "react"
import { useIdentityContext } from "react-netlify-identity"

// check if user has confirmed their email
// use authedFetch API to make a request to Netlify Function with the user's JWT token,
// letting your function use the `user` object
export const Dashboard = () => {
  const { isConfirmedUser, authedFetch } = useIdentityContext()
  const [msg, setMsg] = useState("Click to load something")
  const handler = () => {
    authedFetch.get("/.netlify/functions/gatsby").then(setMsg)
  }
  return (
    <div>
      <h3>This is a Protected Dashboard!</h3>
      {!isConfirmedUser && (
        <pre style={{ backgroundColor: "papayawhip" }}>
          You have not confirmed your email. Please confirm it before you ping
          the API.
        </pre>
      )}
      <hr />
      <div>
        <p>You can try pinging our authenticated API here.</p>
        <p>
          If you are logged in, you should be able to see a `user` info here.
        </p>
        <button onClick={handler}>Ping authenticated API</button>
        <pre>{JSON.stringify(msg, null, 2)}</pre>
      </div>
    </div>
  )
}
