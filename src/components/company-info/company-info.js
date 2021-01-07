import "./company-info.css"

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
import L from "leaflet"
import React from "react"
import SectionHeader from "../section-header/section-header"
import { useIntl } from "react-intl"

import "leaflet/dist/leaflet.css"

import icon from "leaflet/dist/images/marker-icon.png"
import iconShadow from "leaflet/dist/images/marker-shadow.png"

if (typeof window !== "undefined") {
  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [12, 40],
  })

  L.Marker.prototype.options.icon = DefaultIcon
}

const CompanyInfo = () => {
  const intl = useIntl()

  const center = [44.80361, 20.494803]

  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "contact-bg.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 904, quality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const renderMap = () => {
    if (typeof window === "undefined") return null

    return (
      <MapContainer
        center={center}
        zoom={16}
        style={{ height: "100%", width: "100%" }}
        dragging={!L.Browser.mobile}
        tap={!L.Browser.mobile}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center}>
          <Popup position={center}>
            <h2>Arch-BIM</h2>
            <div>Svetog Nikole 132/2</div>
            <div>+381 64 9595 165</div>
          </Popup>
        </Marker>
      </MapContainer>
    )
  }

  return (
    <div className="company-info">
      <SectionHeader
        top={intl.formatMessage({ id: "bim_architecture" })}
        bottom={intl.formatMessage({ id: "bim_projecting" })}
      />
      <div className="company-info--content">
        <div className="company-info--background-wrapper">
          <Img
            className="company-info--background"
            fluid={data.background.childImageSharp.fluid}
          />
        </div>

        <div className="company-info--address">
          <h2>{intl.formatMessage({ id: "address" })}:</h2>

          <div>Svetog Nikole 132/2 , Belgrade, Serbia</div>

          <div>
            <div>
              {intl.formatMessage({ id: "telephone" })}: +381 64 9595 165
            </div>
            <div>
              {intl.formatMessage({ id: "general_inquiries" })}:
              office@arch-bim.com
            </div>
          </div>

          <div>{intl.formatMessage({ id: "contact_copy" })}</div>
        </div>

        <div className="company-info--map">{renderMap()}</div>
      </div>
    </div>
  )
}

export default CompanyInfo
