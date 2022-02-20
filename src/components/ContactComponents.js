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
import emailjs from "emailjs-com";

class Contact extends Component {
	constructor(props) {
		super(props);

		this.sendEmail = this.sendEmail.bind(this);
	}

	sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm(
				process.env.REACT_APP_YOUR_SERVICE_ID,
				process.env.REACT_APP_YOUR_TEMPLATE_ID,
				e.target,
				process.env.REACT_APP_YOUR_USER_ID
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	}
	render() {
		return (
			<div className="body-light">
				<div className="section-target" id="contact"></div>
				<div className="section-container">
					<h1 className="section-title">Contact</h1>
					<div className="underline"></div>
					<div className="form-container">
						<Form inline onSubmit={this.sendEmail}>
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
						<a
							href="https://www.linkedin.com/in/ashanti-rogers-2879b138/"
							target={"_blank"}
							className="a-tag"
						>
							<FontAwesomeIcon
								className="social-icon grow"
								size="3x"
								icon={faLinkedin}
							/>
						</a>
						<a
							href="https://twitter.com/RogersAshanti"
							target={"_blank"}
							className="a-tag"
						>
							<FontAwesomeIcon
								className="social-icon grow"
								size="3x"
								icon={faTwitter}
							/>
						</a>
						<a
							href="https://github.com/afrochef22twi"
							target={"_blank"}
							className="a-tag"
						>
							<FontAwesomeIcon
								className="social-icon grow"
								size="3x"
								icon={faGithub}
							/>
						</a>
						<a
							href="https://www.instagram.com/afrochef22/"
							target={"_blank"}
							className="a-tag"
						>
							<FontAwesomeIcon
								className="social-icon grow"
								size="3x"
								icon={faInstagram}
							/>
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
