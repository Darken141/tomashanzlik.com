import React from 'react';
import SEO from '../components/seo';
// import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
// import ProductionCard from '../components/production_card/production_card';

//IMAGES

import hanlikImage from '../images/hanzlik_compress.jpg.png';
import svadobnaImage from '../images/svadobna_compress.jpg.png';
import zivotKameramanaImage from '../images/zivot_kameramana.jpg.png';
import dokumentImage from '../images/skuatsky_dokument.png';

import './index.scss';

const IndexPage = () => {
	const productions = [
		{
			id: `1`,
			title: `Hanzlik.sk`,
			description: `Hlavná a zároveň všeobecne zameraná produkcia na tvorbu reklamných spotov, aftermovie´s, videoklipov a podobne zameraných videí.`,
			url: `http://www.hanzlik.sk`,
			image: hanlikImage
		},
		{
			id: `2`,
			title: `Svadobná produkcia`,
			description: `Produkcia zameraná na tvorbu profesionálnych svadobných videí. Produkcia disponuje rozsiahlym tímom kameramanov.`,
			url: `http://www.svadobnaprodukcia.sk/`,
			image: svadobnaImage
		},
		{
			id: `3`,
			title: `Život kameramana`,
			description: `Projekt v ktorom odhaľujem zákulisie práce kameramana, ukazujem proces tvorby videí a dávam všemožné tipy začínajúcim kameramanom.`,
			url: `http://www.hanzlik.sk`,
			image: zivotKameramanaImage
		},
		{
			id: `4`,
			title: `Skautský dokument`,
			description: `Projekt v ktorom vytvárame krátky dokumentárny film o Slovenskom skautingu.`,
			url: `http://www.instagram.com/visualsforsale`,
			image: dokumentImage
		}
	];

	// const data = useStaticQuery(graphql`
	// 	{
	// 		site {
	// 			siteMetadata {
	// 				productions {
	// 					description
	// 					id
	// 					title
	// 					url
	// 					image
	// 				}
	// 			}
	// 		}
	// 	}
	// `);

	// const { productions } = data.site.siteMetadata;

	// const topRow = productions.filter((production) => {
	// 	return production.id < 3;
	// });

	// const bottomRow = productions.filter((production) => {
	// 	return production.id > 2;
	// });

	// console.log(hanlikImage);

	return (
		<Layout>
			<SEO title="Produkcie" />

			<div className="container">
				{productions.map(({ id, title, description, image, url }) => (
					<div key={id} className="card">
						<img src={image} alt="production image" className="card__image" />
						<h2 className="card__title">{title}</h2>
						<p className="card__description">{description}</p>
						<a className="card__btn" href={url} rel="noopener noreferrer" target="_blank">
							Prejsť!
						</a>
					</div>
				))}
			</div>
		</Layout>
	);
};

export default IndexPage;

// <div  className='production-container__background'>
// <Img fluid={data.file.childImageSharp.fluid} className='production-container__background'/>
// </div>

{
	/* <div className="production-container__row">
{topRow.map(({ id, title, description, url, image }) => (
  <ProductionCard key={id} title={title} description={description} url={url} image={image} />
))}
</div>
<div className="production-container__row">
{bottomRow.map(({ id, title, description, url, image }) => (
  <ProductionCard key={id} title={title} description={description} url={url} image={image} />
))}
</div> */
}
