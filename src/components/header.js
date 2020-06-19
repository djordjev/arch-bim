import PropTypes from "prop-types"
import React from "react"
import { AiOutlineMenu } from "react-icons/ai/index"
import Menu from "./menu"

const Header = ({ siteTitle }) => {
  const [open, setOpen] = React.useState(false)

  const onClick = () => {
    setOpen(!open)
  }

  return (
    <header className="header">
      <AiOutlineMenu color="white" size={30} onClick={onClick} />
      {!!open && <Menu onClose={onClick} />}
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
