import React from "react"
import { Link } from "gatsby"

export const Nav = () => {
  return (
    <nav>
      <Link
        to="/app/profile"
        style={{
          color: "white",
          marginRight: "0.5rem",
        }}
      >
        Profile
      </Link>
      <Link
        to="/app/dashboard"
        style={{
          color: "white",
        }}
      >
        Dashboard
      </Link>
    </nav>
  )
}
