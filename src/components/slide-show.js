import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundSlider from "gatsby-image-background-slider"

const SlideShow = () => {
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
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        `)}
        initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
        transition={4} // transition duration between images
        duration={8} // how long an image is shown
        // specify images to include (and their order) according to `relativePath`
        images={["header1.jpg", "header2.jpg"]}
      >
        <h2 className="slideshow--text">Slika1</h2>
        <h2 className="slideshow--text">Meow</h2>
      </BackgroundSlider>
    </div>
  )
}

export default SlideShow
