import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Parallax from "../../components/parallax/parallax"
import Contact from "../../components/contact/contact"
import { useIntl } from "react-intl"

import "./footer.css"
import Link from "../../utils/link"

const Footer = () => {
  const intl = useIntl()

  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "blue-background.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      landscape: file(relativePath: { eq: "landscape-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      interior: file(relativePath: { eq: "interior-design-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      structure: file(relativePath: { eq: "structure-design-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const headerTitle = intl.formatMessage({ id: "footer_title" })

  const bimManagement = intl.formatMessage({ id: "bim_management" })
  const advancedModeling = intl.formatMessage({ id: "advanced_modeling" })
  const landscaping = intl.formatMessage({ id: "landscaping" })

  const copy = [bimManagement, advancedModeling, landscaping]

  const icons = ["structure", "interior", "landscape"]

  const homeCopy = intl.formatMessage({ id: "home" })
  const aboutCopy = intl.formatMessage({ id: "about" })
  const servicesCopy = intl.formatMessage({ id: "services" })
  const contactCopy = intl.formatMessage({ id: "contact" })
  const worksCopy = intl.formatMessage({ id: "works" })

  return (
    <footer>
      <Parallax height={400} image={data.background.childImageSharp.fluid}>
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
      </Parallax>

      <Contact />
      <div className="footer-location">
        Belgrade, Serbia
        <div>
          <a href="mailto:office@arch-bim.com">office@arch-bim.com</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-links">
          <Link to="/">{homeCopy}</Link>
          <Link to="/about">{aboutCopy}</Link>
          <Link to="/services">{servicesCopy}</Link>
          <Link to="/works">{worksCopy}</Link>
          <Link to="/contact">{contactCopy}</Link>
        </div>
        <div className="footer-tm">Arch-Bim, All Rights Reserved</div>
      </div>
    </footer>
  )
}

export default Footer
