import React from 'react';

// TODO use --> import Socket from '../../socket';

/**
 * Component use for canvas drawing with peer
 */
class Drawing extends React.Component {
  constructor(props) {
    // TODO set handlers for mouse movements
  }

  // TODO set fields for isPainting boolean, stroke colors, line array, previous position
  isPainting = false;
  // Different stroke styles to be used for user and guest
  userStrokeStyle = 'black';
  guestStrokeStyle = 'black';
  line = [];
  prevPos = { offsetX: 0, offsetY: 0 };

  onMouseDown({ nativeEvent }) {
    // TODO: record mouse positions
  }

  onMouseMove({ nativeEvent }) {
    // TODO: paint based on mouse positions
  }
  endPaintEvent() {
    // TODO: end paint boolean and send data to peer
  }
  paint(prevPos, currPos, strokeStyle) {
    // TODO: Draw on canvas
  }
  sendPaintData() {
    // TODO: send data to socket
  }
  clear() {
    // TODO: clean canvas
  }
  componentDidMount() {
    // TODO: set canvas context configuration, resize listener on canvas width, socket connect/listen --> paint
  }
  render() {
    return (
      <div>TODO: drawing canvas with peer</div>
    )
  }
}

export default Drawing;
