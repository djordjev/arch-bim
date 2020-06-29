import React from "react"
import ReactDOM from "react-dom"
import { Link } from "gatsby"
import { AiOutlineClose } from "react-icons/ai"
import { buildLink } from "../../utils/url"
import { useIntl } from "react-intl"

import "./menu.css"

const Menu = props => {
  const intl = useIntl()

  const docDefined = typeof document !== "undefined"
  const portalRoot = docDefined ? document.getElementById("overlay") : null

  const home = buildLink("/")
  const about = buildLink("/about")
  const services = buildLink("/services")
  const contact = buildLink("/contact")
  const works = buildLink("/works")

  const homeCopy = intl.formatMessage({ id: "home" })
  const aboutCopy = intl.formatMessage({ id: "about" })
  const servicesCopy = intl.formatMessage({ id: "services" })
  const contactCopy = intl.formatMessage({ id: "contact" })
  const worksCopy = intl.formatMessage({ id: "works" })

  const menu = (
    <div className="menu">
      <AiOutlineClose
        className="menu-close"
        color="white"
        onClick={props.onClose}
      />
      <div className="vertical-line" />
      <Link className="menu-item" to={home}>
        {homeCopy}
      </Link>
      <Link className="menu-item" to={about}>
        {aboutCopy}
      </Link>
      <Link className="menu-item" to={services}>
        {servicesCopy}
      </Link>
      <Link className="menu-item" to={contact}>
        {contactCopy}
      </Link>
      <Link className="menu-item" to={works}>
        {worksCopy}
      </Link>
      <div className="vertical-line" />
    </div>
  )

  if (portalRoot) {
    return ReactDOM.createPortal(menu, portalRoot)
  }
  return null
}

export default Menu
