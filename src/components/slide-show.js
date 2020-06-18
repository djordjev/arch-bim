import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SlideShow = props => {
  const { duration } = props

  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (index === 1) {
        setIndex(0)
      } else {
        setIndex(prev => prev + 1)
      }
    }, duration)
    return () => clearInterval(timer)
  }, [index, duration])

  const allImagesQuery = graphql`
    query {
      allFile(
        filter: {
          relativeDirectory: { eq: "slideshow" }
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        }
      ) {
        totalCount
        edges {
          node {
            base
            childImageSharp {
              fluid(maxWidth: 3000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `
  const {
    allFile: { edges: images },
  } = useStaticQuery(allImagesQuery)

  return (
    <div className="slideshow">
      <Img
        className="slideshow--image"
        fluid={images[index].node.childImageSharp.fluid}
        alt={images[index].node.base.split(".")[0]}
        fadeIn={true}
        durationFadeIn={3000}
      />

      <h3 className="slideshow--text">
        Filename : {images[index].node.base.split(".")[0]}
      </h3>
    </div>
  )
}

SlideShow.defaultProps = {
  duration: 3000,
}

export default SlideShow
