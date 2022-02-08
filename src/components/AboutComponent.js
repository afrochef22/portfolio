import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
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
		<React.Fragment>
			<div className="section-target" id="about"></div>
			<div className="section-container">
				<h1 className="section-title">ABOUT</h1>
				<div className="underline"></div>
				<div className="tech-logo-container">
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
								<FontAwesomeIcon size="4x" icon={faReact} />
								<p>Express.js</p>
							</Col>
							<Col md="2" xs="4">
								<FontAwesomeIcon size="4x" icon={faReact} />
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
		</React.Fragment>
	);
}

export default About;
