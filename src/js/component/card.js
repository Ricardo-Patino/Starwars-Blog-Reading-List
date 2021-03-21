import React from "react";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div className="card" style={{ width: "18rem;" }}>
			<img className="card-img-top" src="..." alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{Props.name}</h5>
				<p className="card-text">{Props.hair}</p>
				<p className="card-text">{Props.eyes}</p>
				<a href="#" className="btn btn-primary">
					Read more...
				</a>
			</div>
		</div>
	);
};
Card.propTypes = {
	name: PropTypes.string,
	hair: PropTypes.string,
	eyes: PropTypes.string
};
