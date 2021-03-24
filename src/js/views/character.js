import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Card } from "../component/card";

export const Character = () => {
	const { store } = useContext(Context);
	console.log("data", store.peoples);

	return (
		<div className="container text-center">
			<h1>Characters</h1>
			<div className="card-deck">
				{store.peoples.map((item, index) => {
					return (
						<div key={index} className="col-md-4 mb-3">
							<Card
								name={item.name}
								hair={"Hair Color: " + item.hair_color}
								eyes={"Eye Color: " + item.eye_color}
							/>
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
