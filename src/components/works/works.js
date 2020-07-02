import React from "react"
import SlideShow from "../slide-show/slide-show"
import { useIntl } from "react-intl"
import { useStaticQuery, graphql } from "gatsby"
import ArchServiceList from "../arch-service-list/arch-service-list"

import "./works.css"

const Works = () => {
  const intl = useIntl()

  const data = useStaticQuery(graphql`
    query {
      trainStation: file(relativePath: { eq: "service-arch-design.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      businessBuilding: file(relativePath: { eq: "building.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      interior: file(relativePath: { eq: "interior.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
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
      <SlideShow />

      <ArchServiceList services={services} />
    </div>
  )
}

export default Works
