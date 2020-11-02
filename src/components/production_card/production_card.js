import React from 'react';

const ProductionCard = ({ handleClick, title, description, url, image }) => {
	return (
		<div className={`production-card ${image}`} onClick={handleClick}>
			<h1 className="production-card__title">{title}</h1>
			<div className="production-card__container">
				<p className="production-card__description">{description}</p>
			</div>
			<a className="production-card__link" rel="noopener noreferrer" href={url} target="_blank">
				Prejsť!
			</a>
		</div>
	);
};

export default ProductionCard;
