import React from 'react';
import { Link, hashHistory } from 'react-router';

class AuthForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: "",
			password: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate(){
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn(){
		if (this.props.loggedIn){
			hashHistory.push("/");
		}
	}

	update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

	handleSubmit(e){
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	navLink(){
		if (this.props.formType === "signin") {
			return <Link to="/signup">sign up instead</Link>;
		} else {
			return <Link to="/signin">sign in instead</Link>;
		}
	}

	renderSignupInputs(){
		return (
			<div>
				<label> Email:
					<input type="text"
						value={this.state.email}
						onChange={this.update("email")}/>
				</label>
				<label> Zip Code:
					<input type="text"
						value={this.state.zip_code}
						onChange={this.update("zip_code")}/>
				</label>
				<label> Role:
					<input type="text"
						value={this.state.role}
						onChange={this.update("role")}/>
				</label>
				<label> Looking for:
					<input type="text"
						value={this.state.looking_for}
						onChange={this.update("looking_for")}/>
				</label>
			</div>
		);
	}

	renderErrors(){
		return(
			<ul>
				{this.props.errors.map( (error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		return (
			<div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
					<br/>
					Please { this.props.formType } or { this.navLink() }
					{ this.renderErrors() }
					<div className="login-form">
						<br />
						<label> Username:
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input" />
						</label>

						<br />
						<label> Password:
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />
						</label>
						{this.props.formType === "signup" ? this.renderSignupInputs() : null}

						<br />
						<input type="submit" value="Submit" />
					</div>
				</form>
			</div>
		);
	}

}

export default AuthForm;
