import React, { Component } from 'react';
import { Container, Col, Row, Tab, Tabs} from 'react-bootstrap';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import './network.css';
import Socket from '../../socket';
import VideoChat from './VideoChat'

class NetworkPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  handleNewUserMessage = (newMessage) => {
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
      users.removeListener('new message');
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
            title="My new awesome title"
            subtitle="And my cool subtitle"
          />
        </div>
        } 
        <Row noGutters={true}>
          <Col>
            <Tabs defaultActiveKey='document'>
              <Tab eventKey="document" title="Document">
                <h1>Doc</h1>
              </Tab>
              <Tab eventKey="canvas" title="Canvas">
                <Drawing withUser={this.props.withUser} currentUser={this.props.currentUser} />
              </Tab>
            </Tabs>
          </Col>
          <Col>
            <div>
              <VideoChat
                user={this.props.user}
                caller={this.props.receiver ? this.props.withUser : this.props.user}
                receiver={this.props.receiver ? this.props.user : this.props.withUser}
              >
              </VideoChat>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default NetworkPage;
