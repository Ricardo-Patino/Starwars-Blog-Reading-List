import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { PlanetDetails } from "../component/planetsdetails";

export const Cardplanet = props => {
	return (
		<div className="card" style={{ width: "18rem;" }}>
			<img
				className="card-img-top"
				src="https://tse4.mm.bing.net/th?id=OIP.O2VApWehQ0eB0aaSa-Tz0AHaEo&pid=Api&P=0&w=286&h=180"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">{props.diameter}</p>
				<p className="card-text">{props.climate}</p>
				<Link to={"/planetdetails/" + props.index}>
					<button className="btn btn-primary">Learn More</button>
				</Link>
			</div>
		</div>
	);
};
Cardplanet.propTypes = {
	name: PropTypes.string,
	diameter: PropTypes.number,
	climate: PropTypes.string,
	index: PropTypes.number
};
