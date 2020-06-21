import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Parallax } from "react-scroll-parallax"

import "./footer.css"
import { isRS } from "../../utils/url"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "blue-background.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      landscape: file(relativePath: { eq: "landscape-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      interior: file(relativePath: { eq: "interior-design-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      structure: file(relativePath: { eq: "structure-design-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const rs = isRS()
  const headerTitle = rs ? "OSTALE USLUGE" : "OTHER SERVICES"

  const enCopy = [
    "BIM Management and coordination",
    "Advanced free-form and parametric modeling",
    "Landscaping",
  ]

  const rsCopy = [
    "BIM menadžment i koordinacija",
    "Modelovanje slobodnih i parametarskih formi",
    "Pejzažno okruženje i teren",
  ]

  const copy = rs ? rsCopy : enCopy

  const icons = ["structure", "interior", "landscape"]

  return (
    <footer>
      <div className="parallax-wrapper">
        <Parallax y={[0, -70]}>
          <Img fluid={data.background.childImageSharp.fluid} />
        </Parallax>
        <div className="parallax-wrapper-copy">
          <h2>{headerTitle}</h2>
          <div className="parallax-remaining-services">
            {copy.map((c, i) => (
              <div key={c}>
                <Img
                  className="parallax-icon"
                  fluid={data[icons[i]].childImageSharp.fluid}
                />
                <div>{c}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ height: "800px" }}>contact</div>
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  )
}

export default Footer
