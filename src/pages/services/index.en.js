import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Services from "../../components/services/services"
import LocaleContext from "../../utils/context"

const IndexPage = () => {
  return (
    <LocaleContext.Provider value="en">
      <Layout>
        <SEO
          title="Services"
          description="Outsource BIM professional or team for various types of architectural, interior and structural design."
        />
        <Services />
      </Layout>
    </LocaleContext.Provider>
  )
}

export default IndexPage
