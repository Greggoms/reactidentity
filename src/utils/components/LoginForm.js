import React, { useState, useRef } from "react"
import { navigate } from "gatsby"
import { useIdentityContext } from "react-netlify-identity"

export const LoginForm = () => {
  const { loginUser, signupUser } = useIdentityContext()
  const [msg, setMsg] = useState("")
  const formRef = useRef()
  const login = () => {
    const email = formRef.current.email.value
    const password = formRef.current.password.value
    loginUser(email, password, true)
      .then(user => {
        console.log("Success! Logged in", user)
        navigate("/app/dashboard")
      })
      .catch(err => {
        if (err.message === "invalid_grant: Email not confirmed")
          setMsg(
            "You must verify your email before logging in. Already verified? Make sure you have entered the right password."
          )
        else if (
          err.message ===
          "invalid_grant: No user found with that email, or password invalid."
        )
          setMsg("No user found with that email, or password invalid.")
        else setMsg("Error: " + err.message)
      })
  }

  const signup = () => {
    const email = formRef.current.email.value
    const password = formRef.current.password.value

    signupUser(email, password)
      .then(user => {
        console.log("Success! Signed up", user)
        navigate("/app/dashboard")
      })
      .catch(err => console.log(err) || setMsg("Error: " + err.message))
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
      </div>
      <div>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
      </div>
      <div>
        <button onClick={login}>Login</button>
        <button onClick={signup}>Sign Up</button>

        {msg && <p>{msg}</p>}
      </div>
    </form>
  )
}
