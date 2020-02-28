import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';

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
			url: `hhttps://www.youtube.com/channel/UC2_YjivupAOSCw-owoE5hGg`,
			image: zivotKameramanaImage
		},
		{
			id: `4`,
			title: `Skautský dokument`,
			description: `Projekt v ktorom vytvárame krátky dokumentárny film o Slovenskom skautingu.`,
			url: `http://skautskydokument.sk/`,
			image: dokumentImage
		}
	];

	return (
		<Layout>
			<SEO title="Produkcie" />

			<div className="container">
				{productions.map(({ id, title, description, image, url }) => (
					<div key={id} className="card">
						<img src={image} alt={`production ${title}`} className="card__image" />
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
