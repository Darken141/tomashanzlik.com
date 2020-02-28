/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
// import BackgroundImage from 'gatsby-background-image';
// import { graphql, useStaticQuery } from 'gatsby';

// import backgroundImage from '../images/2.png';

import './layout.styles.scss';

const Layout = ({ children }) => {
	return (
		<React.Fragment>
			<div className="background__container">
				<main>{children}</main>
			</div>
			{/* <img src={backgroundImage} alt="background tomas hanzlik" className="background__container-background" /> */}
		</React.Fragment>
	);
};

export default Layout;
