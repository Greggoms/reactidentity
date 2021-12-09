import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useIdentityContext } from "react-netlify-identity"
import { Nav } from "./Nav"
import { Logout } from "../utils/Logout"

const Header = ({ siteTitle }) => {
  const { isLoggedIn } = useIdentityContext()
  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <Nav />
        {isLoggedIn && <Logout />}
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
