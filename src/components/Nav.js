import React from "react"
import { Link } from "gatsby"

export const Nav = () => {
  return (
    <nav>
      <Link
        to="/app/profile"
        style={{
          color: "white",
        }}
      >
        Profile
      </Link>
    </nav>
  )
}
