import React from 'react';

/**
 * VideoChat - WebRTC Workshop: will contain all the logic to start video chat with peer
 */
class VideoChat extends React.Component {
  constructor(props) {
    // TODO: set logged in user state, room id, flag if call in progress, and video configuration
  }
  componentDidMount() {
    // TODO: Initialize webrtc object and event listeners
    // addVideo, removeVideo handlers when adding/removing peers to room
    // handleConnectionError - error handler
    // startCall/stopCall - trigger for joining and leaving a room
    // readyToJoin -- joining a room
    // generateRemotes - video elements of peers
  }
  componentWillUnmount() {
    // TODO: disconnect when removing component
  }
  render() {
    // TODO: render video element of user and peers
    return null
  }
}

export default VideoChat;
