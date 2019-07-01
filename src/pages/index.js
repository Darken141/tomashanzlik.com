import React from "react"
import SEO from "../components/seo"
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import Productions from '../main/components/Productions';
import Counter from '../main/components/Counter';
import '../main/main.css';

import './index.css';



const IndexPage = () => (
  <div className="App">
    <main className="container">
      <SEO title="Produkcie" />
      <Productions/>  
      <div>
    </div>
    </main>  
  </div>

)

export default IndexPage
