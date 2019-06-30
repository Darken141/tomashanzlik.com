import React from "react"
import SEO from "../components/seo"
import ReactGA from 'react-ga';

import Productions from '../main/components/Productions';
import Counter from '../main/components/Counter';
import '../main/main.css';

import './index.css';

const initializeReactGA = () => {
  ReactGA.initialize('UA-142792433-1');
  ReactGA.pageview('/homepage');
}



const IndexPage = () => (
  <div className="App">
    <main className="container">
      <SEO title="Produkcie" />
      <Productions/>  
    </main>  
  </div>

)

export default IndexPage
