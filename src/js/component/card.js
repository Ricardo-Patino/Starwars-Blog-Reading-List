import React from "react";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div className="card" style={{ width: "18rem;" }}>
			<img
				className="card-img-top"
				src="https://tse2.mm.bing.net/th?id=OIP.H-XgZ2Zvop6txBCObifhygHaEK&pid=Api&P=0&w=333&h=188"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">{props.hair}</p>
				<p className="card-text">{props.eyes}</p>
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
