import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useIntl } from "react-intl"
import "./about.css"

const About = () => {
  const intl = useIntl()
  const data = useStaticQuery(graphql`
    query {
      head: file(relativePath: { eq: "blue-background.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 750) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      background: file(relativePath: { eq: "about-us-bg.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 550) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <div>
      <Img fluid={data.head.childImageSharp.fluid} />

      <div className="about--content">
        <Img
          className="about--bg"
          fluid={data.background.childImageSharp.fluid}
          fitObject="cover"
        />

        <div className="about--copy">
          <h2>{intl.formatMessage({ id: "about_us" })}</h2>
          <p>{intl.formatMessage({ id: "about_us_copy" })}</p>
        </div>
      </div>
    </div>
  )
}

export default About
