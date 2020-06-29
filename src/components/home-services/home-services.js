import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ArchService from "../arch-service/arch-service"
import Link from "../../utils/link"
import SectionHeader from "../section-header/section-header"
import { useIntl } from "react-intl"

import "./home-services.css"

const HomeServices = props => {
  const intl = useIntl()

  const headerFirstLine = intl.formatMessage({ id: "home_services_first" })
  const headerSecondLine = intl.formatMessage({ id: "home_services_second" })

  const images = [
    "serviceArchDesign",
    "serviceInteriorDesign",
    "serviceProject",
    "serviceMep",
  ]

  const copyData = [
    {
      top: intl.formatMessage({ id: "home_services_1_top" }),
      title: intl.formatMessage({ id: "home_services_1_title" }),
      desc: intl.formatMessage({ id: "home_services_1_desc" }),
    },
    {
      top: intl.formatMessage({ id: "home_services_2_top" }),
      title: intl.formatMessage({ id: "home_services_2_title" }),
      desc: intl.formatMessage({ id: "home_services_2_desc" }),
    },
    {
      top: intl.formatMessage({ id: "home_services_3_top" }),
      title: intl.formatMessage({ id: "home_services_3_title" }),
      desc: intl.formatMessage({ id: "home_services_3_desc" }),
    },
    {
      top: intl.formatMessage({ id: "home_services_4_top" }),
      title: intl.formatMessage({ id: "home_services_4_title" }),
      desc: intl.formatMessage({ id: "home_services_4_desc" }),
    },
  ]

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

  const buttonCopy = intl.formatMessage({ id: "portfolio" })

  return (
    <div className="home-services">
      <SectionHeader top={headerFirstLine} bottom={headerSecondLine} />

      <div className="bg-image">
        <Img fluid={data.bg.childImageSharp.fluid} />
      </div>

      <div className="home-services--content">
        {copyData.map(renderElement)}
      </div>

      <div className="button-wrapper">
        <Link className="primary-button" to={"/services"}>
          {buttonCopy}
        </Link>
      </div>
    </div>
  )
}

export default HomeServices
