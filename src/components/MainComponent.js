import React, { Component } from "react";
import Header from "./HeaderComponent";
import SiteNavbar from "./NavbarComponent";
import About from "./AboutComponent";
import Projects from "./ProjectComponent";

class Main extends Component {
	render() {
		return (
			<div>
				<Header />
				<SiteNavbar />
				<About />
				<Projects />
			</div>
		);
	}
}

export default Main;
