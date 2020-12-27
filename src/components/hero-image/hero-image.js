import "./hero-image.css"

import { AiOutlineArrowDown } from "react-icons/ai"
import Img from "gatsby-image"
import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { useIntl } from "react-intl"

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
