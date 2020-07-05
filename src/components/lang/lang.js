import React from "react"
import LocaleContext from "../../utils/context"

import "./lang.css"

const Lang = props => {
  const langContext = React.useContext(LocaleContext)
  const rsSelected = langContext === "en" ? "" : "lang-selected"
  const enSelected = langContext === "en" ? "lang-selected" : ""

  const onSerbian = () => {
    if (typeof window === `undefined`) return false
    if (!window || !window.location) return false

    const pathname = window.location.pathname

    if (!pathname.startsWith("/rs")) {
      window.location.pathname = `/rs${window.location.pathname}`
    }
  }

  const onEnglish = () => {
    if (typeof window === `undefined`) return false
    if (!window || !window.location) return false

    const pathname = window.location.pathname

    if (pathname.startsWith("/rs")) {
      window.location.pathname = window.location.pathname.replace("/rs", "")
    }
  }

  return (
    <div className="lang">
      <button className={`lang-btn ${enSelected}`} onClick={onEnglish}>
        EN
      </button>

      <button className={`lang-btn ${rsSelected}`} onClick={onSerbian}>
        RS
      </button>
    </div>
  )
}

export default Lang
