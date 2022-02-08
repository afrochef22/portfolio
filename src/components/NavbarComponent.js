import React from "react";
import { Component } from "react/cjs/react.production.min";
import {
	Navbar,
	Nav,
	NavItem,
	NavLink,
	NavbarToggler,
	Collapse,
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
				<Navbar dark sticky="top" expand="sm" className="navbar-background">
					<div className="container">
						<NavbarToggler onClick={this.toggleNav} />
						<Collapse isOpen={this.state.isNavOpen} navbar>
							<Nav navbar className="me-auto">
								<NavItem>
									<NavLink onClick={this.toggleNav} href="#header">
										<span className="nav-item">HOME</span>
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink onClick={this.toggleNav} href="#about">
										<span className="nav-item">ABOUT</span>
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink onClick={this.toggleNav} href="#">
										<span className="nav-item">PROJECTS</span>
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink onClick={this.toggleNav} href="#">
										<span className="nav-item">CONTACT</span>
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
