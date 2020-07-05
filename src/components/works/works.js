import React from "react"
import HeroImage from "../../components/hero-image/hero-image"
import { useIntl } from "react-intl"
import { useStaticQuery, graphql } from "gatsby"
import ArchServiceList from "../arch-service-list/arch-service-list"

import "./works.css"

const Works = () => {
  const intl = useIntl()

  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "hero2.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 1080, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      trainStation: file(relativePath: { eq: "service-arch-design.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      businessBuilding: file(relativePath: { eq: "building.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      interior: file(relativePath: { eq: "interior.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const services = [
    {
      top: intl.formatMessage({ id: "work_1_top" }),
      title: intl.formatMessage({ id: "work_1_title" }),
      desc: intl.formatMessage({ id: "work_1_desc" }),
      image: data.trainStation.childImageSharp.fluid,
    },
    {
      top: intl.formatMessage({ id: "work_2_top" }),
      title: intl.formatMessage({ id: "work_2_title" }),
      desc: intl.formatMessage({ id: "work_2_desc" }),
      image: data.businessBuilding.childImageSharp.fluid,
    },
    {
      top: intl.formatMessage({ id: "work_3_top" }),
      title: intl.formatMessage({ id: "work_3_title" }),
      desc: intl.formatMessage({ id: "work_3_desc" }),
      image: data.interior.childImageSharp.fluid,
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

export default Works
