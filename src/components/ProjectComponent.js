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
	Modal,
	ModalBody,
	ModalHeader,
} from "reactstrap";
import pomodoro from "../images/pomodoro.png";
import happyLife from "../images/happyLifePic2.png";
import bgColor from "../images/bgColor.png";
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
import ScrollAnimation from "react-animate-on-scroll";

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isHovered: false,
			isHovered2: false,
			isModalOpen: false,
		};

		this.toggleHover = this.toggleHover.bind(this);
		this.toggleHover2 = this.toggleHover2.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen,
		});
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
					<ScrollAnimation animateIn="fadeInDownBig">
						<h1 className="section-title third-bg">Projects</h1>
						<div className="underline-light"></div>
					</ScrollAnimation>
					<Container>
						<Row className="cards">
							<Col sm="">
								<ScrollAnimation animateIn="fadeInRightBig">
									<Card
										className="project-card text-right"
										onMouseEnter={this.toggleHover}
										onMouseLeave={this.toggleHover}
									>
										{this.state.isHovered ? (
											<React.Fragment>
												<CardImg src={bgColor} className="project-img" />
												<CardImgOverlay>
													<CardHeader>
														<ScrollAnimation
															className="card-icon-container"
															animateIn="bounceIn"
														>
															<FontAwesomeIcon
																className="card-icon"
																size="1x"
																icon={faCss3}
															/>
														</ScrollAnimation>
														<ScrollAnimation
															className="card-icon-container"
															delay={100}
															animateIn="bounceIn"
														>
															<FontAwesomeIcon
																className="card-icon"
																size="1x"
																icon={faJs}
															/>
														</ScrollAnimation>
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
								</ScrollAnimation>
							</Col>
							<Col sm="">
								<ScrollAnimation animateIn="fadeInLeftBig">
									<Card
										className="project-card"
										onMouseEnter={() => this.setState({ isHovered2: true })}
										onMouseLeave={() => this.setState({ isHovered2: false })}
									>
										{this.state.isHovered2 ? (
											<React.Fragment>
												<CardImg src={bgColor} className="project-img" />
												<CardImgOverlay>
													<CardHeader>
														<ScrollAnimation
															className="card-icon-container"
															animateIn="fadeInLeft"
														>
															<FontAwesomeIcon
																className="card-icon"
																size="1x"
																icon={faCss3}
															/>
														</ScrollAnimation>
														<ScrollAnimation
															className="card-icon-container"
															animateIn="bounceIn"
															delay={100}
														>
															<FontAwesomeIcon
																className="card-icon"
																size="1x"
																icon={faBootstrap}
															/>
														</ScrollAnimation>
													</CardHeader>
													<CardBody>
														<CardText className="card-info">
															An app to help discover new night life spots
															around you.
														</CardText>
													</CardBody>
													<Button
														className="card-button"
														// href="#"
														// target="_blank"
														onClick={this.toggleModal}
													>
														Visit
													</Button>
													<Button
														className="card-button animate__pulse"
														href="https://github.com/afrochef22/HappyLifeReact"
														target="_blank"
													>
														<FontAwesomeIcon icon={faGithub} /> GitHub
													</Button>
												</CardImgOverlay>
											</React.Fragment>
										) : (
											<CardImg
												alt="Happy life image"
												src={happyLife}
												className="project-img"
											/>
										)}
									</Card>
								</ScrollAnimation>
							</Col>
						</Row>
					</Container>
				</div>
				<Modal
					centered
					isOpen={this.state.isModalOpen}
					toggle={this.toggleModal}
				>
					<ModalBody>
						<h6>Working hard to bring this to life.</h6>{" "}
						<h6>Check back soon.</h6>
					</ModalBody>

					<Button
						className="card-button third-bg-background"
						style={{ margin: "0px 40px 10px" }}
						onClick={this.toggleModal}
					>
						Got it
					</Button>
				</Modal>
			</div>
		);
	}
}

export default Projects;
