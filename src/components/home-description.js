import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

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
            ...GatsbyImageSharpFluid
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
