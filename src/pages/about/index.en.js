import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import About from "../../components/about/about"
import LocaleContext from "../../utils/context"

const IndexPage = () => {
  return (
    <LocaleContext.Provider value="en">
      <Layout>
        <SEO title="About" />
        <About />
      </Layout>
    </LocaleContext.Provider>
  )
}

export default IndexPage
