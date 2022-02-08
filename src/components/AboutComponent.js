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

function About() {
	return (
		<div className="about-section">
			<div className="section-target" id="about"></div>
			<div className="section-container">
				<h1 className="section-title">ABOUT</h1>
				<div className="underline"></div>
				<div className="bio-container">
					<p>
						I enjoy creating things that live on the internet. My interest in
						web development started in 2020. After years of working as a chef in
						kitchens around L.A. and Orange County the pandemic had me stuck at
						home with a computer.
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
				</div>
				<div className="tech-logo-container">
					<h3 className="sub-title">SKILLS</h3>
					<Container>
						<Row className="tech-logo">
							<Col md="2" xs="4">
								<FontAwesomeIcon size="4x" icon={faHtml5} />
								<p>HTML</p>
							</Col>
							<Col md="2" xs="4">
								<FontAwesomeIcon size="4x" icon={faCss3} />
								<p>CSS</p>
							</Col>
							<Col md="2" xs="4">
								<FontAwesomeIcon size="4x" icon={faJs} />
								<p>JavaScript</p>
							</Col>
							<Col md="2" xs="4">
								<FontAwesomeIcon size="4x" icon={faBootstrap} />
								<p>Bootstrap</p>
							</Col>
							<Col md="2" xs="4">
								<FontAwesomeIcon size="4x" icon={faReact} />
								<p>React</p>
							</Col>
							<Col md="2" xs="4">
								<FontAwesomeIcon size="4x" icon={faReact} />
								<p>React Native</p>
							</Col>
							<Col md="2" xs="4">
								<FontAwesomeIcon size="4x" icon={faNodeJs} />
								<p>Node.js</p>
							</Col>
							<Col md="2" xs="4">
								<FontAwesomeIcon size="4x" icon={faJs} />
								<p>Express.js</p>
							</Col>
							<Col md="2" xs="4">
								<FontAwesomeIcon size="4x" icon={faDatabase} />
								<p>MongoDB</p>
							</Col>
							<Col md="2" xs="4">
								<FontAwesomeIcon size="4x" icon={faPython} />
								<p>Python</p>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		</div>
	);
}

export default About;
