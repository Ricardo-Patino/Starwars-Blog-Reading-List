import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Character = () => {
	const { store } = useContext(Context);
	console.log("data", store.peoples);

	return (
		<div className="text-center mt-5">
			<h1>Characters</h1>
			<Link to="/">
				<botton className="btn btn-primary">Ir a Home</botton>
			</Link>
		</div>
	);
};
