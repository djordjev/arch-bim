import React from "react"
import PropTypes from "prop-types"
import ArchService from "../arch-service/arch-service"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./arch-service-list.css"

const ArchServiceList = props => {
  const { services } = props

  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "works-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
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
        image={element.image}
        imagePosition={imagePosition}
      />
    )
  }

  return (
    <div className="arch-service-list">
      <div className="arch-service-list--background">
        <Img fluid={data.bg.childImageSharp.fluid} objectFit="cover" />
      </div>

      <div className="arch-service-list--content">
        {services.map(renderElement)}
      </div>
    </div>
  )
}

ArchServiceList.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.any,
      top: PropTypes.string,
      title: PropTypes.string,
      desc: PropTypes.string,
    })
  ),
}

ArchServiceList.defaultProps = {
  services: [],
}

export default ArchServiceList
