import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/home/home"
import LocaleContext from "../utils/context"

const IndexPage = () => {
  return (
    <LocaleContext.Provider value="rs">
      <Layout>
        <SEO title="Pocetna" />
        <Home />
      </Layout>
    </LocaleContext.Provider>
  )
}

export default IndexPage
