import React from "react"
import SlideShow from "../slide-show/slide-show"
import { useIntl } from "react-intl"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ArchService from "../arch-service/arch-service"

import "./works.css"

const Works = () => {
  const intl = useIntl()

  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "works-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }

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

  const images = ["trainStation", "businessBuilding", "interior"]

  const copyData = [
    {
      top: intl.formatMessage({ id: "work_1_top" }),
      title: intl.formatMessage({ id: "work_1_title" }),
      desc: intl.formatMessage({ id: "work_1_desc" }),
    },
    {
      top: intl.formatMessage({ id: "work_2_top" }),
      title: intl.formatMessage({ id: "work_2_title" }),
      desc: intl.formatMessage({ id: "work_2_desc" }),
    },
    {
      top: intl.formatMessage({ id: "work_3_top" }),
      title: intl.formatMessage({ id: "work_3_title" }),
      desc: intl.formatMessage({ id: "work_3_desc" }),
    },
  ]

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
    <div>
      <SlideShow />

      <div className="bg-image">
        <Img fluid={data.bg.childImageSharp.fluid} />
      </div>

      <div className="home-services--content works--content">
        {copyData.map(renderElement)}
      </div>
    </div>
  )
}

export default Works
