import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Works from "../../components/works/works"
import LocaleContext from "../../utils/context"

const IndexPage = () => {
  return (
    <LocaleContext.Provider value="rs">
      <Layout>
        <SEO
          title="Poslovi"
          description="Višegodišnje iskustvo u projektivanju stambenih i poslovnih objekata, kao i dizajn enterijera po standardima i potrebama klijenta."
        />
        <Works />
      </Layout>
    </LocaleContext.Provider>
  )
}

export default IndexPage
