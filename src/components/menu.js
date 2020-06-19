import React from "react"
import ReactDOM from "react-dom"
import { Link } from "gatsby"
import { AiOutlineClose } from "react-icons/ai"
import { isRS } from "../utils/url"

const Menu = props => {
  const docDefined = typeof document !== "undefined"
  const portalRoot = docDefined ? document.getElementById("overlay") : null

  let home = "/"
  let about = "/about"
  let services = "/services"
  let contact = "/contact"
  let works = "/works"

  const rs = isRS()
  if (rs) {
    home = "/rs"
    about = "/rs/about"
    services = "/rs/services"
    contact = "/rs/contact"
    works = "/rs/works"
  }

  const homeCopy = rs ? "Naslovna" : "Home"
  const aboutCopy = rs ? "O nama" : "About"
  const servicesCopy = rs ? "Usluge" : "Services"
  const contactCopy = rs ? "Kontakt" : "Contact"
  const worksCopy = rs ? "Poslovi" : "Work"

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
