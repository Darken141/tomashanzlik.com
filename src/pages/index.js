import React from "react"
import SEO from "../components/seo"

import Productions from '../main/components/Productions';
import Counter from '../main/components/Counter';
import '../main/main.css';

import './index.css';

const IndexPage = () => (
  <div className="App">
    <main className="container">
      <SEO title="Produkcie" />
      <Productions/>  
      </main>  
      <Counter/>
  </div>

)

export default IndexPage
