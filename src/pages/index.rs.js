import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/home/home"
import LocaleContext from "../utils/context"

const IndexPage = () => {
  return (
    <LocaleContext.Provider value="rs">
      <Layout>
        <SEO
          title="Početna"
          description="Kvalitetna arhitektonska rešenja prilagođena standardima i potrebama klijenta. Organizacija i reorganizacija prostora po vašoj meri, dizajn prostorija, ugradnog nameštaja i rasvete."
        />
        <Home />
      </Layout>
    </LocaleContext.Provider>
  )
}

export default IndexPage
