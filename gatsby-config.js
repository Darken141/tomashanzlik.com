// https://enigmatic-hamlet-93969.herokuapp.com/admin/auth/register?registrationToken=4aa9ebadcf3ec72e7c59cb6efa8c74d15d06334d

module.exports = {
	siteMetadata: {
		title: `Tomáš Hanzlík`,
		description: `Hlavná a zároveň všeobecne zameraná produkcia na tvorbu reklamných spotov, aftermovie´s, videoklipov a podobne zameraných videí.`,
		author: `@TomasHanzlik`
	},

	plugins: [
		{
			resolve: `gatsby-plugin-remote-images`,
			options: {
				nodeType: 'MyNodes',
				imagePath: 'https://res.cloudinary.com/coderkin/image/upload/v1604338517/tomashanzlik.com/000001-min_cfpndr.jpg',
			},
		},
		{
			resolve: `gatsby-source-strapi`,
			options: {
				apiURL: `https://enigmatic-hamlet-93969.herokuapp.com`,
				// queryLimit: 1000, // Default to 100
				// contentTypes: [`article`, `user`],
				//If using single types place them in this array.
				singleTypes: [`produkcia-1`, `produkcia-2`, `produkcia-3`, `produkcia-4`, `pozadie`],
				// Possibility to login with a strapi user, when content types are not publically available (optional).
				// loginData: {
				// 	identifier: "",
				// 	password: "",
				// },
			},
		},
		{
			resolve: `gatsby-plugin-styled-components`,
			options: {
				displayName: false
			},
		},
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
		`gatsby-plugin-sass`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	
	]
};
