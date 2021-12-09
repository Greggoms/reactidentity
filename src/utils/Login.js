import React, { useState } from "react"
import { LoginForm } from "./components/LoginForm"
import { RecoverForm } from "./components/RecoverForm"

export const Login = () => {
  const [recovery, setRecovery] = useState(false)

  return recovery ? (
    <>
      <RecoverForm /> <button onClick={() => setRecovery(false)}>Back</button>
    </>
  ) : (
    <>
      <LoginForm />{" "}
      <button onClick={() => setRecovery(true)}>Forgot Password?</button>
    </>
  )
}
