import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import About from "../../components/about/about"
import LocaleContext from "../../utils/context"

const IndexPage = () => {
  return (
    <LocaleContext.Provider value="rs">
      <Layout>
        <SEO title="O Nama" />
        <About />
      </Layout>
    </LocaleContext.Provider>
  )
}

export default IndexPage
