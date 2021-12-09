import React, { useRef, useState } from "react"
import { useIdentityContext } from "react-netlify-identity"
import { navigate } from "gatsby"

// log in/sign up example
export const Login = () => {
  const { loginUser, signupUser } = useIdentityContext()
  const formRef = useRef()
  const [msg, setMsg] = useState("")

  const signup = () => {
    const email = formRef.current.email.value
    const password = formRef.current.password.value

    signupUser(email, password)
      .then(user => {
        console.log("Success! Signed up", user)
        navigate("/app/dashboard")
      })
      .catch(err => console.error(err) || setMsg("Error: " + err.message))
  }

  return (
    <form
      ref={formRef}
      onSubmit={e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        loginUser(email, password, true)
          .then(user => {
            console.log("Success! Logged in", user)
            navigate("/app/dashboard")
          })
          .catch(err => console.error(err) || setMsg("Error: " + err.message))
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
        <input type="submit" value="Log in" />
        <button onClick={signup}>Sign Up </button>
        {msg && <pre>{msg}</pre>}
      </div>
    </form>
  )
}
