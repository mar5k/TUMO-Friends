import { connect } from 'react-redux'
import { withRouter } from "react-router";

import NavigationBar from './NavigationBar';

const mapStateToProps = state => ({
  // TODO: Provide user data from state
})

const mapDispatchToProps = dispatch => {
  // TODO: Provide logout to user
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavigationBar));
