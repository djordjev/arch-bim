import "./header.css"

import { AiOutlineMenu } from "react-icons/ai"
import Lang from "../lang/lang"
import Menu from "../menu/menu"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => {
  const [open, setOpen] = React.useState(false)

  const onClick = () => {
    setOpen(!open)
  }

  return (
    <header className="header">
      <AiOutlineMenu color="white" size={30} onClick={onClick} />
      {!!open && <Menu onClose={onClick} />}
      <Lang />
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
