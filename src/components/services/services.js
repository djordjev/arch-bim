import React from "react"
import ArchServiceList from "../../components/arch-service-list/arch-service-list"
import { useIntl } from "react-intl"
import { useStaticQuery, graphql } from "gatsby"
import HeroImage from "../../components/hero-image/hero-image"

const Services = () => {
  const intl = useIntl()

  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "hero1.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 1080, quality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      serviceArchDesign: file(relativePath: { eq: "service-arch-design.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      serviceInteriorDesign: file(
        relativePath: { eq: "service-interior-design.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      serviceProject: file(relativePath: { eq: "service-project.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      serviceMep: file(relativePath: { eq: "service-mep.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 75) {
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
      <HeroImage image={data.hero.childImageSharp.fluid} />
      <div className="scroll-target">
        <ArchServiceList services={services} />
      </div>
    </div>
  )
}

export default Services
