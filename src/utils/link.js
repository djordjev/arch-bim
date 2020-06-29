import React from "react"
import { Link } from "gatsby"
import LocaleContext from "../utils/context"

const LocaleLink = props => {
  const localeContext = React.useContext(LocaleContext)

  const { to } = props

  const newTo = localeContext === "rs" ? `/rs${to}` : to

  return <Link {...props} to={newTo} />
}

export default LocaleLink
