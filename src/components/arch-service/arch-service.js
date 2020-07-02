import React from "react"
import Img from "gatsby-image"

import "./arch-service.css"

const ArchService = props => {
  const { top, title, desc, image, imagePosition } = props
  let orderClass
  if (imagePosition === "right") {
    orderClass = "arch-service--reverse"
  }

  const classes = `arch-service ${orderClass}`

  return (
    <div className={classes}>
      <div className="arch-service--image">
        <Img
          className="arch-service--image-div"
          fluid={image}
          objectFit="cover"
        />
      </div>
      <div className="arch-service--copy">
        <div className="arch-service--top">{top}</div>
        <div className="arch-service--title">{title}</div>

        <div className="arch-service--separator" />

        <div className="arch-service--desc">{desc}</div>
      </div>
    </div>
  )
}

export default ArchService
