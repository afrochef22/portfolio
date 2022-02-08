import React, { Component } from "react";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowDown } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isHovered: false,
		};
		this.toggleHover = this.toggleHover.bind(this);
	}

	toggleHover() {
		this.setState((prevState) => ({ isHovered: !prevState.isHovered }));
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
							onMouseEnter={this.toggleHover}
							onMouseLeave={this.toggleHover}
						>
							Learn more
							{this.state.isHovered ? (
								<FontAwesomeIcon className="arrow" icon={faArrowDown} />
							) : (
								<FontAwesomeIcon className="arrow" icon={faArrowRight} />
							)}
						</Button>
					</div>
				</header>
			</div>
		);
	}
}
export default Header;
