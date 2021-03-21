import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Card } from "../component/card";

export const Planets = () => {
	const { store } = useContext(Context);
	console.log("data", store.peoples);

	return (
		<div className="container">
			<div className="list-group" />
			<h1>Planetss</h1>
			{store.peoples.map((item, index) => {
				return (
					<div key={index}>
						<Card name={item.name} hair={item.Planet_color} eyes={Planet_size} />;
					</div>
				);
			})}
			<Link to="/">
				<button className="btn btn-primary">Ir a Home</button>
			</Link>
		</div>
	);
};
