import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useIntl } from "react-intl"
import HeroImage from "../../components/hero-image/hero-image"

import "./about.css"

const About = () => {
  const intl = useIntl()
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "hero3.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 1080, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 150, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      head: file(relativePath: { eq: "blue-background.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 750, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      background: file(relativePath: { eq: "about-us-bg.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 550, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <div>
      <HeroImage image={data.hero.childImageSharp.fluid} />

      <div className="about--content scroll-target">
        <Img
          className="about--bg"
          fluid={data.background.childImageSharp.fluid}
          fitObject="cover"
        />

        <div className="about--copy">
          <h2>{intl.formatMessage({ id: "about_us" })}</h2>

          <div className="about-copy--content">
            <p>{intl.formatMessage({ id: "about_us_copy" })}</p>
            <div className="about--logo">
              <Img fluid={data.logo.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
