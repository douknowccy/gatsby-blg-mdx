import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
// ...GatsbyImageSharpFluid
const query = graphql`
  {
    person: file(relativePath: { eq: "person.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = ({ showPerson }) => {
  const {
    person: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header className="hero">
      {showPerson && <Image fluid={fluid} className="hero-person" />}
    </header>
  )
}

export default Hero
