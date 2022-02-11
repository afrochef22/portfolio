import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import {
	faYoutube,
	faHtml5,
	faReact,
	faJs,
	faBootstrap,
	faNodeJs,
	faCss3,
	faPython,
} from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col } from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
	return (
		<div className="body-light">
			<div className="section-target" id="about"></div>
			<div className="section-container">
				<ScrollAnimation animateIn="slideInLeft">
					<h1 className="section-title">ABOUT</h1>
					<div className="underline"></div>
				</ScrollAnimation>
				<div className="bio-container">
					<ScrollAnimation animateIn="slideInRight">
						<p>
							I enjoy creating things that live on the internet. My interest in
							web development started in 2020. After years of working as a chef
							in kitchens around L.A. and Orange County the pandemic had me
							stuck at home with a computer.
						</p>
						<p>
							I recently finished the
							<span className="highlight">
								{" "}
								Full Stack Web and Mobile App Development
							</span>{" "}
							at Nucamp Coding Bootcamp. I have a growing passion for creating
							intuitive, dynamic user experiences. Let's make something special!
						</p>
					</ScrollAnimation>
				</div>
				<div className="tech-logo-container">
					<ScrollAnimation animateIn="slideInLeft">
						<h3 className="sub-title">SKILLS</h3>
					</ScrollAnimation>
					<Container>
						<Row className="tech-logo">
							<Col md="2" xs="4">
								<ScrollAnimation delay="0" animateIn="bounceIn">
									<FontAwesomeIcon size="4x" icon={faHtml5} />
									<p>HTML</p>
								</ScrollAnimation>
							</Col>
							<Col md="2" xs="4">
								<ScrollAnimation delay="100" animateIn="bounceIn">
									<FontAwesomeIcon size="4x" icon={faCss3} />
									<p>CSS</p>
								</ScrollAnimation>
							</Col>
							<Col md="2" xs="4">
								<ScrollAnimation delay="200" animateIn="bounceIn">
									<FontAwesomeIcon size="4x" icon={faJs} />
									<p>JavaScript</p>
								</ScrollAnimation>
							</Col>
							<Col md="2" xs="4">
								<ScrollAnimation delay="300" animateIn="bounceIn">
									<FontAwesomeIcon size="4x" icon={faBootstrap} />
									<p>Bootstrap</p>
								</ScrollAnimation>
							</Col>
							<Col md="2" xs="4">
								<ScrollAnimation delay="400" animateIn="bounceIn">
									<FontAwesomeIcon size="4x" icon={faReact} />
									<p>React</p>
								</ScrollAnimation>
							</Col>
							<Col md="2" xs="4">
								<ScrollAnimation delay="500" animateIn="bounceIn">
									<FontAwesomeIcon size="4x" icon={faReact} />
									<p>React Native</p>
								</ScrollAnimation>
							</Col>
							<Col md="2" xs="4">
								<ScrollAnimation delay="600" animateIn="bounceIn">
									<FontAwesomeIcon size="4x" icon={faNodeJs} />
									<p>Node.js</p>
								</ScrollAnimation>
							</Col>
							<Col md="2" xs="4">
								<ScrollAnimation delay="700" animateIn="bounceIn">
									<FontAwesomeIcon size="4x" icon={faJs} />
									<p>Express.js</p>
								</ScrollAnimation>
							</Col>
							<Col md="2" xs="4">
								<ScrollAnimation delay="800" animateIn="bounceIn">
									<FontAwesomeIcon size="4x" icon={faDatabase} />
									<p>MongoDB</p>
								</ScrollAnimation>
							</Col>
							<Col md="2" xs="4">
								<ScrollAnimation delay="900" animateIn="bounceIn">
									<FontAwesomeIcon size="4x" icon={faPython} />
									<p>Python</p>
								</ScrollAnimation>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		</div>
	);
}

export default About;
