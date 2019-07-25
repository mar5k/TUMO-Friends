import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
// import logo from './logo.svg';
import './network.css';
import Socket from '../../socket';

/**
 * Main React Component for the networking page (WYSIWIG, Chat, Video, Canvas)
 */
class NetworkPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    Socket.connect(user => {
      user.emit('message', newMessage, this.props.withUser);
    });
  }
  componentDidMount() {
    addResponseMessage("Connected Successfully!");
    Socket.connect(user => {
      user.on('new message', msg => {
        addResponseMessage(msg);
      });
    });
  }
  componentWillUnmount() {
    Socket.connect(users => {
      users.removeListener('message');
    })
    // TODO: cleanup listeners for chat/editor sockets
  }
  render() {
    return (
      <Container fluid={true} className="p-0">
        { 
          <div className="App">
          <Widget
            handleNewUserMessage={this.handleNewUserMessage}
            // profileAvatar={logo}
            title="My new awesome title"
            subtitle="And my cool subtitle"
          />
        </div>
        } 
        <Row noGutters={true}>
          <Col>
            <span>TODO: add tabs for Canvas and WYSIWIG</span>
            { 
              // TODO: add tabs for Canvas and WYSIWIG }
            }
          </Col>
          <Col>
            <div>TODO: add VideoChat element
              {
                // TODO: add video chat element
              }
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default NetworkPage;
