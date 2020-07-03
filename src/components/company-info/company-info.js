import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useIntl } from "react-intl"
import "./company-info.css"

const CompanyInfo = () => {
  const intl = useIntl()

  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "blue-background.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="company-info">
      <div className="company-info--background-wrapper">
        <Img
          className="company-info--background"
          fluid={data.background.childImageSharp.fluid}
        />
      </div>

      <div className="company-info--address">
        <h2>Address:</h2>

        <p>Svetog Nikole 132/2 , Belgrade, Serbia</p>

        <p>
          <div>Telephone: +381 64 9595 165</div>
          <div>General Inquiries: office@arch-bim.com</div>
        </p>

        <p>
          To reach us at our offices, please check out the map below with the
          address and directions.
        </p>
      </div>
    </div>
  )
}

export default CompanyInfo
