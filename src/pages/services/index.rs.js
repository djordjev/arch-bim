import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Services from "../../components/services/services"
import LocaleContext from "../../utils/context"

const IndexPage = () => {
  return (
    <LocaleContext.Provider value="rs">
      <Layout>
        <SEO
          title="Usluge"
          description="Projektovanje poslovnih i stambenih objekata po standardima i potrebama klijenta."
        />
        <Services />
      </Layout>
    </LocaleContext.Provider>
  )
}

export default IndexPage
