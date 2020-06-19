import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SlideShow from "../components/slide-show"

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
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about">About</Link> <br />
    <Link to="/services">Services</Link> <br />
    <Link to="/contact">Contact</Link> <br />
    <Link to="/works">Works</Link>
  </Layout>
)

export default IndexPage
