import React, { Component } from "react";
import {
	Card,
	CardBody,
	CardHeader,
	CardFooter,
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faHtml5,
	faReact,
	faJs,
	faBootstrap,
	faNodeJs,
	faCss3,
	faPython,
} from "@fortawesome/free-brands-svg-icons";

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isHovered: true,
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
			<div className="body-dark">
				<div className="section-target" id="projects"></div>

				<div className="section-container tech-logo-container">
					<h1 className="section-title third-bg">Projects</h1>
					<div className="underline-light"></div>
					<Container>
						<Row className="cards">
							<Col sm="">
								<Card
									className="project-card text-right"
									onMouseEnter={this.toggleHover}
									onMouseLeave={this.toggleHover}
								>
									{this.state.isHovered ? (
										<React.Fragment>
											<CardImg className="project-img" />
											<CardImgOverlay>
												<CardHeader>
													<FontAwesomeIcon
														className="card-icon"
														size="1x"
														icon={faCss3}
													/>
													<FontAwesomeIcon
														className="card-icon"
														size="1x"
														icon={faJs}
													/>
												</CardHeader>
												<CardBody>
													<CardText className="card-info">
														A pomodoro clock to help you focus.
													</CardText>
												</CardBody>
												<Button
													className="card-button"
													href="https://my-pomodoro.herokuapp.com/"
													target="_blank"
												>
													Visit
												</Button>
												<Button
													className="card-button"
													href="https://github.com/afrochef22/Pomodoro"
													target="_blank"
												>
													<FontAwesomeIcon icon={faGithub} /> GitHub
												</Button>
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
											<CardImg className="project-img" />
											<CardImgOverlay>
												<CardHeader>
													<FontAwesomeIcon size="1x" icon={faBootstrap} />
												</CardHeader>
												<CardBody>
													<CardText className="card-info">
														An app to help discover new night life spots around
														you.
													</CardText>
												</CardBody>
												<Button
													className="card-button"
													href="#"
													target="_blank"
												>
													Visit
												</Button>
												<Button
													className="card-button"
													href="https://github.com/afrochef22/HappyLifeReact"
													target="_blank"
												>
													<FontAwesomeIcon icon={faGithub} /> GitHub
												</Button>
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
