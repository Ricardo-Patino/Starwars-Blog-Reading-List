import React from "react";
import { Link } from "react-router-dom";

export const Character = () => (
	<div className="text-center mt-5">
		<h1>Characters</h1>
		<Link to="/">
			<botton className="btn btn-primary">Ir a Home</botton>
		</Link>
	</div>
);
