import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeDescription from "../components/home-description/home-description"
import SlideShow from "../components/slide-show/slide-show"
import HomeServices from "../components/home-services/home-services"

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
    <HomeDescription
      primaryTitle="AUTENTIČAN DIZAJN"
      primaryDescription="Autentična i kreativna arhitektonska i enterijerska rešenja, koja privlače i inspirišu."
      secondaryTitle="RAZVOJ PROJEKTA"
      secondaryDescription="Razvoj konceptualnog rešenja u gotov idejni i izvođački projekat, uz pomoć specijalizovanog BIM sistema."
    />
    <HomeServices />
  </Layout>
)

export default IndexPage
