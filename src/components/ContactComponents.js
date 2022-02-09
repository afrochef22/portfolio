import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import {
	faTwitter,
	faLinkedin,
	faLinkedinIn,
	faGithub,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Contact extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="body-light">
				<div className="section-target" id="contact"></div>
				<div className="section-container">
					<h1 className="section-title">Contact</h1>
					<div className="underline"></div>
					<div className="form-container">
						<Form inline>
							<FormGroup>
								<Label for="name" hidden>
									Name
								</Label>
								<Input id="name" name="name" placeholder="Name" type="name" />
							</FormGroup>{" "}
							<FormGroup>
								<Label for="exampleEmail" hidden>
									Email
								</Label>
								<Input
									id="exampleEmail"
									name="email"
									placeholder="Email"
									type="email"
								/>
							</FormGroup>{" "}
							<FormGroup>
								<Input
									id="exampleText"
									name="text"
									type="textarea"
									placeholder="Message"
								/>
							</FormGroup>
							<Button>Submit</Button>
						</Form>
					</div>
					<div className="social-container">
						<FontAwesomeIcon
							className="social-icon"
							size="3x"
							icon={faLinkedin}
						/>
						<FontAwesomeIcon
							className="social-icon"
							size="3x"
							icon={faTwitter}
						/>
						<FontAwesomeIcon
							className="social-icon"
							size="3x"
							icon={faGithub}
						/>
						<FontAwesomeIcon
							className="social-icon"
							size="3x"
							icon={faInstagram}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
