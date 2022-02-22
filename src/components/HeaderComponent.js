import React, { Component } from "react";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Fade, Transform } from "react-animation-components";
import backgroundImage from "../images/space.jpeg";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isHovered: false,
			arrowRotate: "arrow",
			icon: [<FontAwesomeIcon />],
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
				<header
					className="App-header"
					style={{ backgroundImage: `url(${backgroundImage})` }}
				>
					<Fade in>
						<h1 className="header-text">
							Hello, I'm{" "}
							<Fade delay={200} in className="name">
								<span className="highlight">Ashanti Rogers</span>.
							</Fade>
						</h1>
						<h2 className="header-text">I'm a full-stack web developer</h2>
						<div>
							<Transform
								// enterTransform="translateX(1000px)"
								exitTransform="translateX(-1000px)"
								in
								delay={500}
							>
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
							</Transform>
						</div>
					</Fade>
				</header>
			</div>
		);
	}
}
export default Header;
