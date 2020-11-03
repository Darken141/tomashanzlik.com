import React from 'react';
import styled from 'styled-components'

const ProductionCard = ({ obrazokUrl, nadpis, popis, odkaz }) => {
	return (
		<ProductionCardContainer>
			<ImageContainer>
				<img src={obrazokUrl} alt={nadpis} />
			</ImageContainer>
			<ContentContainer>
				<h2>{nadpis}</h2>
				<p>{popis}</p>
				<a href={odkaz}>Prejst na web</a>
			</ContentContainer>
		</ProductionCardContainer>
	);
};

export const ProductionCardContainer = styled.div`
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


export default ProductionCard;
