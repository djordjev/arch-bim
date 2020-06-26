import React from "react"

import "./section-header.css"

const SectionHeader = props => {
  const { top, bottom } = props
  return (
    <div className="section-header">
      <div className="section-header--separator" />
      <h2 className="section-header--top">{top}</h2>
      <h2 className="section-header--bottom">{bottom}</h2>
      <div className="section-header--separator" />
    </div>
  )
}

export default SectionHeader
