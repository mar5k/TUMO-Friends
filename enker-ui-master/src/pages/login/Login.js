import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Image } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    };

    this.emailChanging = this.emailChanging.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.passwordChanging = this.passwordChanging.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault()
    alert(this.state.password)
    this.props.loginUser(this.state)

  }
  emailChanging(event) {
    this.setState({ email: event.target.value });
  }
  passwordChanging(event) {
    this.setState({ password: event.target.value });
  }
  render() {
    // TODO: use to redirect if user not logged in
    if (this.props.user) {
      return (
        <Redirect to={{
          pathname: '/profile',
        }} />
      )
    }
    return (
      <Container className="mt-3 loginContainer">

        <Form>
          <Image src="http://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,f_auto,h_1440,q_80,w_720/280396/tumologoanahit_vqlyla.png" className="loginPageLogo" />
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.emailChanging} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
              </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.passwordChanging} />
          </Form.Group> 
          <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" className="btn btn-success" onClick={this.handleSubmit}>
            Submit
            </Button>
        </Form>

      </Container>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func,
  user: PropTypes.object,
  userError: PropTypes.string,
}
