import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { isRS } from "../../utils/url"
import Img from "gatsby-image"
import ArchService from "../arch-service/arch-service"

import "./home-services.css"

const HomeServices = props => {
  const rs = isRS()

  const headerFirstLine = !rs ? "PROFESSIONAL" : "BIM"
  const headerSecondLine = !rs ? "SERVICES" : "USLUGE"

  const enData = [
    {
      top: "RESIDENTIAL AND PUBLIC",
      title: "ARCHITECTURAL DESIGN",
      desc: `Our team offers high quality architectural design suited to everyone's standards.`,
    },
    {
      top: "RESIDENTIAL AND PUBLIC",
      title: "INTERIOR DESIGN",
      desc: `We offer tasteful solution to modern living, as well as design of unique and elegant joinery and furniture.`,
    },
    {
      top: "COMPLETE",
      title: "PROJECT DEVELOPMENT",
      desc: `We offer highest quality of project development and coordination using Autodesk REVIT.`,
    },
    {
      top: "PRECISE",
      title: "MEP COORDINATION",
      desc: `We provide accurate models of all MEP elements, as well as solutions for all clashes.`,
    },
  ]

  const rsData = [
    {
      top: "PRIVATNI I POSLOVNI",
      title: "ARHITEKTONSKI DIZAJN",
      desc: `Nudimo kvalitetna arhitektonska rešenja prilagođena standardima i potrebama klijenta.`,
    },
    {
      top: "PRIVATNI I POSLOVNI",
      title: "DIZAJN ENTERIJERA",
      desc: `Nudimo organizaciju i reorganizaciju prostora po vašoj meri, dizajn prostorija, ugradnog nameštaja i rasvete.`,
    },
    {
      top: "DETALJAN",
      title: "RAZVOJ PROJEKTA",
      desc: `Izrada kompletne projektne dokumentacije na osnovu idejnog rešenja, koristeći razvijen REVIT sistem.`,
    },
    {
      top: "PRECIZNA",
      title: "MEP KOORDINACIJA",
      desc: `Pružamo uslugu detaljne koordinacije svih struka, kao i tehnička rešenja kolizija instalaterskih sudara.`,
    },
  ]

  const images = [
    "serviceArchDesign",
    "serviceInteriorDesign",
    "serviceProject",
    "serviceMep",
  ]

  const copyData = isRS() ? rsData : enData

  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "works-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      serviceArchDesign: file(relativePath: { eq: "service-arch-design.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      serviceInteriorDesign: file(
        relativePath: { eq: "service-interior-design.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      serviceProject: file(relativePath: { eq: "service-project.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      serviceMep: file(relativePath: { eq: "service-mep.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const renderElement = (element, i) => {
    const isEven = i % 2 === 0
    const imagePosition = isEven ? "left" : "right"

    return (
      <ArchService
        key={element.title}
        top={element.top}
        title={element.title}
        desc={element.desc}
        image={data[images[i]].childImageSharp.fluid}
        imagePosition={imagePosition}
      />
    )
  }

  return (
    <div className="home-services">
      <div className="home-services--header">
        <h2>{headerFirstLine}</h2>
        <h2>{headerSecondLine}</h2>
      </div>

      <div className="bg-image">
        <Img fluid={data.bg.childImageSharp.fluid} />
      </div>

      <div className="home-services--content">
        {copyData.map(renderElement)}
      </div>
    </div>
  )
}

export default HomeServices
