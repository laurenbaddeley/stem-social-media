import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import camera from "../images/camera.jpg"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#20232a`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <img src={camera} alt="logo" width="80" height="80"/>
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
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
