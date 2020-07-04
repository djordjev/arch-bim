import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useIntl } from "react-intl"
import "./company-info.css"
import { Map, Marker, Popup, TileLayer } from "react-leaflet"
import SectionHeader from "../section-header/section-header"
import L from "leaflet"

const CompanyInfo = () => {
  const intl = useIntl()
  const [popup, setPopup] = React.useState(false)

  const center = [44.80361, 20.494803]

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

        <div className="company-info--map">
          <Map
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
            <Marker
              position={center}
              onClick={() => {
                setPopup(true)
              }}
            />

            {popup && (
              <Popup
                position={center}
                onClose={() => {
                  setPopup(false)
                }}
              >
                <h2>Arch-BIM</h2>
                <div>Svetog Nikole 132/2</div>
                <div>+381 64 9595 165</div>
              </Popup>
            )}
          </Map>
        </div>
      </div>
    </div>
  )
}

export default CompanyInfo