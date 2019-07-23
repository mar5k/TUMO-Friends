import React from 'react';
import PropTypes from 'prop-types';
import Socket from '../../socket';
import { Container, ListGroup, Form, InputGroup, Button, Row, Col, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './search.css'


class Search extends React.Component {
  constructor(props) {
    //TODO: set default state of list of users, and text search, event handler and socket connect 
    super(props)
    this.state = {
      textSearch: '',
      studentsList: []
    };
    this.query = this.query.bind(this);
  }
  componentDidMount() {
    this.query();
  }
  handleSubmit(event) {
    event.preventDefault();
    this.query(this.state.textSearch);
  }
  onStudentLoggedIn() {
    // TODO: Socket event handler if user logged in - run query
  }
  onStudentLoggedOut() {
    // TODO: Socket event handler if user logged out - run query
  }
  onstartChat(withUser) {
    // TODO: event to invoke start-chat action via Socket, redirect to /network page
  }
  query(textSearch) {
    Socket.connect(users => {
      users.emit('search', textSearch, result => {
        this.setState({ studentsList: result });
      });
    });
  }
  render() {
    return (
      <Container className="mt-5">
        <Row>
          <Col lg={8} md={10} sm={12}>
            <Form onSubmit={e => this.handleSubmit(e)}>
              <Form.Group>
                <InputGroup size="lg" className="mb-3">
                  <Form.Control placeholder='Search' onChange={e => this.setState({ textSearch: e.target.value })} value={this.state.textSearch} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                  <InputGroup.Append>
                    <Button variant='primary' id="r5"> Search </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col lg={6} sm={12}>
            <ListGroup>
              {this.state.studentsList.length > 0 ? this.state.studentsList.map(e => <ListGroup.Item key={e.id}>{e.firstName} {e.lastName} {e.loggedIn && <Badge variant="primary">Online</Badge>}</ListGroup.Item>) : ''}
            </ListGroup>
          </Col>
          <Col lg={6} sm={12}>
            <p>To start chat please click start chat</p>
            <LinkContainer to='/network'><Button variant='primary'>Start Chat</Button></LinkContainer>
          </Col>
        </Row>
      </Container>
    )
  }
}

Search.propTypes = {
  startChat: PropTypes.func,
  currentUser: PropTypes.object,
};
export default Search;