import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import { Container, Form } from 'react-bootstrap';

/**
 * React component for Profile page
 */
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: this.props.user ? this.props.email : '', 
      firstName: '', 
      lastName: '' }
  }
  handleSubmit(e) {
    // TODO: EXTRA WORK - handle form submit (if doing updates)
  }
  handleChange(type, value) {
    this.setState({
      [type]: value
    });
  }
  render() {
    if (this.props.user == null) {
      return (
        <Redirect to={{
          pathname: '/',
        }} />
      )
    }
    return (
      <Container className="mt-5">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder={this.state.email} onChange={e => this.handleChange('email', e.target.value)} value={this.state.email} />
            <Form.Text className="text-muted">
              My email
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Example select</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Container>
    )
  }
}

Profile.propTypes = {
  updateUser: PropTypes.func,
  user: PropTypes.object,
  userError: PropTypes.string,
}

export default Profile;
