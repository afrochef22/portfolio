import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

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

					<Form inline>
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
							<Label for="examplePassword" hidden>
								Password
							</Label>
							<Input
								id="examplePassword"
								name="password"
								placeholder="Password"
								type="password"
							/>
						</FormGroup>{" "}
						<Button>Submit</Button>
					</Form>
				</div>
			</div>
		);
	}
}

export default Contact;
