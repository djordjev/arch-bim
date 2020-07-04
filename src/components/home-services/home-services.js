import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ArchServiceList from "../arch-service-list/arch-service-list"
import Link from "../../utils/link"
import SectionHeader from "../section-header/section-header"
import { useIntl } from "react-intl"

import "./home-services.css"

const HomeServices = props => {
  const intl = useIntl()

  const data = useStaticQuery(graphql`
    query {
      serviceArchDesign: file(relativePath: { eq: "service-arch-design.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      serviceInteriorDesign: file(
        relativePath: { eq: "service-interior-design.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      serviceProject: file(relativePath: { eq: "service-project.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      serviceMep: file(relativePath: { eq: "service-mep.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const services = [
    {
      top: intl.formatMessage({ id: "home_services_1_top" }),
      title: intl.formatMessage({ id: "home_services_1_title" }),
      desc: intl.formatMessage({ id: "home_services_1_desc" }),
      image: data.serviceArchDesign.childImageSharp.fluid,
    },
    {
      top: intl.formatMessage({ id: "home_services_2_top" }),
      title: intl.formatMessage({ id: "home_services_2_title" }),
      desc: intl.formatMessage({ id: "home_services_2_desc" }),
      image: data.serviceInteriorDesign.childImageSharp.fluid,
    },
    {
      top: intl.formatMessage({ id: "home_services_3_top" }),
      title: intl.formatMessage({ id: "home_services_3_title" }),
      desc: intl.formatMessage({ id: "home_services_3_desc" }),
      image: data.serviceProject.childImageSharp.fluid,
    },
    {
      top: intl.formatMessage({ id: "home_services_4_top" }),
      title: intl.formatMessage({ id: "home_services_4_title" }),
      desc: intl.formatMessage({ id: "home_services_4_desc" }),
      image: data.serviceMep.childImageSharp.fluid,
    },
  ]

  return (
    <div className="home-services">
      <SectionHeader
        top={intl.formatMessage({ id: "home_services_first" })}
        bottom={intl.formatMessage({ id: "home_services_second" })}
      />

      <ArchServiceList services={services} />

      <div className="button-wrapper">
        <Link className="primary-button" to={"/services"}>
          {intl.formatMessage({ id: "portfolio" })}
        </Link>
      </div>
    </div>
  )
}

export default HomeServices
