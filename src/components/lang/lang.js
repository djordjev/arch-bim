import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./lang.css"

const Lang = props => {
  const data = useStaticQuery(graphql`
    query {
      rs: file(relativePath: { eq: "rs.png" }) {
        childImageSharp {
          fluid(maxWidth: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      en: file(relativePath: { eq: "en.png" }) {
        childImageSharp {
          fluid(maxWidth: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const onSerbian = () => {
    if (!window || !window.location) return false

    const pathname = window.location.pathname

    if (!pathname.startsWith("/rs")) {
      window.location.pathname = `/rs${window.location.pathname}`
    }
  }

  const onEnglish = () => {
    if (!window || !window.location) return false

    const pathname = window.location.pathname

    if (pathname.startsWith("/rs")) {
      window.location.pathname = window.location.pathname.replace("/rs", "")
    }
  }

  return (
    <div className="lang">
      <button className="lang-btn" onClick={onSerbian}>
        <Img fluid={data.rs.childImageSharp.fluid} />
      </button>

      <button className="lang-btn" onClick={onEnglish}>
        <Img fluid={data.en.childImageSharp.fluid} />
      </button>
    </div>
  )
}

export default Lang
