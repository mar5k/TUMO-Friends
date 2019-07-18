import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import './network.css';
// TODO: use --> import Socket from '../../socket';

/**
 * Main React Component for the networking page (WYSIWIG, Chat, Video, Canvas)
 */
class NetworkPage extends Component {
  // constructor(props) {
    // TODO: set state and handlers for chat message and WYSIWIG
  // }
  componentDidMount() {
    // TODO: connect to socket and emit/recieve messages for chat and editor
  }
  componentWillUnmount() {
    // TODO: cleanup listeners for chat/editor sockets
  }
  render() {
    return (
      <Container fluid={true} className="p-0">
        { 
          // TODO: Add chat widget 
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
