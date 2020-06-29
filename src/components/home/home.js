import React from "react"
import { useIntl } from "react-intl"
import HomeDescription from "../home-description/home-description"
import SlideShow from "../slide-show/slide-show"
import HomeServices from "../home-services/home-services"

const Home = () => {
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
    <>
      <SlideShow copy={copy} />
      <HomeDescription
        primaryTitle={intl.formatMessage({ id: "authentic_design" })}
        primaryDescription={intl.formatMessage({ id: "home_description" })}
        secondaryTitle={intl.formatMessage({ id: "design_development" })}
        secondaryDescription={intl.formatMessage({
          id: "home_secondary_description",
        })}
      />
      <HomeServices />
    </>
  )
}

export default Home
