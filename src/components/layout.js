import React from "react"
import PropTypes from "prop-types"
import Footer from "./footer/footer"

import Header from "./header/header"
import { IntlProvider } from "react-intl"
import enMessages from "../i18n/en"
import rsMessages from "../i18n/rs"
import LocaleContext from "../utils/context"
import ScrollTop from "../components/scroll-top/scroll-top"

import "./layout.css"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/900.css"

const Layout = ({ children, className }) => {
  const langContext = React.useContext(LocaleContext)
  const rs = langContext === "rs"
  const langKey = rs ? "sr" : "en"
  const messages = rs ? rsMessages : enMessages

  return (
    <div id="app-top-content" className={className}>
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
          <ScrollTop />
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
