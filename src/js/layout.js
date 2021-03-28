import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Planets } from "./views/planets";
import { Character } from "./views/character";
import { Characterdetails } from "./component/characterdetails";
import { Planetdetails } from "./component/planetsdetails";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/planets">
							<Planets />
						</Route>
						<Route exact path="/planetsinfo/:theid">
							<planetsinfo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/character">
							<Character />
						</Route>
						<Route exact path="/characterdetails/:id1">
							<Characterdetails />
						</Route>
						<Route exact path="/planetdetails/:id2">
							<Planetdetails />
						</Route>
						<Route> Not Found</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
