import "./scroll-top.css"

import { AiOutlineArrowUp } from "react-icons/ai"
import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const ScrollTop = () => {
  const [shown, setShown] = React.useState(false)

  const onClick = () => {
    scrollTo("#app-top-content")
    setShown(false)
  }

  const onScroll = () => {
    const hidden = window.scrollY <= 350
    setShown(!hidden)
  }

  React.useEffect(() => {
    window.addEventListener("scroll", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  })

  if (!shown) return null

  return (
    <div className="scroll-top">
      <AiOutlineArrowUp color="#8C8DD3" size={30} onClick={onClick} />
    </div>
  )
}

export default ScrollTop
