import React, { Component } from "react";
import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	Button,
	CardGroup,
	CardImg,
	CardImgOverlay,
	Row,
	Col,
	Container,
} from "reactstrap";
import pomodoro from "../images/pomodoro.png";
import happyLife from "../images/happyLifePic2.png";

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isHovered: false,
			isHovered2: false,
		};

		this.toggleHover = this.toggleHover.bind(this);
		this.toggleHover2 = this.toggleHover2.bind(this);
	}

	toggleHover() {
		this.setState((prevState) => ({ isHovered: !prevState.isHovered }));
	}
	toggleHover2() {
		this.setState((prevState) => ({ isHovered2: !prevState.isHovered2 }));
	}
	render() {
		return (
			<div className="project-body">
				<div className="section-target" id="projects"></div>

				<div className="section-container tech-logo-container">
					<h1 className="section-title third-bg">Projects</h1>
					<div className="underline-light"></div>
					<Container>
						<Row className="cards">
							<Col sm="">
								<Card
									className="project-card"
									onMouseEnter={this.toggleHover}
									onMouseLeave={this.toggleHover}
								>
									{this.state.isHovered ? (
										<React.Fragment>
											<CardImg
												alt="Pomodoro image"
												src={pomodoro}
												className="project-img"
											/>
											<CardImgOverlay>
												<CardBody>
													<CardText>A pomodoro clock to help focus.</CardText>
													<Button href="https://my-pomodoro.herokuapp.com/">
														Button
													</Button>
												</CardBody>
											</CardImgOverlay>
										</React.Fragment>
									) : (
										<CardImg
											alt="Pomodoro image"
											src={pomodoro}
											className="project-img"
										/>
									)}
								</Card>
							</Col>
							<Col sm="">
								<Card
									className="project-card"
									onMouseEnter={this.toggleHover2}
									onMouseLeave={this.toggleHover2}
								>
									{this.state.isHovered2 ? (
										<React.Fragment>
											<CardImg
												alt="Pomodoro image"
												src={happyLife}
												className="project-img"
											/>
											<CardImgOverlay>
												<CardBody>
													<CardText>
														An app to help discover new night life spots around
														you.
													</CardText>
													<Button href="https://my-pomodoro.herokuapp.com/">
														Button
													</Button>
												</CardBody>
											</CardImgOverlay>
										</React.Fragment>
									) : (
										<CardImg
											alt="Pomodoro image"
											src={happyLife}
											className="project-img"
										/>
									)}
								</Card>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		);
	}
}

export default Projects;
