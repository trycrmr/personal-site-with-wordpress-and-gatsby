import React from 'react'
import { Link } from 'gatsby'

const NavButton = props => {
  const { to, key, text } = props
  return (
    <button>
      <Link to={to} key={key}>
        {text}
      </Link>
    </button>
  )
}

export default NavButton
