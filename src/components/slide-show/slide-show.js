import "./slide-show.css"

import { graphql, useStaticQuery } from "gatsby"

import { AiOutlineArrowDown } from "react-icons/ai"
import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { useIntl } from "react-intl"
import Img from "gatsby-image"

const INTERVAL = 10000

const SlideShow = () => {
  const [current, setCurrent] = React.useState(0)
  const intl = useIntl()
  const data = useStaticQuery(graphql`
    query {
      backgrounds: allFile(filter: { name: { regex: "/hero*/" } }) {
        nodes {
          relativePath
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      mBackgrounds: allFile(filter: { name: { regex: "/mwh*/" } }) {
        nodes {
          relativePath
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)

  const copy = [
    {
      header: intl.formatMessage({ id: "slide_show_1_header" }),
      description: intl.formatMessage({ id: "slide_show_1_description" }),
    },
    {
      header: intl.formatMessage({ id: "slide_show_2_header" }),
      description: intl.formatMessage({ id: "slide_show_2_description" }),
    },
    {
      header: intl.formatMessage({ id: "slide_show_3_header" }),
      description: intl.formatMessage({ id: "slide_show_3_description" }),
    },
  ]

  const onClick = () => {
    scrollTo(".scroll-target")
  }

  const renderCurrent = c => {
    const isShown = c === current
    const opacity = isShown ? 1 : 0

    const src = [
      data.mBackgrounds.nodes[c].childImageSharp.fluid,
      {
        ...data.backgrounds.nodes[c].childImageSharp.fluid,
        media: `(min-width: 1024px)`,
      },
    ]

    return (
      <div className="slideshow--slide" style={{ opacity }}>
        <Img
          alt="hero"
          className="slideshow--image"
          fluid={src}
          objectFit="cover"
        />
        <div className="slideshow--text" key={copy[c].header}>
          <h2>{copy[c].header}</h2>
          <div>{copy[c].description}</div>
          <AiOutlineArrowDown color="white" size={50} onClick={onClick} />
        </div>
      </div>
    )
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      const newCurrent = (current + 1) % 3
      setCurrent(newCurrent)
    }, INTERVAL)
    return () => clearInterval(interval)
  }, [current])

  return (
    <div className="slideshow">
      {renderCurrent(0)}
      {renderCurrent(1)}
      {renderCurrent(2)}
    </div>
  )
}

export default SlideShow
