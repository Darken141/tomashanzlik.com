import React from 'react';
import {graphql} from 'gatsby'
import SEO from '../components/seo';
import Layout from '../components/layout';

import Image from 'gatsby-image'
import styled from 'styled-components'

export const Container = styled.div`
	position: relative;
	display: flex;
	max-width: 80rem;
	flex-wrap: wrap;
	justify-content: center;
	z-index: 1;

	@media all and (max-width: 650px) {
		height: 100%;
	}
`

export const ProductionCard = styled.div`
	position: relative;
	width: 35rem;
	height: 29rem;
	padding: 2rem;
	text-align: center;
	background-color: gray;
	margin: 2rem;
	overflow: hidden;
	border-radius: 3px;
	box-shadow: 1rem 2rem 2rem 0 rgba(0,0,0, 0.1);


	@media all and (max-width: 780px) {
		width: 28rem;
		height: 23rem;
		font-size: 1.2rem;
	}	
`

export const ImageContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;

	img{
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	::after {
		content: ' ';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0, .5);

	} 
`

export const ContentContainer = styled.div`
	position: relative;
	z-index: 2;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	a {
		background-color: #fff;
		color: #000;
		padding: .7rem;	
		border: 1px solid transparent;
		transition: all 0.3s ease-in-out;

		:hover {
			background-color: transparent;
			color: #fff;
			border: 1px solid #fff;
		}
	}
`



const IndexPage = ({data}) => {
	const productions = Object.keys(data).map(key => data[key])
	console.log(productions)

	return (
		<Layout>
			<SEO title="Produkcie" />

			<Container>
			{
				productions.map((production, idx) => {
					const {nadpis, odkaz, popis, obrazokUrl} = production
					return (
						<ProductionCard key={idx}>
							<ImageContainer>
								<img src={obrazokUrl} alt={nadpis} />
								{/* <Image alt={nadpis} fluid={obrazok.childImageSharp.fluid} /> */}
							</ImageContainer>
							<ContentContainer>
								<h2>{nadpis}</h2>
								<p>{popis}</p>
								<a href={odkaz}>Preist na web</a>
							</ContentContainer>
						</ProductionCard>
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
