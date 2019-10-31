module.exports = {
  siteMetadata: {
    title: `Tomáš Hanzlík`,
    description: `Videoprodukcia firemných eventov, svadobných videi, reklamnych spotov a videoklipov`,
    author: `@TomasHanzlik`,
    productions: [
      {
      id: `1`,
      title: `Hanzlik.sk`,
      description: `Hlavná a zároveň všeobecne zameraná produkcia na tvorenie videoklipov, reklamných videí, aftermovie's a podobne zameraných projektov.`,
      url: `http://www.hanzlik.sk`,
      image: `hanzlik`
      }, 
      {
        id: `2`,
        title: `Svadobná produkcia`,
        description: `Produkcia zameraná na tvorbu profesionálnych svadobných videí. Produkcia disponuje rozsiahlym tímom kameramanov.`,
        url: `http://www.svadobnaprodukcia.sk/`,
        image: `svadobna`
      },
      {
        id: `3`,
        title: `Stužková produkcia`,
        description: `Produkcia zameraná na tvorbu profesionálnych videí zo Stužkových slávností. Produkcia poskytuje rôzne balíčky pre študentov.`,
        url: `http://www.hanzlik.sk`,
        image: `stuzkova`
      },
      {
        id: `4`,
        title: `Visuals for sale`,
        description: `Produkcia zameraná na tvorbu a predaj vizuálov a "one take" videoklipov.`,
        url: `http://www.instagram.com/visualsforsale`,
        image: `visuals`
      }
    ]
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-142792433-1",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
