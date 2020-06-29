import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/home/home"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Pocetna" />
      <Home />
    </Layout>
  )
}

export default IndexPage
