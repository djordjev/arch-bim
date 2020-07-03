import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useIntl } from "react-intl"
import GoogleMapReact from "google-map-react"
import "./company-info.css"

const CompanyInfo = () => {
  const intl = useIntl()

  const center = {
    lat: 44.80361,
    lng: 20.494803,
  }

  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "blue-background.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 700) {
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

        <div>
          <div>Telephone: +381 64 9595 165</div>
          <div>General Inquiries: office@arch-bim.com</div>
        </div>

        <p>
          To reach us at our offices, please check out the map below with the
          address and directions.
        </p>
      </div>

      <div className="company-info--map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCcywKcxXeMZiMwLDcLgyEnNglcLOyB_qw" }}
          defaultCenter={center}
          defaultZoom={13}
        >
          {/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */}
          <div>nesto</div>
        </GoogleMapReact>
      </div>
    </div>
  )
}

export default CompanyInfo
