import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Jumbotron, Container, Image, Col, Row } from "react-bootstrap";

export const Planetdetails = () => {
	const { store } = useContext(Context);
	const id2 = useParams();
	console.log(store.planets);
	return <div> issues </div>;
};
