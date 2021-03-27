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

				<div className="ml-auto">
					<div className="dropdown">
						<button
							className="btn btn-secondary dropdown-toggle"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							❤ Favorites <span className="badge badge-dark">0</span>
						</button>
						<div className="dropdown-menu-right" aria-labelledby="dropdownMenuButton">
							<a className="dropdown-item" href="#">
								Action
							</a>
							<a className="dropdown-item" href="#">
								Another action
							</a>
							<a className="dropdown-item" href="#">
								Something else here
							</a>
						</div>
					</div>
				</div>
			</Link>
			<div className="ml-auto" />
		</nav>
	);
};
