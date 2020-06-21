import React from "react"

import Layout from "../components/layout"
import HomeDescription from "../components/home-description/home-description"
import SEO from "../components/seo"
import SlideShow from "../components/slide-show/slide-show"
import HomeServices from "../components/home-services/home-services"

const copy = [
  {
    header: "BIM ARCHITECTURE",
    description: "Building in BIM",
  },
  {
    header: "ARCHITECTURAL AND INTERIOR DESIGN",
    description: "Design and drafting in 3D Revit workflow",
  },
  {
    header: "BIM COORDINATION AND CONSULTATION",
    description: `Knowledge and experiance that makes shifting teams to BIM possible`,
  },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SlideShow copy={copy} />
    <HomeDescription
      primaryTitle="AUTHENTIC DESIGN"
      primaryDescription="We offer creative architecture and interior design solutions meant to attract and inspire. With our skills, experiance and creativity no task is unreachable."
      secondaryTitle="DESIGN DEVELOPMENT"
      secondaryDescription="With our specialised knowledge in BIM coordination and development we can turn your idea into finished architectural project, ready to be constructed."
    />
    <HomeServices />
  </Layout>
)

export default IndexPage
