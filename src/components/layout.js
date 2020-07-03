import React from "react"
import PropTypes from "prop-types"
import Footer from "./footer/footer"

import Header from "./header/header"
import "./layout.css"
import { IntlProvider } from "react-intl"
import enMessages from "../i18n/en"
import rsMessages from "../i18n/rs"
import LocaleContext from "../utils/context"

const Layout = ({ children, className }) => {
  const langContext = React.useContext(LocaleContext)
  const rs = langContext === "rs"
  const langKey = rs ? "sr" : "en"
  const messages = rs ? rsMessages : enMessages

  return (
    <div className={className}>
      <IntlProvider locale={langKey} messages={messages}>
        <Header />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: "100vw",
            padding: `0`,
          }}
        >
          <main>{children}</main>
          <Footer />
        </div>
      </IntlProvider>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
