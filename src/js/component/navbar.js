import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3 bg-dark">
			<Link to="/">
				<span className="navbar-brand text-light mb-0 h1">
					<img
						width={80}
						height={40}
						src="https://tse3.mm.bing.net/th?id=OIP.IyVIK3Cw9fZ4iHMlp2FZmAHaD5&pid=Api&P=0&w=295&h=156"
						alt="Planets"
					/>
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
