import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Works from "../../components/works/works"
import LocaleContext from "../../utils/context"

const IndexPage = () => {
  return (
    <LocaleContext.Provider value="rs">
      <Layout>
        <SEO title="Radovi" />
        <Works />
      </Layout>
    </LocaleContext.Provider>
  )
}

export default IndexPage
