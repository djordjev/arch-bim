import "./slide-show.css"

import { graphql, useStaticQuery } from "gatsby"

import { AiOutlineArrowDown } from "react-icons/ai"
import BackgroundSlider from "gatsby-image-background-slider"
import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { useIntl } from "react-intl"

const SlideShow = () => {
  const intl = useIntl()

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

  return (
    <div className="slideshow">
      <BackgroundSlider
        query={useStaticQuery(graphql`
          query {
            backgrounds: allFile(filter: { name: { regex: "/hero*/" } }) {
              nodes {
                relativePath
                childImageSharp {
                  fluid(maxWidth: 1920, quality: 60) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        `)}
        initDelay={2}
        transition={4}
        duration={10}
        images={["hero1.jpg", "hero2.jpg", "hero3.jpg"]}
      >
        {copy.map(c => (
          <div className="slideshow--text" key={c.header}>
            <h2>{c.header}</h2>
            <div>{c.description}</div>
            <AiOutlineArrowDown color="white" size={50} onClick={onClick} />
          </div>
        ))}
      </BackgroundSlider>
    </div>
  )
}

export default SlideShow
