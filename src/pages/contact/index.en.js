import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CompanyInfo from "../../components/company-info/company-info"
import LocaleContext from "../../utils/context"

const IndexPage = () => {
  return (
    <LocaleContext.Provider value="en">
      <Layout>
        <SEO title="Contact" />
        <CompanyInfo />
      </Layout>
    </LocaleContext.Provider>
  )
}

export default IndexPage
