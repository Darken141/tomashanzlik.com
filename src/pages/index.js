import React from "react"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout';
import ProductionCard from '../components/production_card/production_card';

import './index.scss';

const IndexPage = () => {


  const data = useStaticQuery(graphql`
  {
    site {
      siteMetadata {
        productions {
          description
          id
          title
          url
          image
        }
      }
    }
  }
  `
  )

  const { productions } = data.site.siteMetadata;

  const topRow = productions.filter(production => {
    return production.id < 3;
  })

  const bottomRow = productions.filter(production => {
    return production.id > 2;
  })

  return (
    <Layout>
          <SEO title="Produkcie" />
          <div className='production-container__row'>
            {
              topRow.map(({id, title, description, url, image}) => (
                <ProductionCard 
                  key={id}
                  title={title}
                  description={description}
                  url={url}
                  image={image}
                />
              ))
            }
          </div>
          <div className='production-container__row'>
            {bottomRow.map(({id, title, description, url, image}) => (
              <ProductionCard 
                key={id}
                title={title}
                description={description}
                url={url}
                image={image}
              />
            ))}
          </div>
    </Layout>
  )   
}

export default IndexPage;

// <div  className='production-container__background'>
// <Img fluid={data.file.childImageSharp.fluid} className='production-container__background'/>
// </div>