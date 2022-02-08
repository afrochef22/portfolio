import React, { Component } from "react";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isHovered: false,
			arrowRotate: "arrow",
		};
		this.toggleHoverUp = this.toggleHoverUp.bind(this);
		this.toggleHoverDown = this.toggleHoverDown.bind(this);
	}

	toggleHoverDown() {
		this.setState({
			isHovered: true,
			arrowRotate: "arrow-rotate-down",
		});
	}
	toggleHoverUp() {
		this.setState({
			isHovered: true,
			arrowRotate: "arrow-rotate-up",
		});
	}

	render() {
		return (
			<div id="header">
				<header className="App-header">
					<h1>
						Hello, I'm <span className="highlight">Ashanti Rogers</span>.
					</h1>
					<h2>I'm a full-stack web developer</h2>
					<div>
						<Button
							className="button"
							outline
							onMouseEnter={this.toggleHoverDown}
							onMouseLeave={this.toggleHoverUp}
							href="#about"
							style={{ color: "#fff" }}
						>
							Learn more
							<FontAwesomeIcon
								className="arrow"
								className={this.state.arrowRotate}
								icon={faArrowRight}
							/>
						</Button>
					</div>
				</header>
			</div>
		);
	}
}
export default Header;
