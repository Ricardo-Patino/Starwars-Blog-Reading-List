import React from "react";
import PropTypes from "prop-types";

export const Cardplanet = props => {
	return (
		<div className="card" style={{ width: "18rem;" }}>
			<img className="card-img-top" src="..." alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">{props.diameter}</p>
				<p className="card-text">{props.climate}</p>
				<a href="#" className="btn btn-primary">
					Read more...
				</a>
			</div>
		</div>
	);
};
Cardplanet.propTypes = {
	name: PropTypes.string,
	diameter: PropTypes.number,
	climate: PropTypes.string
};
