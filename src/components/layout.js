/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'


import './layout.styles.scss';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
  {
    file(relativePath: {eq: "pozadie_compress.jpg"}){
      childImageSharp{
        fluid(maxWidth: 1990){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }  
  `
  )

  return(
  <BackgroundImage 
    Tag="section"
    className='production-container__background'
    fluid={data.file.childImageSharp.fluid}
    backgroundColor={`#040e18`}
  >
    <main>{children}</main>
  </BackgroundImage>
)}

export default Layout
