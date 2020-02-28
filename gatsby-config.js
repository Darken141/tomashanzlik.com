module.exports = {
	siteMetadata: {
		title: `Tomáš Hanzlík`,
		description: `Hlavná a zároveň všeobecne zameraná produkcia na tvorbu reklamných spotov, aftermovie´s, videoklipov a podobne zameraných videí.`,
		author: `@TomasHanzlik`
	},

	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-142792433-1'
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-sass`
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
