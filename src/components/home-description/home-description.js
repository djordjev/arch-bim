import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import "./home-description.css"

const HomeDescription = props => {
  const {
    primaryTitle,
    primaryDescription,
    secondaryTitle,
    secondaryDescription,
  } = props

  const data = useStaticQuery(graphql`
    query {
      hall: file(relativePath: { eq: "hall.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 877) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      interior: file(relativePath: { eq: "interior.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 527) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <div className="home-description">
      <div className="home-description--content">
        <div className="home-description--primary">
          <Img fluid={data.hall.childImageSharp.fluid} />
          <div className="home-description--copy">
            <h2>{primaryTitle}</h2>
            <div>{primaryDescription}</div>
          </div>

          <div className="home-description--interior">
            <Img fluid={data.interior.childImageSharp.fluid} />
          </div>

          <div className="home-description--secondary">
            <div className="home-description-secondary--copy">
              <h2>{secondaryTitle}</h2>
              <div>{secondaryDescription}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeDescription
