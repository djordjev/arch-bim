import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/home/home"
import LocaleContext from "../utils/context"

const IndexPage = () => {
  return (
    <LocaleContext.Provider value="en">
      <Layout>
        <SEO title="Home" />
        <Home />
      </Layout>
    </LocaleContext.Provider>
  )
}

export default IndexPage
