import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Works from "../../components/works/works"
import LocaleContext from "../../utils/context"

const IndexPage = () => {
  return (
    <LocaleContext.Provider value="en">
      <Layout>
        <SEO
          title="Works"
          description="We're highly experienced in providing services for residential, public and infrastructure projects."
        />
        <Works />
      </Layout>
    </LocaleContext.Provider>
  )
}

export default IndexPage
