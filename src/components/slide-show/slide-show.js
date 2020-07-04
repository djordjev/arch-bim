import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundSlider from "gatsby-image-background-slider"
import { useIntl } from "react-intl"

import "./slide-show.css"

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

  return (
    <div className="slideshow">
      <BackgroundSlider
        query={useStaticQuery(graphql`
          query {
            backgrounds: allFile(
              filter: { sourceInstanceName: { eq: "slideshow" } }
            ) {
              nodes {
                relativePath
                childImageSharp {
                  fluid(maxWidth: 4000, quality: 100) {
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
          </div>
        ))}
      </BackgroundSlider>
    </div>
  )
}

export default SlideShow
