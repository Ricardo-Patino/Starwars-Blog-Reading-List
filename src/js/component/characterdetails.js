import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Jumbotron, Container, Image, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";

export const Charactersdetails = props => {
	const { store } = useContext(Context);
	const id1 = useParams();
	return (
		<Container>
			<Jumbotron>
				<Row>
					<Col>
						<Image
							src="https://www.projectcasting.com/wp-content/uploads/2018/09/star-wars-696x400.jpg"
							width={500}
							height={400}
							rounded
						/>
					</Col>
					<Col>
						{store.peoples.map((item, index) => {
							if (id1 == index) {
								console.log("entro al if ....");
								return <li key={index} />;
							}
						})}

						<h1>{store.peoples[id1].name}</h1>
						<p>
							Star Wars is an American epic space opera[1] media franchise created by George Lucas, which
							began with the eponymous 1977 film and quickly became a worldwide pop-culture phenomenon.
							The franchise has been expanded into various films and other media, including television
							series, video games, novels, comic books, theme park attractions, and themed areas,
							comprising an all-encompassing fiction.
						</p>
					</Col>
				</Row>
				<Row>
					<Col>
						<br />
						<tr>
							<p>Name</p>
						</tr>
						<tr>{store.peoples[id1].name}</tr>
					</Col>

					<Col>
						<br />
						<tr>
							<p>Birth Year</p>
						</tr>
						<tr>{store.peoples[id1].birth_year}</tr>
					</Col>
					<Col>
						<br />
						<tr>
							<p>Gender</p>
						</tr>
						<tr>{store.peoples[id1].gender}</tr>
					</Col>
					<Col>
						<br />
						<tr>
							<p>Height</p>
						</tr>
						<tr>{store.peoples[id1].height}</tr>
					</Col>
					<Col>
						<br />
						<p>SkinColor</p>
						<tr>{store.peoples[id1].skin_color}</tr>
					</Col>
					<Col>
						<br />
						<tr>
							<p>EyeColor</p>
						</tr>
						<tr>{store.peoples[id1].eye_color}</tr>
					</Col>
				</Row>
			</Jumbotron>
		</Container>
	);
};

Charactersdetails.propTypes = {
	match: PropTypes.string
};
