import React, { Component } from "react";
import Header from "./HeaderComponent";
import SiteNavbar from "./NavbarComponent";
import About from "./AboutComponent";

class Main extends Component {
	render() {
		return (
			<div>
				<Header />
				<SiteNavbar />
				<About />
			</div>
		);
	}
}

export default Main;
