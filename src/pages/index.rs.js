import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SlideShow from "../components/slide-show"

const copy = [
  {
    header: "BIM ARHITEKTURA",
    description: "Projektovanje u BIM-u",
  },
  {
    header: "ARHITEKTURA I DIZAJN ENTERIJERA",
    description: "Dizajn i razvoj projekta u 3D Revit sistemu",
  },
  {
    header: "BIM MENADŽMENT I KOORDINACIJA",
    description: `Znanje i iskustvo koji čine tim spremnim za prelazak u BIM sistem`,
  },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Pocetna" />
    <SlideShow copy={copy} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about">O</Link> <br />
    <Link to="/services">Usluge</Link> <br />
    <Link to="/contact">Kontakt</Link> <br />
    <Link to="/works">Radovi</Link>
  </Layout>
)

export default IndexPage
