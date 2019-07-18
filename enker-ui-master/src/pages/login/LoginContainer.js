import { connect } from 'react-redux'

import Login from './Login';

const mapStateToProps = state => {
  // TODO: pass in user logged in state as prop
}

const mapDispatchToProps = dispatch => {
  // TODO: pass in login action
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
