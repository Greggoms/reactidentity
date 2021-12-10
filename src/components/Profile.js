import React from "react"
import { useIdentityContext } from "react-netlify-identity"

export const Profile = () => {
  const { user } = useIdentityContext()
  return (
    <div>
      <h1>Your Profile</h1>
      <p>ID: {user.id}</p>
      <p>Email: {user.email}</p>
      <p>
        Account Created:{" "}
        {user.created_at.slice(0, 10) + ` @ ` + user.created_at.slice(11, 19)}
      </p>
      <p>
        Confirmation Email Sent:{" "}
        {user.confirmation_sent_at.slice(0, 10) +
          ` @ ` +
          user.created_at.slice(11, 19)}
      </p>
      <p>
        Email Confirmed:{" "}
        {user.confirmed_at.slice(0, 10) + ` @ ` + user.created_at.slice(11, 19)}
      </p>
      {user.recovery_sent_at && (
        <p>
          Recovery Email Sent:{" "}
          {user.recovery_sent_at.slice(0, 10) +
            ` @ ` +
            user.created_at.slice(11, 19)}
        </p>
      )}
      <p>Role: {user.role}</p>
    </div>
  )
}
