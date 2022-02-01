import React from "react";
import { Component } from "react/cjs/react.production.min";
import {
	Navbar,
	Nav,
	NavItem,
	NavLink,
	NavbarToggler,
	Collapse,
	NavbarText,
} from "reactstrap";

class SiteNavbar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isNavOpen: false,
		};

		this.toggleNav = this.toggleNav.bind(this);
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen,
		});
	}

	render() {
		return (
			<React.Fragment>
				<Navbar light sticky="top" expand="sm" className="navbar-background">
					<div className="container">
						<NavbarToggler onClick={this.toggleNav} />
						<Collapse isOpen={this.state.isNavOpen} navbar>
							<Nav navbar color="light" light className="me-auto">
								<NavItem>
									<NavLink onClick={this.toggleNav} href="#header">
										Home
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink onClick={this.toggleNav} href="#">
										About
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink onClick={this.toggleNav} href="#">
										Projects
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink onClick={this.toggleNav} href="#">
										Contact
									</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</div>
				</Navbar>
			</React.Fragment>
		);
	}
}

export default SiteNavbar;
