import React, { useState, useRef } from "react"
import { useIdentityContext } from "react-netlify-identity"

export const RecoverForm = () => {
  const { requestPasswordRecovery } = useIdentityContext()
  const [msg, setMsg] = useState("")
  const formRef = useRef()
  const recoverPass = () => {
    const email = formRef.current.email.value
    requestPasswordRecovery(email)
      .then(() => {
        setMsg("Please check your email for a password reset link.")
        console.log("Password Reset Link Sent", email)
      })
      .catch(err => {
        setMsg("Error: " + err.message)
      })
  }
  return (
    <form
      ref={formRef}
      onSubmit={e => {
        e.preventDefault()
      }}
    >
      <div>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <button onClick={recoverPass}>Send Reset Link</button>
        {msg && <p>{msg}</p>}
      </div>
    </form>
  )
}
