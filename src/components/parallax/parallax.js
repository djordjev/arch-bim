import React from "react"
import Img from "gatsby-image"

import "./parallax.css"

const Parallax = props => {
  const { className, image, height, children } = props

  const classes = `parallax ${className}`

  const elemRef = React.useRef()
  const imageRef = React.useRef()

  const [top, setTop] = React.useState(0)

  const onScroll = () => {
    const currentPosition = elemRef.current.getBoundingClientRect()
    const windowHeight = window.innerHeight

    const { y, height } = currentPosition

    if (y > windowHeight || y < -1 * height) return

    const img = imageRef.current.imageRef.current
    const imageHeight = img.getBoundingClientRect().height

    const offset = Math.abs(imageHeight - height)

    const newTop = (y / windowHeight) * offset

    setTop(newTop * -1)
  }

  React.useEffect(() => {
    window.addEventListener("scroll", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <div style={{ height }} className={classes} ref={elemRef}>
      <Img style={{ top }} className="bg-image" fluid={image} ref={imageRef} />
      <div className="parallax-children">{children}</div>
    </div>
  )
}

export default Parallax
