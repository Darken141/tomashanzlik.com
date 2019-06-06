import React from "react"
import SEO from "../components/seo"

import Productions from '../main/components/Productions';
import '../main/main.css';

import './index.css';

const IndexPage = () => (
  <div className="App">
    <main className="container">
      <SEO title="Produkcie" />
      <Productions/>  
    </main>  
  </div>

)

export default IndexPage
