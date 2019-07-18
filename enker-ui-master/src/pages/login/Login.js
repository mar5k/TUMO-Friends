import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
// TODO: use --> import {Redirect} from 'react-router-dom';
import {Container} from 'react-bootstrap';

/**
 * Component for Login Page
 */
export default class Login extends Component {
  // constructor(props) {
    // TODO: set state and form handlers
  // }

  handleSubmit(event){
    event.preventDefault()
  }

  render() {
    // TODO: use to redirect if user not logged in
    // if (this.props.user) {
    //   return (
    //     <Redirect to={{
    //       pathname: '/profile',
    //     }} />
    //   )
    // }
    return (
      <Container className="mt-3">
        
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
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
