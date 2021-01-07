import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CompanyInfo from "../../components/company-info/company-info"
import LocaleContext from "../../utils/context"

const IndexPage = () => {
  return (
    <LocaleContext.Provider value="rs">
      <Layout className="contact-page">
        <SEO
          title="Kontakt"
          description="Kontaktirajte nas za projektovanje arhitektonskih i enterijerskih rešenja i organizaciju i reorganizaciju prostora po vašoj meri."
        />
        <CompanyInfo />
      </Layout>
    </LocaleContext.Provider>
  )
}

export default IndexPage
