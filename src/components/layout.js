/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import {useStaticQuery, graphql} from 'gatsby'
import styled from 'styled-components'
import "fontsource-open-sans"

import './layout.styles.css';

const Layout = ({ children }) => {
	const {strapiPozadie: {obrazokUrl}} = useStaticQuery(graphql`
		{
			strapiPozadie {
				obrazokUrl
			}
		}
	`)

	return (
		<ProductionContainer>
			<img src={obrazokUrl} alt='pozadie'/>
			{children}
		</ProductionContainer>
  	)
};

const ProductionContainer = styled.main`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;

	img{
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
		left: 0;
		top: 0;
		bottom: 0;
	}

	::after {
		content: ' ';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0, .65);

	} 

	@media all and (max-width: 650px) {
		overflow-y: scroll;
	}
`

export default Layout;
