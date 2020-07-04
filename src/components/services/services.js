import React from "react"
import SlideShow from "../../components/slide-show/slide-show"
import ArchServiceList from "../../components/arch-service-list/arch-service-list"
import { useIntl } from "react-intl"
import { useStaticQuery, graphql } from "gatsby"

const Services = () => {
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
    <div>
      <SlideShow />
      <ArchServiceList services={services} />
    </div>
  )
}

export default Services
