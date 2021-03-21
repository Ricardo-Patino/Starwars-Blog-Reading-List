import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Star Wars</h1>
		<Link to="/planets">
			<img
				width={400}
				height={300}
				src="https://i.pinimg.com/originals/6a/5b/22/6a5b22b88725f21b25f93e004165c6b8.jpg"
				alt="Planets"
			/>
		</Link>
		<Link to="/character">
			<img
				width={400}
				height={300}
				src="https://tse2.mm.bing.net/th?id=OIP.t7Qcmjy5Tkj3_mkyPUxi7wHaEK&pid=Api&P=0&w=346&h=195"
				alt="character"
			/>
		</Link>
	</div>
);
