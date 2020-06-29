import React from "react"
import PropTypes from "prop-types"
import Footer from "./footer/footer"

import Header from "./header/header"
import "./layout.css"
import { IntlProvider } from "react-intl"
import { isRS } from "../utils/url"
import enMessages from "../i18n/en"
import rsMessages from "../i18n/rs"

const Layout = ({ children }) => {
  const rs = isRS()
  const langKey = rs ? "sr" : "en"
  const messages = rs ? rsMessages : enMessages

  return (
    <>
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
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
