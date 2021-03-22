import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Card } from "../component/card";

export const Planets = () => {
	const { store } = useContext(Context);
	console.log("Planet-data", store.planets);

	return (
		<div className="container text-center mt-5">
			<h1>Planets</h1>
			<div className="card-deck">
				{store.planets.map((item, index) => {
					return (
						<div key={index} className="col-md-4 mb-3">
							<Card name={item.name} hair={item.population} eyes={item.diameter} />
						</div>
					);
				})}
			</div>
			<Link to="/">
				<button className="btn btn-primary">Ir a Home</button>
			</Link>
		</div>
	);
};
