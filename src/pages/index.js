import React from 'react';
import {graphql} from 'gatsby'
import SEO from '../components/seo';
import Layout from '../components/layout';
import ProductionCard from '../components/production_card/production_card'
import styled from 'styled-components'

export const Container = styled.div`
	position: relative;
	/* display: flex; */
	max-width: 80rem;
	/* justify-content: center; */
	z-index: 1;
	/* background-color: red; */

	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;

	@media all and (max-width: 650px) {
		grid-template-columns: 1fr;
		grid-template-rows: unset;
		/* height: 100%; */
	}
`


const IndexPage = ({data}) => {
	const productions = Object.keys(data).map(key => data[key])

	return (
		<Layout>
			<SEO title="Produkcie" />

			<Container>
			{
				productions.map((production, idx) => {
					return (
						<ProductionCard key={idx} {...production} />
					)	
				})
			}
			</Container>

		</Layout>
	);
};

export const query = graphql`
{
  strapiProdukcia1 {
    nadpis
    odkaz
    popis
    obrazokUrl
  }
  strapiProdukcia2 {
    nadpis
    odkaz
    popis
    obrazokUrl
  }
  strapiProdukcia3 {
    nadpis
    odkaz
    popis
    obrazokUrl

  }
  strapiProdukcia4 {
    nadpis
    odkaz
    popis
		obrazokUrl
  }
}

`

export default IndexPage;
