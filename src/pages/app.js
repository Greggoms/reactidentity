import React from "react"
import { Router } from "@reach/router"
import PrivateRoute from "../utils/privateRoute"
import { Profile } from "../components/Profile"

const App = () => {
  return (
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
    </Router>
  )
}

export default App
