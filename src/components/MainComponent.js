import React, { Component } from "react";
import Header from "./HeaderComponent";
import SiteNavbar from "./NavbarComponent";
import About from "./AboutComponent";
import Projects from "./ProjectComponent";
import Contact from "./ContactComponents";

class Main extends Component {
	render() {
		return (
			<div>
				<Header />
				<SiteNavbar />
				<About />
				<Projects />
				<Contact />
			</div>
		);
	}
}

export default Main;
