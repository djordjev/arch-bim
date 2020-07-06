import React from "react"
import Img from "gatsby-image"
import { useIntl } from "react-intl"
import { AiOutlineArrowDown } from "react-icons/ai/index"
import scrollTo from "gatsby-plugin-smoothscroll"

import "./hero-image.css"

const HeroImage = props => {
  const { image } = props

  const intl = useIntl()

  const onClick = () => {
    scrollTo(".scroll-target")
  }

  return (
    <div className="hero-image">
      <Img fluid={image} fitObject="cover" className="hero-image--image" />
      <div className="hero-image--text">
        <h2>{intl.formatMessage({ id: "bim_architecture" })}</h2>
        <div>{intl.formatMessage({ id: "bim_projecting" })}</div>
        <AiOutlineArrowDown color="white" size={50} onClick={onClick} />
      </div>
    </div>
  )
}

export default HeroImage
